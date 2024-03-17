const { CommandInteraction, MessageEmbed, EmbedBuilder, } = require('discord.js');
const Discord = require('discord.js')
const axios = require('axios');

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg1NGIzYjBjLWU1OTEtNDFmYy1iNDkzLWQ4OWYxMWQ5NGJiYyIsImlhdCI6MTcxMDQyMDg5Nywic3ViIjoiZGV2ZWxvcGVyL2NmZjFjYjcwLWYyODMtMmViNS1mZTMyLWJlMTY4N2M4YTc4YyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTg0LjcyLjIxMi4xODkiXSwidHlwZSI6ImNsaWVudCJ9XX0.Ncqf482FRVBxU7NSukLGm5LQdeyMYhPsjHHt9ZSRbBKY_NlZaVInCmVQs1H6P_gHR2WiHBn2fiAIhUxYJwbtuw'; // Token'ınızı buraya ekleyin

module.exports = {
    name: "oyun-istatistik",
    description: "Brawl Stars oyuncu istatistiklerini gösterir.",
    type: 1,
    options: [
        {
            name: "oyuncu_id",
            type: 3,
            description: "İstatistiklerini görmek istediğin hesabın id'sini gir (# olmadan)",
            required: true
        },
    ],

    run: async (client, interaction) => {
        const playerId = interaction.options.getString('oyuncu_id');

        try {
            const response = await axios.get(`https://api.brawlstars.com/v1/players/%23${playerId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const playerData = response.data;
            const clubData = playerData.club;
            const openBrawlers = playerData.brawlers.length;
            const openBrawlerImages = playerData.brawlers
                .filter(brawler => brawler.isUnlocked)
                .map(brawler => `https://api.brawlstars.com/resources/brawlers/${brawler.id}/icon.png`);

            const EnYuksekBrawler = playerData.brawlers.reduce((maxBrawler, currentBrawler) => (currentBrawler.trophies > maxBrawler.trophies) ? currentBrawler : maxBrawler).name

            const openBrawlersx = playerData.brawlers.filter(brawler => brawler.name);
            const openBrawlerNames = openBrawlersx.map(brawler => `${brawler.name} - <:bstr_kupa:1179429391676227625> ${brawler.trophies}`).join('\n'); // Açık karakterlerin isimlerini ve kupalarını birleştir



          
            const embed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle(`**${playerData.name} - Oyuncu İstatistikleri**`)
                .setDescription(`
            
            __**OYUNCUNUN PROFİL VERİLERİ**__ <:bstr_kupa:1179429391676227625> 

            **Şuan ki Kupa** : ${playerData.trophies} <:bstr_kupa:1179429391676227625> 

            **En Yüksek Kupa** : ${playerData.highestTrophies} <:bstr_kupa:1179429391676227625> 

            **EXP Seviyesi** : ${playerData.expLevel} <:brawl_xp:1213179547025932339>

            **3v3 Zafer** : ${playerData['3vs3Victories']} <:3vs3:1213182205363355688> 

            **Tek Hesaplaşma Zafer** : ${playerData.soloVictories} <:solo_showd:1213182299303321720> 

            **Çift Hesaplaşma Zafer** : ${playerData.duoVictories} <:duo_showd:1213182208735449219>

            __**OYUNCUNUN KARAKTER VERİLERİ**__ <a:colt:1213432705602293831>
            
            **Açılan Karakter Sayısı**: ${openBrawlers}/80 <:playercon:1213182207229689907> 
    
            **En Yüksek Kupaya Sahip Karakter**: ${EnYuksekBrawler}

            __**OYUNCUNUN KLÜP BİLGİLERİ**__ <:klanIcon:1213438441975451688>
            
            **Klüp İsmi** : ${playerData.club.name || "Oyuncu Herhangi Bir Klübe Katılmamış. <:carpiii:1214250638691803176>"}

            **Klüp Tagı** : ${playerData.club.tag || "Oyuncu Herhangi Bir Klübe Katılmamış. <:carpiii:1214250638691803176>"}
            `)
            interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            interaction.reply(`${playerId} ID'li Oyuncu Taranırken Api Hatası Oluştu!`);
        }

    }
};
