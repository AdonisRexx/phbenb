const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
  name: "sunucu-link",
  description: "BSTR Topluluğunun discord sunucu linkini atar.",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const row = new Discord.ActionRowBuilder()
        .addComponents(
      new  Discord.ButtonBuilder()
     .setLabel('Tıkla Ve Katıl!')
     .setStyle('Link')
     .setEmoji('1179429390032052234')
     .setURL('https://discord.gg/brawlstarsturkiye')
      )
    .addComponents(
      new Discord.ButtonBuilder()
          .setEmoji("1173188126064259123")
          .setLabel("Mesajı Sil")
          .setStyle(Discord.ButtonStyle.Secondary)
          .setCustomId(".phClear_" + interaction.user.id)
  )



    const bstr = new EmbedBuilder()
    .setColor("Purple")
    .setTitle(`**BSTR Topluluğuna Katıl!**`)
    .setDescription(`*Brawl Stars Türkiye Topluluk Sunucusuna Gelerek Kesintisiz Eğlenceye Sende Katılabilirsin!*`)
    .setThumbnail('https://cdn.discordapp.com/attachments/1116469760612368435/1218442800962474064/9bd4de5c-c26d-41c3-ac6e-16a9d5ad1b58.jpg?ex=6607ae49&is=65f53949&hm=a38e7c26e11d520a4c4e85213c14e198d2ef43558728af74e81346a008135b73&')
    .setImage('https://cdn.discordapp.com/attachments/1116469760612368435/1218443005539913739/413aef59c3f198d7a0a0c056b01c925e.webp?ex=6607ae7a&is=65f5397a&hm=1f3607377e82f56fa07fac13e71cf4f8442f03c7ce04a7bf1150b92d232c6c7d&')
    .setTimestamp()


    interaction.reply({content: '', embeds: [bstr], components: [row]})

  }

};
