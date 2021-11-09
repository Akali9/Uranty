const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'ktopytal',
    description: 'ktopytal',
    async run(message, args, client) {
        const user = message.mentions.users.first() || message.author;
  
      const embed = new MessageEmbed()
        .setColor("#ffffff")
        .setTitle(`⚪ Kto pytał? __${user.username}__  ⬜`)
        .setFooter('-= Uranty =-')
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/867392495646277654/907307204233810000/ktopytal3.png");
  
      message.reply({embeds: [embed] });
    }
});