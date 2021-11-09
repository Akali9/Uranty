const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'fox',
    description: 'ping pong',
    async run(message, args, client) {

      const embed = new MessageEmbed()
        .setTitle('🦊  What does the fox say?  🦊')
        .setImage('https://media.discordapp.net/attachments/867392495646277654/900366159558369311/unknown.png?width=375&height=468')
        .setFooter('-= Uranty =-')
        .setTimestamp()
        .setColor('#ffffff');
      message.reply({embeds: [embed]});
    }
});