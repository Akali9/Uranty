const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'pomoc',
    description: 'pomoc',
    async run(message, args, client) {
        const embed = {
            color: 0xffffff,
            title: '⚪ Pomoc Bota Uranty ⚪',
            thumbnail: {
            url:    'https://cdn.discordapp.com/attachments/867392495646277654/882964475630735380/v3cty.png',
            },
            fields: [
                {
                    name:  '> <:dev:876104922444202024> Deweloperskie: [ 2 ]',
                    value: '&eval | &serwery |'
                },
                {
                    name: '> 🤖 Bot: [ 4 ]',
                    value: '&bot-info | &donate | &invite | &uptime |',
                },
                {
                    name: '> 🛠 Moderacyjne: [ 3 ]',
                    value: '&ban | &kick | &say |'
                },
                {
                    name: '> 🤣 4FUN: [ 7 ]',
                    value: '&8ball | &bird | &fox | &psc | &kappa | &ping | &ktopytal |',
                },
                {
                    name: '> 📌 Informacyjne: [ 4 ]',
                    value: '&avatar | &id | &server-info | &user-info |',
                },
                {
                    name: '> <:djs:874365505442558032> Biblioteka bota:',
                    value: 'Discord.JS v13'
                }
            ],
            footer: { 
                text: "-= Uranty =-"
            },
            timestamp: new Date(),
        }
        
        message.reply({ embeds: [embed] });
    }
});
