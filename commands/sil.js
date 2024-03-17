const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name: "sil",
    description: 'Sohbetten yazı silebilirsin.',
    type: 1,
    options: [
        {
            name: "sayı",
            description: "Kaç adet mesaj silinecek?",
            type: 3,
            required: true
        },

    ],
    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return interaction.reply({ content: "<:carpiii:1214250638691803176> | Mesajları Yönet Yetkin Yok!", ephemeral: true })
        const sayi = interaction.options.getString('sayı')

        if (sayi > 100) return interaction.reply({ content: "<:carpiii:1214250638691803176> | En fazla __100__ mesaj sildirebilirsin!" , ephemeral: true})

       
        if (!Number(sayi)) {
            interaction.reply({content: "<:carpiii:1214250638691803176> | Geçerli bir sayı girin.", ephemeral: true})
        } else {
            interaction.channel.bulkDelete(sayi)

            interaction.reply({ content: `<:banlayan:1210899205275521084> | __${sayi}__ adet mesajı temizledim.` })
        }

    }

};
