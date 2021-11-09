const Command = require('../Structures/Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
    name: '8ball',
    description: '8ball',

    async run(message, args, client) {

        const answers = [
            "Definitywnie tak.",
            "Definitywnie nie.",
            "Tak, ale nie jestem pewien.",
            "Nie, ale nie jestem pewien.",
            "I ty się mnie oto pytasz?",
            "Nie znam odpowiedzi.",
            "Nie mogę rozwiązać pytania.",
            "Daj mi dłuższą chwilę...",
            "Nie mam teraz czasu.",
            "Daj mi spokój!",
            "Nie licz na to.",
            "To zależy.",
            "Moja odpowiedź to nie.",
            "Może zapytaj później.",
            "Nie mogę ci teraz powiedzieć.",
            "Moje źródła mówią nie.",
            "Tak.",
            "Nie.",
            "Lepiej będzie, jak ci nie powiem.",
            "Sam sobie odpowiedz.",
            "Oczywiście, że tak.",
            "Oczywiście, że nie.",
          ];

          const question = message.content.slice(6).trim();
          if (!question) {
            message.reply("⚪ Nie podano pytania. ⬜");
            return;
          }

          const answer = answers[Math.floor(Math.random() * answers.length)];

        const embed = {
          color: 0xffffff,
          fields: [
              {
                  name: '⚪ Pytanie: ⚪',
                  value: `${question}`,
              },
              {
                  name: '⬜ Odpowiedź: ⬜',
                  value: `${answer}`,
              }
          ],
          footer: { 
            text: "-= Uranty =-"
        },
        timestamp: new Date(),
        }
        
        message.reply({ embeds: [embed] });
    }
});