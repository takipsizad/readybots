const Discord = require('discord.js');
const fs = require('fs');
let küfürEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8"));

var ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:fire: Yeterli yetki, bulunmamakta!`);

    let args = message.content.split(' ').slice(1);
    const secenekler = args.slice(0).join(' ');

    var errembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Yanlış kullanım tespit edildi!`)
    if(secenekler.length < 1) return message.channel.send(errembed);
    //if(secenekler === "aç" || "kapat") return message.channel.send(errembed);
      if(secenekler.length < 1) return message.reply("Aktif hale getirmek için c!küfür-engelle aç & c!küfür-engelle kapat").then(m => m.delete(10000));

    message.delete();

            if (secenekler === "aç") {
        message.channel.send(`Küfür filtresi, aktif hale getirildi!`).then(m => m.delete(5000));
        küfürEngel[message.guild.id] = {
            küfürEngel: "acik"
          };

          fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(küfürEngel), (err) => {
            if (err) console.log(err)
          });
    };

    if (secenekler === "kapat") {
        message.channel.send(`Küfür filtresi, deaktif hale getirildi!`).then(m => m.delete(5000));
        küfürEngel[message.guild.id] = {
            küfürEngel: "kapali"
          };

        fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(küfürEngel), (err) => {
            if (err) console.log(err)
          });
    };
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['küfür-engel'],
        permLevel: 3
      };
      
      exports.help = {
        name: 'küfür-engelle',
        description: 'Küfür engelleme sistemini, açıp kapatmanızı sağlar.',
        usage: 'küfür-engelle <aç> veya <kapat>'
      };
