const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 var cevaplar = ['Boks Makinesi Sonucu : **Boks makinesi kırıldı :D=3000** !', 
                 'Boks Makinesi Sonucu : **Çok yavaş vurdun bir daha dene :smile: 100** !', 
                 'Boks Makinesi Sonucu : **Eh,yani 900** !', 
                 'Boks Makinesi Sonucu : **1000** !',
                 'Boks Makinesi Sonucu : **Acayip yavaş vurdun :nauseated_face: =50** !', 
                 'Boks Makinesi Sonucu : **Çok iyi! :boxing_glove: =2000** !', 
                 'Boks Makinesi Sonucu : **Daha iyisini yapabilirsin! :muscle: =700** !',
                 'Boks Makinesi Sonucu : **Daha iyisini yapabilirsin! :muscle: = 550** !', 
                 'Boks Makinesi Sonucu : **Niye 1000 değil :D=999** !', 
                 'Boks Makinesi Sonucu : **Orta! :crown:=1250** !', 
                 'Boks Makinesi Sonucu : **Yine iyisin :white_check_mark: =1150** !', 
                 'Boks Makinesi Sonucu : **Fena değil :smile: =1200** !'
                ];
 var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
 const ping = new Discord.RichEmbed()
 .setColor(2828)
 .setDescription("🥊 " + cevap)
 return  message.channel.sendEmbed(ping)
};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['boks-makinası'],
   permLevel: 0
 };

 exports.help = {
   name: 'boks-makinesi',
   description: 'Boks makinesine vurur.',
   usage: 'boks-makinesi'
}
