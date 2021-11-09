const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: 'psc',
    description: 'iq',
    async run(message, args, client) {
        const generateNumber = () => {
            return Math.floor(Math.random() * 10)
        }

        let psc = '0'

        for(i = 0; i < 15; i++) {
            psc += `${generateNumber()}`

            if((i % 4 == 2) && i != 14) psc += '-'
        }

        const embed = new MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Nowy kod psc')
        .setDescription(`Legenda głosi, że jakiś kod psc działa.\n\nTwój kod: ||${psc}||`)
        .setFooter('-= Uranty =-')
        .setTimestamp()
    
        message.reply({ embeds: [embed] })
    }
});