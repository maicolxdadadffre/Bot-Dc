const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const { createReadStream } = require("fs");
const db = require('megadb')
const dinero = new db.crearDB('dinero')

let cooldown = new Set();

module.exports = {
    name: "work",
    alias: ["w"],
    
execute (client, message, args){

    if(cooldown.has(message.author.id)){
        
        const embed = new Discord.MessageEmbed()

        .setTitle(`Tienes Que Esperar 1m Para Volver A Trabajar`)
        
        message.channel.send(embed)

        return;
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);   
    }, 60000);

    const user = message.author;

    if(!dinero.tiene(`${user.id}`))
    dinero.establecer(`${user.id}`, 0)

    let random = Math.floor(Math.random() * 175) + 100

    let trabajo = ["Policia 👮", "Profesor 👨‍🏫", "Doctor 👨‍⚕️", "Cocinero 👨‍🍳", "Bombero 👨‍🚒", "Agricultor 👨‍🌾"]
    let randomtrabajo = trabajo[Math.floor(Math.random() * trabajo.length)]

    dinero.sumar(`${user.id}`, random)

    const embed = new Discord.MessageEmbed()

    .setTitle("Trabajo")
    .addField(`Y Ha Conseguido`, `${random}`)
    .setDescription(`${message.author} Ha Trabajado De **${randomtrabajo}**`)
    .setColor("RANDOM")

  message.channel.send(embed)


 }

}