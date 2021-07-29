const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const dinerobanco = new db.crearDB('dinerobanco')

module.exports = {
    name: "deposit",
    alias: ["dep"],
    
async execute (client, message, args){

    const user = message.author;

    const cantidad = args[0]
    if(!cantidad) return message.reply("**Debes Escribir Una Cantidad**")

    if(cantidad === 'all'){
        const dinerototal = await dinero.obtener(`${user.id}`)

        dinero.restar(`${user.id}`, dinerototal)
        dinerobanco.sumar(`${user.id}`, dinerototal)

        const embed = new Discord.MessageEmbed()

    .setTitle(`Depositaste ${dinerototal} De Dinero | 💳`)

    message.channel.send(embed)
    }

    const dinerot = await dinero.obtener(`${user.id}`)

    if(cantidad > dinerot) return message.reply("**Estas Colocando Una Sifra Mayor A la Que Posees**")
    

    dinero.restar(`${user.id}`, cantidad)
    dinerobanco.sumar(`${user.id}`, cantidad)

    const embed = new Discord.MessageEmbed()

    .setTitle(`Depositaste ${cantidad} De Dinero | 💳`)

  message.channel.send(embed)


 }

}