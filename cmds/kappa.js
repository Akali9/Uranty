const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'kappa',
    description: 'kappa',
    async run(message, args, client) {
  
      const embed = new MessageEmbed()
        .setColor("#ffffff")
        .setTitle(`⚪ Kappa ⬜`)
        .setFooter('-= Uranty =-')
        .setTimestamp()
        .setImage('https://media.discordapp.net/attachments/867392495646277654/898202200029937714/latest.png?width=468&height=468');
  
      message.reply({embeds: [embed] });
    }
});