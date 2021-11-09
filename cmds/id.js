const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'id',
    description: 'id',
    async run(message, args, client) {
        let embed = new MessageEmbed()
        .setColor('#ffffff')
        .setTitle('⬜ Twoje ID: ⚪')
        .setDescription(`> ${message.author.id}`)
        .setFooter('-= Uranty =-')
        .setTimestamp()

        message.reply({ embeds: [embed] });
    }
});