const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
    name: "purge",
    
execute (client, message, args){


  const cantidad = args.join(" ");

  var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("**Requieres El Permiso De** `Gestionar Mensajes`")

  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Requiero El Permiso De** `Gestionar Mensajes`")

  if(!cantidad) return message.channel.send("**Debes Escribir Una Cantidad!**")

  if(cantidad === '0') return message.channel.send("**Debes Escribir Una Cantidad Mayor Que 0!**")

  message.channel.bulkDelete(cantidad).then(()=> {
    
    const embed = new Discord.MessageEmbed()

.setTitle(`**${cantidad}** Mensajes Borrados Correctamente`)





  message.channel.send(embed)


  })


 }

}