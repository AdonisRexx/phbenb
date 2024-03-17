const Discord = require("discord.js");
const db = require("croxydb");
const moment = require("moment");

module.exports = {
    name: Discord.Events.VoiceStateUpdate,
    /**
     * 
     * @param {import('discord.js').Client} client 
     * @param {import('discord.js').VoiceState} oldState 
     * @param {import('discord.js').VoiceState} newState 
     */
    run: async(client, oldState, newState) => {
      const sesLog = "1213533603322011688";
          const channel = oldState.guild.channels.cache.find(c => c.id === sesLog);
      if (oldState.channelId) {
        channel.send({ content: `**<@${oldState.member.id}>** Adlı Kullanıcı, <#${oldState.channel.id}> adlı ses kanalından ayrıldı.\n` })
      } 
      else {
        if (newState.channelId) {
        channel.send({ content: ` **<@${newState.member.id}>** Adlı Kullanıcı, <#${newState.channel.id}> adlı ses kanalına katıldı.\n` })
      }
    }

    }
}
