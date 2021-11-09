const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'avatar',
    description: 'ping pong',
    async run(message, args, client) {
        const user = message.mentions.users.first() || message.author;
  
      const embed = new MessageEmbed()
        .setColor("#ffffff")
        .setTitle(`⚪ Avatar użytkownika ${user.username} ⬜`)
        .setFooter('-= Uranty =-')
        .setTimestamp()
        .setImage(user.displayAvatarURL({ dynamic: true }));
  
      message.reply({embeds: [embed] });
    }
});