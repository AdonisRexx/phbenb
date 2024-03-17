const { Client, EmbedBuilder } = require("discord.js");
const db = require("croxydb");

module.exports = {
    name: "rolsıralama",
    description: "Rol sıralamasına bakarsın.",
    type: 1,
    options: [],

    run: async (client, interaction) => {
        const guild = interaction.guild;

        // Tüm üyeleri önbelleğe al
        await guild.members.fetch();

        // Bot olmayan üyeleri rol sayısına göre sırala
        const sortedMembers = Array.from(guild.members.cache.values())
            .filter(member => !member.user.bot) // Botları filtrele
            .sort((a, b) => b.roles.cache.size - a.roles.cache.size);

        // En çok role sahip olan ilk üç bot olmayan üyeyi al
        const topThreeMembers = sortedMembers.slice(0, 10);

        // Embed oluştur
        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('En Çok Role Sahip 10 Kullanıcı')
            .setDescription(topThreeMembers.map((member, index) => `${index + 1}. <@!${member.user.id}> - Rol Sayısı: ${member.roles.cache.size - 1}`).join('\n'));

        // Embed'i yanıt olarak gönder
        await interaction.reply({ embeds: [embed] });
    }
};