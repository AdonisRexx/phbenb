const { Client, EmbedBuilder, PermissionsBitFieldBitField, embedLength } = require("discord.js");
const db = require("croxydb")
const ms = require('ms')

module.exports = {
    name: "çalış",
    description: "Çalışarak para kazanabilirsin.",
    type: 1,
    options: [],

    run: async (client, interaction, message) => {


        const user = interaction.user;
        const bakiyeSimge = db.fetch(`bakiyeSimge_`)


//         // KOMUT TİMEOUT SİSTEMİ
//         const lastDaily = db.get(`workUser_${user.id}`);
//         const beklee = db.fetch(`workUser_${user.id}`)

//         if (lastDaily && Date.now() - lastDaily < 33000) {
//             interaction.reply({ content: `Daha <t:${parseInt(beklee / 1000)}:R> çalıştın ve yorgunsun! Tekrar çalışabilmek için __32__ saniye beklemelisin.`, ephemeral: true });
//             return;
//         }
//         setTimeout(() => {
//             db.set(`workUser_${user.id}`, Date.now());
//         }, 1000);
//         // TİMEOUT ENDED

//         const randomWCash = (Math.floor(Math.random() * 2500 + 1));


//         var workMessages = [
//             `Bull\'un kaslı kollarıyla bütün dünyayı kendine hayran bıraktın. <:bstr_bull:1179429533804400722> ${randomWCash}${bakiyeSimge}`,
//             `Crow\'u kaçırıp zehrini sattın ve milyoner oldun. <:bstr_crow:1179429400723345498> ${randomWCash}${bakiyeSimge}`,
//             `Gene\'in kollarını kullanarak bankaya eriştin ve para çalıp zengin oldun. <:bstr_gene:1179429406452744262> ${randomWCash}${bakiyeSimge}`,
//             `Lou\'nun ultisini kullanıp hükümetin zihnini dondurdun ve başa sen geçtin. <:bstr_lou:1179429405005725746> ${randomWCash}${bakiyeSimge}`,
//             `Dynamike ile kaçak bomba hazırladın ve sattın. <:bstr_mike:1179429553614114908> ${randomWCash}${bakiyeSimge}`,
//             `Spike\'ı ses teli ameliyatına soktun artık konuşabiliyor ve bunun için sana çok para verdi. <:bstr_spike:1179429408956743772> ${randomWCash}${bakiyeSimge}`,
//             `Squeak\'ın tatlılığını kullanıp bütün kadınları etkiledin artık tüm gözler üstünde! <:bstr_squeak:1179429411112616037> ${randomWCash}${bakiyeSimge}`,
//             `Mandy\'ın şekerlerini leon ile çalıp sattın. O Çok Üzüldü... <:bstr_uzgun:1179429397766357043>`,
//             `Oyunun başına geçip toxic kitleyi yok ettin. <:bstr_dislke:1179429402396852375> ${randomWCash}${bakiyeSimge}`,
//             `Yeni Hesaplaşma haritası oluşturdun ve oyun geliştiricileri haritanı yayımladı! <:bstr_hs:1179416696931483679> ${randomWCash}${bakiyeSimge}`,
//             `İnternet sıkıntısı yaşayan oyuncuların internetlerini düzelttin seni çok seviyorlar artık... <:bstr_badnet:1179429387582586960> ${randomWCash}${bakiyeSimge}`, 
//         ]

//         var Works = Math.floor(Math.random() * workMessages.length);


//         const workEmbed = new EmbedBuilder()
//             .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
//             .setColor("Random")
//             .setDescription(String(workMessages[Works]))
//             .setTimestamp()
//         interaction.reply({ embeds: [workEmbed] })

//         db.add(`para_${interaction.user.id}`, randomWCash);
        interaction.reply({ content: "Bu komut şuanda kapalı!" })



    }
};

