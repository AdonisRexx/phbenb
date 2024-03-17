const { Client, EmbedBuilder } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name: "afk",
    description: "AFK moduna girmek istiyorsan kullan!",
    type: 1,
    options: [
        {
            name: "sebep",
            description: "Afk Olma Sebebini Gir!",
            type: 3,
            required: true
        },
    ],

    run: async (client, interaction, member, message) => {
        const sebep = interaction.options.getString('sebep')
        const afkEmbed = new EmbedBuilder()
        
        .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setDescription(`<@${interaction.user.id}>, Afk moduna girdi! 

        **Sebep** : ${sebep}  <a:RedVerify:1187034469539008644>`)
        .setColor("Red")


        
        const guildMember = interaction.guild.members.cache.get(interaction.user.id);

        const nickname = guildMember.nickname;

        const afkNickname = `Bu Kullanıcı AFK!`;
        await interaction.member.setNickname(afkNickname).catch(console.error);
        db.set(`nickname_${interaction.user.id}`, nickname);
        
        
        interaction.reply({embeds: [afkEmbed]})
        db.set(`afk_${interaction.user.id}`, sebep);
        db.set(`afkDate_${interaction.user.id}`, { date: Date.now() })
    }

};
