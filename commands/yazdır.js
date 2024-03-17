const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "özel",
  description: "Kurucu özel",
  type: 1,
  options: [
    {
        name:"mesaj",
        description:"boşa bakma sana yok",
        type:3,
        required:true
    },
   
   
    
],

  run: async(client, interaction) => {

    
    if (interaction.user.id == 756960762123124767) {

    const text = interaction.options.getString('mesaj')
    interaction.reply({ content: `<:banlayan:1210899205275521084> | Başarılı bir şekilde yazdırıldı.`, ephemeral: true })
    interaction.channel.send({ content: `${text}` })
    } else {
      return interaction.reply({content: "Kullanamazsın!", ephemeral: true})
    }

  }

};
