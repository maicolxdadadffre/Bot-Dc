const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const muterol = new db.crearDB("muterol")

module.exports = {
  name: "muterol",

  execute (client, message, args){

var perms = message.member.hasPermission("ADMINISTRATOR")
if(!perms) return message.channel.send("**Requieres El Permiso De Administrador Para Ejecutar Esta Funcion**")

let rol = message.mentions.roles.first();
if (!rol) return message.channel.send("**Debes Mencionar Un Rol**")

muterol.establecer(message.guild.id, rol.id)

const embed = new Discord.MessageEmbed()

.setTitle(`> El Rol ${rol.name} A Sido Seleccionado Para La Funcion De Mutear`)

  }
  
}