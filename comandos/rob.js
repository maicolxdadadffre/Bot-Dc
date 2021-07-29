const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const db = require('megadb')
const dinero = new db.crearDB('dinero')

let cooldown = new Set();

module.exports = {
    name: "rob",
    alias: ["robar"],
    
async execute (client, message, args){

    if(cooldown.has(message.author.id)){
        
        const embed = new Discord.MessageEmbed()

        .setTitle(`Tienes Que Esperar 10m Para Volver A Robar`)
        
        message.channel.send(embed)

        return;
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);   
    }, 600000);

    const user = message.author
    const persona = message.mentions.users.first()

    if(!persona) return message.channel.send("**Debes Mencionar A Alguien**")

    let dineropersona = await dinero.obtener(`${persona.id}`)
    let dinerouser = await dinero.obtener(`${user.id}`)

    let dineroaleatorio = Math.floor(Math.random() * dineropersona) + 1
    let dineroaleatoriomio = Math.floor(Math.random() * dinerouser) + 1

    if(persona.id === message.author.id) return message.reply("**No Intentes Robarte A Ti Mismo!**")
    if(!isNaN(args[0])) return message.reply("**Usuario No Valido**")

    if(dineropersona < 100) return message.reply("**El Usuario Posee Muy Poco Dinero Pobrecillo ;(**")
    if(!dinero.tiene(`${persona.id}`)) return message.reply("**El Usuario Mencionado No Tiene Dinero**")

    let resultadomalo = ['mal']
    let resultadobueno = ['bien']
    let resultado = [resultadomalo, resultadobueno]
    let resultadofinal = resultado[Math.floor(Math.random() * resultado.length)]

    if(resultadofinal === resultadomalo){
        dinero.restar(persona.id, dineroaleatorio)

        dinero.sumar(user.id, dineroaleatorio)

        const embed = new Discord.MessageEmbed()

    .setTitle(`Le Has Robado A ${persona.tag}!`)
    .addField(`Dinero Robado 💰`, `${dineroaleatorio}`)

     message.channel.send(embed)
    }

    if(resultadofinal === resultadobueno){
        
        dinero.restar(user.id, dineroaleatoriomio)

        const embed = new Discord.MessageEmbed()

    .setTitle(`Le Quisiste Robar A ${persona.tag}`)
    .setDescription(`**Pero Te Atraparon ⛓️**\n\n**Has Perdido** *${dineroaleatorio}*`)

     message.channel.send(embed)
    }

  }

}
