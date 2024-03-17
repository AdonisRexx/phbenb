const { PermissionsBitField, EmbedAssertions, EmbedBuilder } = require("discord.js");
module.exports = {
    name:"sahip",
    description: 'Botun sahibini görebilirsin.',
    type:1,
    options: [],
  run: async(client, interaction) => {


   const embed = new EmbedBuilder()
   .setColor("Red")
   .setTitle(`${client.user.username} Sahibi`)
   .setDescription(`**Botun sahibi** : <@756960762123124767>`)

interaction.reply({embeds: [embed]})

}

};
