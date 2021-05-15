const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.get(db.fetch(`mlog_${message.guild.id}`));
 // const kanal = message.guild.channels.find('id', modlog)
  if (db.has(`mlog_${message.guild.id}`) === false) return message.channel.send(new Discord.RichEmbed()
    .setDescription(`<:hayir:553878810756513802> | Bu komutu kullanmak için öncelikle c!mod-log-ayarla #kanal komutu ile bir kanal belirleyin`)
     .setColor("RED"))                                                                           
  if (reason.length < 1) return message.reply('Ban sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağını yazmalısın.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam.');
  message.guild.ban(user, 2);
  
  const embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`İşlem başarılı!`)
  message.channel.send(embed2)
    

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan Yasaklama :bangbang: ')
    .addField('Yasaklanan Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yasaklayan Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Yasaklama Sebebi:', reason);
    modlog.send(embed);
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori: "yetkili"
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban [kullanıcı] [sebep]'
};
