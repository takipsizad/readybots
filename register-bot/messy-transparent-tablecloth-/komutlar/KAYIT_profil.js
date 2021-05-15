 let Discord = require("discord.js");
let db = require("quick.db")
let { oldu, hata, bot } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
            let sayici = await db.fetch(`say.toplam.${message.author.id}.${message.guild.id}`)
            
     
   
      let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  let erkek = await db.fetch(`say.erkek.${message.author.id}.${message.guild.id}`)
  let kadın = await db.fetch(`say.kadın.${message.author.id}.${message.guild.id}`)

  if(!erkek || !kadın) {
    let embed1 = new Discord.MessageEmbed()
    .setTitle("HATA!")
    .addField(`Erkek Veya Kadın Kayıtın Zaten Yok!`, `Hemen Erkek Ve Kadın Birini Kayıt Et! Öyle Gel!`)
    .setColor(ayarlar.hata)
    message.channel.send(embed1)
    
    return
  }



  let embed = new Discord.MessageEmbed()

  .addField(`**Erkek Kayıt Sayısı:** `, `\`${erkek ? erkek : 'veri yok.'}\``)
  .addField(`**Kadın Kayıt Sayısı:** `, `\`${kadın ? kadın : 'veri yok.'}\``)
    .addField(`**Toplam Kayıt Sayısı:** `, `\`${sayici ? sayici : 'veri yok.'}\``)
  .setColor(oldu)
  .setTitle(`${bot} Profil Sistemi!`)
  message.channel.send(embed)
  return
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["profile"],
  permLevel: 0
};

module.exports.help = {
  name: 'profil'
};
