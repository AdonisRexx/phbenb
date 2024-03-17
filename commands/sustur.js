const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const ms = require("ms")
const db = require("croxydb")

module.exports = {
    name: "sustur",
    description: "Kullanıcıyı belirttiğin süre boyunca susturursun.",
    options: [
        {
            type: 6,
            name: "kullanıcı",
            description: "Kimi susturmamı istiyorsun?",
            required: true
        },
        {
            type: 3,
            name: "süre",
            description: "Ne kadar süre ile susturayım? (1m, 1h, 1d gibi)",
            required: true
        },
        {
            type: 3,
            name: "sebep",
            description: "Susturma sebebini girin.",
            required: true
        }
    ],
    type: 1,

    run: async (client, interaction) => {

        if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "<:carpiii:1214250638691803176> | Üyeleri Sustur Yetkin Yok!", ephemeral: true})


        const botYetki = new EmbedBuilder()
            .setColor("Red")
            .setDescription("<:carpiii:1214250638691803176> | Üyeleri sustur yetkim yokkii...")

        const uyeBulunamadi = new EmbedBuilder()
            .setColor("Red")
            .setDescription("<:carpiii:1214250638691803176> | Belirtilen üyeyi bulamadım...")

        const pozisyon = new EmbedBuilder()
            .setColor("Red")
            .setDescription("<:carpiii:1214250638691803176> | Belirttiğin üyenin rolü benim rolümden daha yüksek!")

        const pozisyon2 = new EmbedBuilder()
            .setColor("Red")
            .setDescription("<:carpiii:1214250638691803176> | Belirttiğin üyenin rolü senin rolünden daha yüksek!")

        const sunucuSahibi = new EmbedBuilder()
            .setColor("Red")
            .setDescription("<:carpiii:1214250638691803176> | Belirtilen üye sunucu sahibi o yüzden susturamazsın!")

        const kendiniSusturma = new EmbedBuilder()
            .setColor("Red")
            .setDescription("<:carpiii:1214250638691803176> | Kendini niye susturuyorsun ki?")

        const botuSusturma = new EmbedBuilder()
            .setColor("Red")
            .setDescription("<:carpiii:1214250638691803176> | Beni susturursan diğer komutları nasıl kullanıcaksın?")

        const gecerliSure = new EmbedBuilder()
            .setColor("Red")
            .setDescription("<:carpiii:1214250638691803176> | Susturabilmem için geçerli bir süre girmelisin.")

        const hata = new EmbedBuilder()
            .setColor("Red")
            .setDescription("<:carpiii:1214250638691803176> | Komutu kullanırken bir hata oluştu.")

        const kullanıcı = interaction.options.getMember("kullanıcı")
        const süre = interaction.options.getString("süre")
        const sebep = interaction.options.getString("sebep")

        let me = interaction.guild.members.cache.get(client.user.id)
        if (!me.permissions.has(PermissionsBitField.Flags.ModerateMembers)) return interaction.reply({ embeds: [botYetki], ephemeral: true })

        if (!kullanıcı) return interaction.reply({ embeds: [uyeBulunamadi], ephemeral: true })
        if (interaction.guild.ownerId === kullanıcı.id) return interaction.reply({ embeds: [sunucuSahibi], ephemeral: true })
        if (interaction.user.id === kullanıcı.id) return interaction.reply({ embeds: [kendiniSusturma], ephemeral: true })
        if (client.user.id === kullanıcı.id) return interaction.reply({ embeds: [botuSusturma], ephemeral: true })

        if (interaction.guild.ownerId !== interaction.author) {
            if (kullanıcı.roles.highest.position >= interaction.member.roles.highest.position) return interaction.reply({ embeds: [pozisyon2], ephemeral: true })
        }

        if (kullanıcı.roles.highest.position >= me.roles.highest.position) return interaction.reply({ embeds: [pozisyon], ephemeral: true })

        const timeout = ms(süre)
        if (!timeout) return interaction.reply({ embeds: [gecerliSure], ephemeral: true })

        await kullanıcı.timeout(timeout).catch((e) => {
            return interaction.reply({ embeds: [hata], ephemeral: true })
        })
        // 

        const basarili = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`<:onaytik:1128607181441355806> | ${kullanıcı} **${sebep}** sebebiyle **${süre}** süre boyunca susturuldu!`)

        return interaction.reply({ embeds: [basarili], ephemeral: false })

    }
};
