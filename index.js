/** @format */

const fs = require("fs");
const moment = require("moment");
const config = require('./Data/config.json');
const Client = require('./Structures/Client.js');
const client = new Client();
const Command = require("./Structures/Command.js");

fs.readdirSync("./cmds").filter(file => file.endsWith('.js')).forEach(file => {
    /**
     * @type {Command}
     */
    const command = require(`./cmds/${file}`);
    console.log(`-= Komenda ${command.name} została załadowana =-`);
    client.commands.set(command.name, command);
});

client.on("ready", () =>  console.log("-=|=- Uranty jest online -=|=-"));

client.on("messageCreate", message => {
    if(message.content.includes(`${client.user.id}`)) {
        const embed = {
            color: 0xffffff,
            title: '⚪ Uranty ⚪',
            description: `> Witaj! Mój aby poznać moje komendy napisz **&pomoc**`,
            footer: { 
                text: "-= Uranty =-"
            },
            timestamp: new Date(),
        }
        message.reply({ embeds: [embed] })
      }

      if(!message.content.startsWith(config.prefix)) return;

      const args = message.content.substring(config.prefix.length).split(/ +/);

      const command = client.commands.find(cmd => cmd.name == args[0]);

      if(!command) return message.reply(`Komenda **&${args[0]}** nie istnieje!`);

      const permission = message.member.permissions.has(command.permission);

      if(!permission) return message.reply(`🔴 Nie posiadasz permisji  **${command.permission}** by użyć tej komendy! 🟥`)

      command.run(message,args, client);
    })

client.login(config.token);

