const { Client, PermissionsBitField } = require("discord.js");
const ayarlar = require("../config.json")

module.exports = {
    name: "database-sıfırla",
    description: "Tüm database verilerini sıfırlarsın.",
    type: 1,
    options: [],

    run: async (client, interaction, message) => {


if (interaction.user.id === '756960762123124767') {
  
        await interaction.reply({ content: "Veriler sıfırlanıyor lütfen bekleyin." });

        setTimeout(() => {
            interaction.editReply({
                content: `**%0** <:basbosbar:1140296416548368524><:ortabosbar:1140296420746866738><:ortabosbar:1140296420746866738><:ortabosbar:1140296420746866738><:sonbosbar:1140296425322840104>`,
            });
        }, 2000); 

        setTimeout(() => {
            interaction.editReply({
                content: `**%20** <:basdolubar:1140296418679066636><:ortabosbar:1140296420746866738><:ortabosbar:1140296420746866738><:ortabosbar:1140296420746866738><:sonbosbar:1140296425322840104>`,
            });
        }, 4000); 

        setTimeout(() => {
            interaction.editReply({
                content: `**%40** <:basdolubar:1140296418679066636><:ortadolubar:1140296423263436882><:ortabosbar:1140296420746866738><:ortabosbar:1140296420746866738><:sonbosbar:1140296425322840104>`,
            });
        }, 6000); 

        setTimeout(() => {
            interaction.editReply({
                content: `**%60** <:basdolubar:1140296418679066636><:ortadolubar:1140296423263436882><:ortadolubar:1140296423263436882><:ortabosbar:1140296420746866738><:sonbosbar:1140296425322840104>`,
            });
        }, 8000); 

        setTimeout(() => {
            interaction.editReply({
                content: `**%80** <:basdolubar:1140296418679066636><:ortadolubar:1140296423263436882><:ortadolubar:1140296423263436882><:ortadolubar:1140296423263436882><:sonbosbar:1140296425322840104>`,
            });
        }, 10000); 

        setTimeout(() => {
            interaction.editReply({
                content: `**%100** <:basdolubar:1140296418679066636><:ortadolubar:1140296423263436882><:ortadolubar:1140296423263436882><:ortadolubar:1140296423263436882><:sondolubar:1140296428384690227>`,
            });
        }, 12000); 

        setTimeout(() => {
            interaction.editReply({
                content: `Veriler sıfırlandı!`,
            });
        }, 14000); 

} else {
  interaction.reply({content: "Bu komutu sadece belirli kişiler kullanabilir!"})
}

    },
};