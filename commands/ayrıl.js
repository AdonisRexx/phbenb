const { Client, EmbedBuilder } = require("discord.js");
const db = require("croxydb");

module.exports = {
    name: "ayrıl",
    description: "Sahip özel!",
    type: 1,
    options: [
        {
            name: "ayrıl",
            description: "Ayrılma işlemini gerçekleştir.",
            type: 3,
            required: true,
        },
    ],

    run: async (client, interaction, member, message) => {
        // Kullanıcının bir bot sahibi olup olmadığını kontrol etmek için gerekli yetkiyi alın
        const ownerID = "756960762123124767";
        if (interaction.user.id !== ownerID) {
            return interaction.reply({ content: "Bu komutu kullanma izniniz yok!", ephemeral: true });
        }

        try {
            // Kullanıcının girdiği sunucu ID'sini alın
            const guildID = interaction.options.getString("ayrıl");
            // Sunucuyu bulun
            const guild = client.guilds.cache.get(guildID);
            if (!guild) {
                return interaction.reply({ content: "Belirtilen sunucu bulunamadı.", ephemeral: true });
            }

            // Sunucudan ayrılın
            await guild.leave();
            interaction.reply({ content: "Sunucudan başarıyla ayrıldım." });
        } catch (error) {
            console.error("Sunucudan ayrılırken bir hata oluştu:", error);
            interaction.reply({ content: "Sunucudan ayrılırken bir hata oluştu.", ephemeral: true });
        }
    }
};
