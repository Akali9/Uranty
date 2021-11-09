const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'invite',
    description: 'ping pong',

    async run(message, args, client) {
        let newEmbed = new MessageEmbed()
  
        .setColor("#ffffff")
        .setTitle("⚪ Zaproś mnie na swój serwer! ⬜")
        .setURL(
          "https://discord.com/api/oauth2/authorize?client_id=903992413322887199&permissions=8&scope=bot"
        )
        .setDescription(
          "Aby zaprosić mnie na własny serwer, użyj **kliknij wyżej**!"
        )
        .setFooter('-= Uranty =-')
        .setTimestamp()
  
      message.reply({ embeds: [newEmbed] });
    }
});