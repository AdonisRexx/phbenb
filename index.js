const Discord = require("discord.js");
const { GatewayIntentBits  } = require("discord.js")
const fs = require("fs");
const db = require('croxydb')
const config = require("./config.json");
const önerilimit = new Map()
const { Client, EmbedBuilder, PermissionsBitField, interaction } = require("discord.js");

const Rest = require("@discordjs/rest");
const DiscordApi = require("discord-api-types/v10");

const client = new Discord.Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.DirectMessages,
	GatewayIntentBits.GuildMembers,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildVoiceStates
], });

global.client = client;
client.commands = (global.commands = []);

/*                         SLASH COMMANDS                               */
console.log(`[-] ${fs.readdirSync("./commands").length} komut algılandı.`)

for(let commandName of fs.readdirSync("./commands")) {
	if(!commandName.endsWith(".js")) return;
	const command = require(`./commands/${commandName}`);	
	client.commands.push({
		name: command.name.toLowerCase(),
		description: command.description.toLowerCase(),
		options: command.options,
		dm_permission: false,
		type: 1
	});
 
	console.log(`[+] ${commandName} komutu başarıyla yüklendi.`)
}

/*                         EVENTS                                    */

console.log(`[-] ${fs.readdirSync("./events").length} olay algılandı.`)

for(let eventName of fs.readdirSync("./events")) {
	if(!eventName.endsWith(".js")) return;

	const event = require(`./events/${eventName}`);	
	const evenet_name = eventName.split(".")[0];

	client.on(event.name, (...args) => {
		event.run(client, ...args)
	});

	console.log(`[+] ${eventName} eventi başarıyla yüklendi.`)
}

/*                     LOADING SLASH COMMANDS                     */

//
//yeni hesap ban baş
const logChannelId = '1205927876973826098'; // Log kanalının ID'sini buraya girin

client.on('guildMemberAdd', async (member, interaction, guild) => {
    // Yeni gelen üyenin hesap oluşturulma tarihini kontrol et
    const accountCreatedDate = member.user.createdAt;
    const currentDate = new Date();
    const differenceInDays = Math.ceil((currentDate - accountCreatedDate) / (1000 * 60 * 60 * 24));
    
    // Eğer hesap yeni oluşturulmuşsa, üyeyi yasakla ve log kanalına bilgi mesajı gönder
    const thresholdDays = 7; // Kaç günlük hesapları yasaklayacağınızı buradan ayarlayabilirsiniz
    if (differenceInDays <= thresholdDays) {
        try {
            await member.ban({ reason: 'Bu hesap yeni oluşturulmuş! Güvenlik nedeniyle sunucudan yasaklandı!' });
            console.log(`Yeni oluşturulmuş hesap ${member.user.tag} başarıyla yasaklandı.`);
            
            // Log kanalını doğru şekilde bulun
            const guild = member.guild;
            const logChannel = guild.channels.cache.get(logChannelId);
            if (logChannel) {
                logChannel.send(`Yeni oluşturulmuş hesap ${member.user.tag} başarıyla yasaklandı. Yasaklandığı sunucu: ${interaction.guild.name}`);
            } else {
                console.error('Belirtilen log kanalı bulunamadı.');
            }
        } catch (err) {
            console.error(`Yeni oluşturulmuş hesap ${member.user.tag} yasaklanırken bir hata oluştu:`, err);
        }
    }
});
//yeni hesap ban son

client.once("ready", async() => {
	const rest = new Rest.REST({ version: "10" }).setToken(config.token);
  try {
    await rest.put(DiscordApi.Routes.applicationCommands(client.user.id), {
      body: client.commands,  //
    });
  } catch (error) {
    throw error;
  }
});

client.login(config.token).then(() => {
	console.log(`[-] Discord API'ye istek gönderiliyor.`);
	eval("console.clear()")
}).catch(() => {
	console.log(`[x] Discord API'ye istek gönderimi başarısız.`);
});

process.on("unhandledRejection", async (error) => {
    return console.log("SİSTEM MESAJI " + error)
})



// ------------------------------------   ÜYE PANELİ   -------------------------------------
// const bakiyeSimge = db.fetch(`bakiyeSimge_`)

// const channelId = '1202048020053491733'; 
// const intervalTime = 3600000;

// const messages = [
// 	`Sunucuya Boost basarak eşsiz özelliklere sahip olabilirsin! <a:boost1:1128440427498971247>`,
// 	`/çalış Komutu ile para kazanıp sıralamada yükselebilirsin! <:bstr_members:1184542220716621845>`,
// 	`Komutlar için /yardım komutunu kullanabilirsin! <:bstr_helpCommand:1185946388459167806>`,
// 	`Kuralları okumayı unutma! Çünkü sunucuya katıldığın an okumuş kabul edilirsin. <a:ihbar:1152180725269921842>`,
// 	`/profilim Yazarak ekonomi verilerine ve ya kullanıcı verilerine ulaşabilirsin! <:phUsers:1173199238394552422>`,
// 	`/saatlik Yazarak saatlik ödülünü almayı unutma! ${bakiyeSimge}`,
// 	`/günlük Yazarak günlük ödülünü almayı unutma! ${bakiyeSimge}`,
// 	`Eğer premium üyeliğin varsa /premium-kullan ile dev ödülü kazanabilirsin! ${bakiyeSimge}`,
// 	`Kurallara uymayan üyeler cezalandırılır, kimsenin ceza almasını istemeyiz lütfen kurallaya uyun! <a:ihbar:1152180725269921842>`,
// 	`Eğer daha kullanmadıysan /code komutu ile özel kodunu kullanabilirsin. Özel Kodun __**BSTR_3.0**__ <a:animasyon_kalp:1145720214592421961>`,
// 	``,
// ];

// client.once('ready', () => {
//   sendRandomMessage();
  

//   setInterval(() => {
//     sendRandomMessage();
//   }, intervalTime);
// });

// async function sendRandomMessage() {
//   const randomIndex = Math.floor(Math.random() * messages.length);
//   const randomMessage = messages[randomIndex];
  

//   const channel = await client.channels.fetch(channelId);
//   if (channel && channel.isTextBased()) {
// 	const randomEmbed = new EmbedBuilder()
// 	.setColor("Random")
// 	.setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
// 	.setThumbnail('https://cdn.discordapp.com/attachments/1116469760612368435/1218442800962474064/9bd4de5c-c26d-41c3-ac6e-16a9d5ad1b58.jpg?ex=6607ae49&is=65f53949&hm=a38e7c26e11d520a4c4e85213c14e198d2ef43558728af74e81346a008135b73&')
// 	.setImage('https://cdn.discordapp.com/attachments/1116469760612368435/1218443005539913739/413aef59c3f198d7a0a0c056b01c925e.webp?ex=6607ae7a&is=65f5397a&hm=1f3607377e82f56fa07fac13e71cf4f8442f03c7ce04a7bf1150b92d232c6c7d&')
// 	.setTitle(`**Biliyor muydun?**`)
// 	.setDescription(`${randomMessage}`)
// 	channel.send({embeds: [randomEmbed]})
//       .then(sentMessage => console.log(`"${randomMessage}" mesajı başarıyla gönderildi.`))
//       .catch(error => console.error('Mesaj gönderme hatası:', error));
//   } else {
//     console.error(`Belirtilen ID'ye sahip bir metin kanalı bulunamadı: ${channelId}`);
//   }
// }

const express = require("express");
const app = express();
app.listen(process.env.PORT);
app.get("/", (req, res) => {
return res.sendStatus(200);
})

