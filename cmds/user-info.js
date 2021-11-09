const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = new Command({
    name: 'user-info',
    description: 'user-info',

    async run(message, args, client) {
        const Target = message.mentions.users.first() || message.author;
        const Member = message.guild.members.cache.get(Target.id);

        const Reponse = {
        title: `⚪ Informacje o ${Target.username} ⬜`,
        color: '0xffffff',
        fields: [
            {
                name: 'ID:',
                value: `${Target.id}`,
            },
            {
                name: 'Role:',
                value: `${Member.roles.cache.map(r => r).join(" ").replace("@everyone", " ")}`,
            },
            {
                name: 'Na serwerze od:',
                value: `${moment(Member.joinedAt).format('MMMM do YYYY, h:mm:ss a')}\n **-** ${moment(Member.joinedAt).startOf('day').fromNow()}`
            },
        ],
        footer: { 
            text: "-= Uranty =-"
        },
        timestamp: new Date(),
    }
      message.reply({ embeds: [Reponse] });
    }
});