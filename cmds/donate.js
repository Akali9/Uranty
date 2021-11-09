const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'donate',
    description: 'donate',
    async run(message, args, client) {
        const embed = {
            color: 0xffffff,
            fields: 
            { 
                name: '> Donate dla bota 🤍', 
                value: '[PAYPAL](https://www.paypal.me/Aszkalii)' 
            },
            footer: {
                text: '-= Uranty =-',
            },
            timestamp: new Date(),
        }
        message.reply({ embeds: [embed] });
    }
})