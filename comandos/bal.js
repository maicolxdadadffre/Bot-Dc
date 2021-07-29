const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const dinerobanco = new db.crearDB('dinerobanco')

module.exports = {
    name: "bal",
    alias: ["b"],
    
async execute(client, message, args){

    const user = message.mentions.users.first() || message.author;

    if(!dinero.tiene(`${user.id}`)){
        dinero.establecer(`${user.id}`, 0)
    }

    if(!dinerobanco.tiene(`${user.id}`)){
        dinerobanco.establecer(`${user.id}`, 0)
    }

    const dinerototal = await dinero.obtener(`${user.id}`)
    const dinerobancototal = await dinerobanco.obtener(`${user.id}`)

    const embed = new Discord.MessageEmbed()

    .setTitle(`Balance`)
    .addField("Banco 🏛️", `*${dinerobancototal}*`)
    .addField("Dinero Total 💼", `*${dinerototal + dinerobancototal}*`)
    .setDescription(`**Dinero 💵**\n*${dinerototal}*`)

    message.channel.send(embed)


 }

}