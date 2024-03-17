const { Client, EmbedBuilder } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name: "say",
    description: "sahip özel!",
    type: 1,
    options: [],

    run: async (client, interaction, member, message) => {
      
        if(interaction.user.id === "756960762123124767"){

    let karma = []
    client.guilds.cache.forEach(x =>{
         interaction.reply("Sunucu ID: "+x.id+"\nSunucu İsmi: "+x.name)
    })

    } else { 
        interaction.reply('Bu Komut Sahibe Özel')
    }
    }

};
