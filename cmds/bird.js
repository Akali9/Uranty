const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'bird',
    description: 'ping pong',
    async run(message, args, client) {
        const user = message.mentions.users.first() || message.author;
  
        const embed = new MessageEmbed()
          .setTitle('🐦  Chirp!  🐦')
          .setImage('https://media.discordapp.net/attachments/867392495646277654/900365568710938674/1335c2035ff025761c47e63975e6ee3bf92b3b51.png')
          .setFooter('-= Uranty =-')
          .setTimestamp()
          .setColor('#ffffff');
        message.reply({embeds: [embed]});
    }
});