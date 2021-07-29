const disbut = require("discord-buttons");
const Discord = require("discord.js")
const { Client, MessageEmbed } = require ('discord.js');

module.exports = {
    name: "help",
    
execute: async (client, message, args) => {

    let invite = new disbut.MessageButton()
    .setLabel("Invitame")
    .setURL("https://discord.com/oauth2/authorize?client_id=761923514319765525&scope=bot&permissions=8589934591")
    .setStyle("url")
    .setEmoji("📫")

    let suport = new disbut.MessageButton()
    .setLabel("Soporte")
    .setURL("https://1cas.short.gy/Vx6qzD")
    .setStyle("url")
    .setEmoji("🛠️")

    let button = new disbut.MessageActionRow()
    .addComponents(invite, suport)

    let help = new Discord.MessageEmbed()
    
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle("WatchDog | 📖")
    .setColor("RANDOM")
    .setDescription("Hola Mi Nombre Es WatchDog!, Soy Un Bot Con Varias Funciones Como Moderación, Diversión, Musica, Economia Y Mas!")
    .addField("*Si Quieres Acceder A La Lista De Comandos Utiliza*", "`w!commands`")
    .addField("*¿Como Me Puedes Invitar?*", "`Abajo De Este Mensaje Hay Varios Botones Presiona El Que Diga Invitame`")
    .addField("*¿Como Puedo Contactar Con El Soporte?*", "`Abajo Hay Un Boton Que Dice Soporte Te Enviara A Nuestro Server De Discord`")

message.channel.send(help, button);


}}