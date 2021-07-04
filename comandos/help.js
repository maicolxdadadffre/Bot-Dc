const Discord = require("discord.js");
const client = Discord.Client;
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
  name: "help",

execute (client, message, args){

const embedprincipal = new Discord.MessageEmbed()

.setTitle("Apartado De Ayuda")
.setDescription('Reacciona Con ⚒️ Para El Apartado De Moderacion\n\n Reacciona Con 🔊 Para El Apartado De Muscia\n\nReacciona Con 👾 Para Los Comandos De MiniJuegos\n\nReacciona Con ⬅️ Para Volver Al La Pagina Pricipal')

const embedmoderacion = new Discord.MessageEmbed()

.setTitle("Moderacion ⚒️")
.setDescription("`w!ban, w!purge`")

const embedmusica = new Discord.MessageEmbed()

.setTitle("Musica 🔊")
.setDescription("`w!p, w!stop, w!s, w!resume, w!queue`")

const embedjuegos = new Discord.MessageEmbed()

.setTitle("MiniJuegos 👾")
.setDescription("`w!pacman`")

message.channel.send(embedprincipal).then(msg => {

  msg.react('⬅️')
  msg.react('⚒️')
  msg.react('🔊')
  msg.react('👾')

  msg.awaitReactions((reaction, user) => {
    if(message.author.id !== user.id) return;
    if(reaction.emoji.name === '⬅️'){
      msg.edit(embedprincipal)
    }

    if(reaction.emoji.name === '⚒️'){
      msg.edit(embedmoderacion)
    }
    
    
    if(reaction.emoji.name === '🔊'){
      msg.edit(embedmusica)
    }
     
    if(reaction.emoji.name === '👾'){
      msg.edit(embedjuegos)
    }
  }) 

})

}

}