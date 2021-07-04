const Discord = require('discord.js');
const db = require("megadb")
const canalb = new db.crearDB("canalb")

module.exports = {
    name: "canalb",
    alias: [],
    
execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRADOR")
  if(!perms) return message.channel.send("**No Tienes Suficientes Permisos**")

  const id = [0]
  if(!id) return message.channel.send("**Debes Ecribir La Id De Un Canal**")

  const canal = message.mentions.channel.first() || client.channels.cache.get(id)
  const canalservidor = message.guild.channel.resolve(canal.id)
  if(!canalservidor) return message.channel.send("**Debes Mencionar Un Canal De Este Servidor**")

  canalb.establecer(message.guild.id, canal.id)
  message.channel.send(`El Canal Elegido Sera **${canal.name}**`)




 }

}


