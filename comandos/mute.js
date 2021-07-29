const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require('ms')
const db = require("megadb")
const muterol = new db.crearDB("muterol")

module.exports = {
  name: "mute",

async execute (client, message, args){

var perms = message.member.hasPermission("BAN_MEMBERS")
if(!perms) return message.channel.send("**Permisos Insuficientes!**")

let time = args[1]
if(!time) return message.channel.send("**Debes Elegir Un Tiempo**")
let timer = ms(time)

let mencionado = message.mentions.members.first()
if(!mencionado) return message.channel.send("**Debes Mencionar A Alguien**")

var razon = args.slice(2).join(" ")
if(!razon){
  razon = 'No especificado'
}

if(!muterol.tiene(message.guild.id)) return message.channel.send("**El Server No Posee Un Rol De Mute Usa `w!muterol (menciona el rol)`**")

let rol = await muterol.obtener(message.guild.id)

if(mencionado.roles.cache.has(rol)) return message.channel.send("**El Usuario Mencionado Ya Esta Muteado!**")

mencionado.roles.add(rol)

const embedmute = new Discord.MessageEmbed()

.setTitle('Mute | 🤐')
.addField(`Usuario Muteado`, `${mencionado}`)
.addField(`Duracion`, `${time}`)

message.channel.send(embedmute)

await setTimeout(async function() {

  await mencionado.roles.remove(rol)

 const embed = new Discord.MessageEmbed()

.setTitle(`Tu Mute Se Ha Acabado Ha Expirado ${mencionado}`)

  message.channel.send(embed)

 }, timer)
  
}}