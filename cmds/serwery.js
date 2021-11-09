const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'serwery',
    description: 'serwery',
    async run(message, args, client) {
        if(message.author.id !== "852182697723559936") return message.reply('❗ Nie jesteś Deweloperem bota ❗');
        
        let guilds = [];

        client.guilds.cache.forEach((guild) => {
            guilds.push(
                `${guild.name}        ${guild.id}        ${guild.memberCount}\n`
            );
        });
        const embed = new MessageEmbed()
            .setTitle("Serwery!")
            .setColor("#ffffff")
            .setDescription(`${guilds}`, { split: true })
            .setFooter(
                message.author.tag,
                message.author.displayAvatarURL({ dynamic: true }),
            )

        message.reply({ embeds: [embed] })
    }
});