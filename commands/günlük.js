const { Client, EmbedBuilder, PermissionsBitFieldBitField, embedLength } = require("discord.js");
const db = require("croxydb")
const ms = require('ms')

module.exports = {
    name: "günlük",
    description: "Günlük Ödülünü Alırsın!",
    type: 1,
    options: [],

    run: async (client, interaction, message) => {

        const user = interaction.user;
        const lastDaily = db.get(`lastDaily_${user.id}`);
        const beklee = db.fetch(`lastDaily_${user.id}`)
        const bakiyeSimge = db.fetch(`bakiyeSimge_`)

    
//         if (lastDaily && Date.now() - lastDaily < 24 * 60 * 60 * 1000) {
//           interaction.reply({content: `Günlük ödülünü zaten <t:${parseInt(beklee / 1000)}:R> almışsın! Tekrar alabilmek için __bir__ gün beklemelisin.`, ephemeral: true});
//           return;
//         }
    
//         const dailyy = 1500; 
    
//         db.add(`para_${interaction.user.id}`, dailyy)

    

//         setTimeout(() => {
//           db.set(`lastDaily_${user.id}`, Date.now());
//         }, 1000);

//         const parasayisi = db.fetch(`para_${interaction.user.id}`) || 0; 
//         const bankasayi = db.fetch(`banka_${interaction.user.id}`) || 0;
        
//         const toplamPara = parasayisi + bankasayi;

    
//         const günlükEmbed = new EmbedBuilder()
//         .setColor("DarkGreen")
//         .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
//         .setDescription(`${user} Başarıyla günlük ödülünü aldın! \n**Alınan Ödül**: ${dailyy}${bakiyeSimge}`)


//         interaction.reply({embeds: [günlükEmbed]})
        interaction.reply({ content: "Bu komut şuanda kapalı!" })
      }
};

