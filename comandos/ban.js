const Discord = require('discord.js');
const client = new Discord.Client(); 
const { Client, MessageEmbed } = require('discord.js');

 module.exports = {
  name: "ban",

  execute (client, message, args){

    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**No Tengo Suficientes Permisos!**")

    let user = message.mentions.members.first();

    let banReason = args.join(' ').slice(22);

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**No Tienes Suficientes Permisos!**")

    if(!user) return message.channel.send("**Debes Mencionar A Alguien!**")
    if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("**No Puedes Banear A Alguien Superior O Igual Que Tu!**")

    if(user === message.author) return message.channel.send("**No Te Puedes Banear A Ti Mismo!**")

    if(!banReason) return message.channel.send("**Debes Escribir Una Razon**")

    user.ban({ reason: banReason})

   const embed = new Discord.MessageEmbed()

.setTitle(`Ha Baneado A ${message.mentions.users.first().username}`)
.setDescription(`Razon: **${banReason}**`)
.addField("ID",`${user.id}`)
.setAuthor(message.member.displayName, message.author.displayAvatarURL());




  message.channel.send(embed)


 }

}