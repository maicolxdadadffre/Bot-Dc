const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const dinerobanco = new db.crearDB('dinerobanco')

module.exports = {
    name: "withdraw",
    alias: ["with"],
    
async execute (client, message, args){

    const user = message.author;

    const cantidad = args[0]
    if(!cantidad) return message.reply("**Debes Escribir Una Cantidad**")

    if(cantidad === 'all'){
        const dinerobancototal = await dinerobanco.obtener(`${user.id}`)

        dinero.sumar(`${user.id}`, dinerobancototal)
        dinerobanco.restar(`${user.id}`, dinerobancototal)

        const embed = new Discord.MessageEmbed()

    .setTitle(`Retiraste ${dinerobancototal} De Dinero | 💸`)

    message.channel.send(embed)
    }

    const dinerobancot = await dinerobanco.obtener(`${user.id}`)

    if(dinerobancot < cantidad){
        return message.reply("**Estas Colocando Una Sifra Mayor A la Que Posees**")
    }

    dinero.sumar(`${user.id}`, cantidad)
    dinerobanco.restar(`${user.id}`, cantidad)

    const embed = new Discord.MessageEmbed()

    .setTitle(`Retiraste ${cantidad} De Dinero | 💸`)

  message.channel.send(embed)


 }

}