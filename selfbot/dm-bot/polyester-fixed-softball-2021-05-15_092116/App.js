const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
console.log('Uptiming');
response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const { Client, Util } = require('discord.js');
const chalk = require('chalk');
const config = require("./config.json");
const botname = require("./config.json").botname
const token = require("./config.json").token
//coins
 //Hello
const bot = new Discord.Client();
bot.on("ready", () => {
console.log(chalk.blue(`Made By DanizPlayz`));
});
bot.on("ready", () => {
console.log(`
Login As: ${bot.user.tag}
Server: ${bot.guilds.size}
User: ${bot.users.size}
`) 
});
bot.on("ready", () => {
console.log(chalk.green(`Loading Please Wait.....`));
});

const msg = require("./config.json").messages

bot.on('ready', () => {
  if(!msg) return console.log(chalk.yellow(`Please Put Your Messages On CONFIG`));
        bot.guilds.forEach(g=>{
        g.members.forEach(member=>{
            setTimeout(function(){
        if(member.id == bot.user.id) return;
        if(member.user.bot) return;
       // if(member.hasPermission("BAN_MEMBERS") || member.hasPermission("KICK_MEMBERS") || member.hasPermission("MANAGE_ROLES")) return;
        console.log(chalk.green(`Messages Have Been Send To ${member.user.username} `));
        member.send(`${msg}`).catch(err => {
   console.log(chalk.yellow(` User ${member.user.username} has Direct Messages Disabled!`));
                                });
    }, 30000);
    });
})
});




bot.login(token).catch(err => {
            console.log(chalk.red(`Please Put Your Token On CONFIG`));
        });