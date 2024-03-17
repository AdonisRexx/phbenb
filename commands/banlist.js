const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "ban-list",
  description: "Banlı Olan Kullanıcıları Görebilirsin!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

        if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content: "<:redcarpi:1128609008345952256> | Yetki olmadan göremezsin!", ephemeral: true})

    
    var userlist = interaction.guild.bans.fetch()
    userlist.then(collection => {
    if(collection.first() == null){
      
    const embed = new EmbedBuilder()
    .setDescription("Sunucunuzda Banlanan Kimse Yok!")      
    .setColor("Red")
    .setTitle("<:carpi:1040649840394260510> Hata!")
    interaction.reply({embeds: [embed]})
      
    } else {
    const data = collection.map(mr => "`"+mr.user.displayName+"`").slice(0, 60).join(" **|** ")
    const embed2 = new EmbedBuilder()
    .setTitle("Brawl Stars Türkiye - Yasaklı Kullanıcılar")
    .setColor("#ff0000")
    .setDescription(data)
    interaction.reply({embeds: [embed2], ephemeral: true})
}

  })
}

};