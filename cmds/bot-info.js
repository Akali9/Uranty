const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'bot-info',
    description: 'bot-info',
    async run(message, args, client) {
        const embed = {
        color: 0xffffff,
        thumbnail: {
        url:    'https://media.discordapp.net/attachments/867392495646277654/882964475630735380/v3cty.png',
        },
        title: '⬜ Info o bocie Uranty: ⬜',
        fields: [
            {
                name: '> 📅 Data utworzenia bota:',
                value: '02.09.2021',
            },   
            {
                name: '> 🤍 Twórca bota:',
                value: 'h3vv#5669',
            },
            {
                name: '> 💻 Serwery',
                value: `${client.guilds.cache.size}`,
            },
        ],
        footer: {
            text: '-= Uranty =-'
        },
        timestamp: new Date(),
    }

        message.reply({ embeds: [embed] });
        }
})