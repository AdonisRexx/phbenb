const { Client, EmbedBuilder } = require("discord.js");
const db = require("croxydb");

module.exports = {
    name: "para",
    description: "Bir kullanıcının parasına bakarsın.",
    type: 1,
    options: [
        {
            name: "kullanıcı",
            description: "Kullanıcı etiketle",
            type: 6,
            required: false
        } 
    ],

    run: async (client, interaction) => {
        const userr = interaction.options.getMember("kullanıcı") || interaction.user;


//         const parasayisi = db.fetch(`para_${userr.id}`) || 0;
//         const bankasayi = db.fetch(`banka_${userr.id}`) || 0;
//         const parasayisi1 = db.fetch(`para_${interaction.user.id}`) || 0;
//         const bankasayi1 = db.fetch(`banka_${interaction.user.id}`) || 0;
//         const bakiyeSimge = db.fetch(`bakiyeSimge_`) || "";


//         const toplamPara = parasayisi + bankasayi;

//         let bakiyex;

//             bakiyex = new EmbedBuilder()
//                 .setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
//                 .setDescription(`**${userr} Bakiye: ${parasayisi}${bakiyeSimge}** \n**Bankadaki Para: ${bankasayi}${bakiyeSimge}** \n**Toplam Para: ${toplamPara}${bakiyeSimge}**`)
//                 .setColor("Random");

//         interaction.reply({ embeds: [bakiyex] });
      interaction.reply({ content: "Bu komut şuanda kapalı!" })
    }
};