const disbut = require("discord-buttons");
const Discord = require("discord.js");
const client = Discord.Client;
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
  name: "commands",

async execute (client, message, args){

  let opcion1 = new disbut.MessageMenuOption()
  .setLabel('Moderacion')
  .setEmoji(`870008187036786768`)
  .setValue('op1')
  .setDescription('Apartado De Moderacion')

  let opcion2 = new disbut.MessageMenuOption()
  .setLabel('Musica')
  .setEmoji(`870008225930543144`)
  .setValue('op2')
  .setDescription('Apartado De Musica')

  let opcion3 = new disbut.MessageMenuOption()
  .setLabel('Juegos')
  .setEmoji(`870008241629839430`)
  .setValue('op3')
  .setDescription('Apartado De Juegos')

  let opcion4 = new disbut.MessageMenuOption()
  .setLabel('Economia')
  .setEmoji(`870008201712631838`)
  .setValue('op4')
  .setDescription('Apartado De Economia')

  let opcion5 = new disbut.MessageMenuOption()
  .setLabel('Extras')
  .setEmoji(`870008174198030397`)
  .setValue('op5')
  .setDescription('Apartado De Extras')

  let men = new disbut.MessageMenu()
  .setID('menuid')
  .setPlaceholder('Seleccionar')
  .setMaxValues(1)
  .setMinValues(1)
  .addOption(opcion1)
  .addOption(opcion2)
  .addOption(opcion3)
  .addOption(opcion4)
  .addOption(opcion5)

const embedprincipal = new Discord.MessageEmbed()

.setTitle("> Apartado De Comandos")
.setDescription('```Elige Un Apartado```')

const embedmoderacion = new Discord.MessageEmbed()

.setTitle("Moderacion | <:mod:870008187036786768>")
.setDescription("```w!ban | w!purge | w!ticket | w!mute | w!muterol```")

const embedmusica = new Discord.MessageEmbed()

.setTitle("Musica | <:yt:870008225930543144>")
.setDescription("```w!p | w!stop | w!s | w!resume | w!q | w!leave | w!loop```")

const embedjuegos = new Discord.MessageEmbed()

.setTitle("MiniJuegos | <:juego:870008241629839430>")
.setDescription("```w!pacman | w!betrayal```")

const embedextras = new Discord.MessageEmbed()

.setTitle("Extras | <:xtras:870008174198030397>")
.setDescription("```w!snipe | w!avatar | w!say | w!yt```")

const embedeconomia = new Discord.MessageEmbed()

.setTitle("Economia | <:dinero:870008201712631838>")
.setDescription("```w!work | w!bal | w!dep | w!rob | w!with```")

let msg = await message.channel.send(embedprincipal, men)

client.on("clickMenu", async (menu) => {
if(menu.values[0] === "op1"){
  menu.reply.defer();
msg.edit(embedmoderacion)
}
if(menu.values[0] === "op2"){
  menu.reply.defer();
msg.edit(embedmusica)
}
if(menu.values[0] === "op3"){
  menu.reply.defer();
msg.edit(embedjuegos)
}
if(menu.values[0] === "op4"){
  menu.reply.defer();
msg.edit(embedeconomia)
}
if(menu.values[0] === "op5"){
  menu.reply.defer();
msg.edit(embedextras)
}
})

}

}