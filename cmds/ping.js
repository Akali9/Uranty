const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'ping',
    description: 'ping pong',

    async run(message, args, client) {
        const embed = {
            color: 0xffffff,
            title: '⚪ Uranty ⚪',
            description: `> Pong! 🏓 | **${client.ws.ping}**ms`,
            footer: { 
                text: "-= Uranty =-"
            },
            timestamp: new Date(),
        }
        
        message.reply({ embeds: [embed] });
    }
});