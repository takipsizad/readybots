const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " xen| syplex");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();




client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("829292055649189908") // j4j fast kanal id'si


       a.send("j4j dm") //mesajınız


      }, 500);
})




client2.on("ready", () => {
      setInterval(() => {
       let a = client2.channels.get("829292055649189908") // j4j fast kanal id'si


       a.send("j4j dm ") //mesajınız



      }, 500);
})

client2.on("ready", () => {
      setInterval(() => {
       let a = client2.channels.get("829292055649189908") // j4j fast kanal id'si


       a.send("/tfollow minikparadox") //mesajınız



      }, 100);
})


client3.on("ready", () => {
      setInterval(() => {
       let a = client3.channels.get("829292055649189908") // j4j fast kanal id'si


       a.send("/tfollow minikparadox") //mesajınız



      }, 500);
})

client3.on("ready", () => {
      setInterval(() => {
       let a = client3.channels.get("829292055649189908") // j4j fast kanal id'si


       a.send("/tfollow minikparadox") //mesajınız


      }, 100);
})


client4.on("ready", () => {
      setInterval(() => {
       let a = client4.channels.get("829292055649189908") // j4j fast kanal id'si


       a.send("/tfollow minikparadox") //mesajınız


      }, 500);
})

client4.on("ready", () => {
      setInterval(() => {
       let a = client4.channels.get("829292055649189908") // j4j fast kanal id'si


       a.send("/tfollow minikparadox") //mesajınız


      }, 100);
})


client.login(process.env.token) // TOKENİ .env e TAŞIDIK1
client2.login(process.env.token2) // TOKENİ .env e TAŞIDIK
client3.login(process.env.token3) // TOKENİ .env e TAŞIDIK
client4.login(process.env.token4) // TOKENİ .env e TAŞIDIK