const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require('discord.js');

// index.js
const keepAlive = require('./server.js');
const Monitor = require('ping-monitor');
 
keepAlive();

//sex

const fs = require('fs');
let { readdirSync } = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./comandos')
  .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}
let prefix = "w!"
client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command) || client.commands.find(c => c.alias && c.alias.includes(command));
  console.log(cmd)
if(!cmd) return
if(cmd){
 cmd.execute(client, message, args)
}
});

client.on('ready', () => {
  console.log(`Conectado como ${client.user.tag}!`);
});

///distube///

const Distube = require("distube")
client.distube = new Distube(client, {
  emiNewSongonly: true,
  serachSongs: false,
  leaveOnStop: true,
  leaveOnFinish: true,
  leaveOnEmpty: true,
});

client.distube.on("addList", (message, queue, playlist) => {
message.channel.send(`Cancion Añadida A La Playlist: **${song.name}** - **${playsong.formattedDuration}** `)
})

client.distube.on("addSong", async (message, queue, song) => {

let espera = await message.channel.send("**Tu Peticion A Sido Agregada**")

  let embed = new MessageEmbed()

.setTitle()
.setImage(playsong.thumbnail, playsong.url)
.addField("\u200b", `[${playsong.name}](${playsong.url})`)
.addField("**Duracion**", playsong.formattedDuration)
.setAuthor(message.member.displayName, message.author.displayAvatarURL());


message.channel.send(embed).then(() => espera.delete())

})


client.distube.on("playSong", async (message, queue, playsong) => {

let espera = await message.channel.send("Cargando...")

  let embed = new MessageEmbed()

.setTitle("")
.addField("\u200b", `[${playsong.name}](${playsong.url})`)
.addField("**Duracion**",
playsong.formattedDuration)
.addField(`lol`, "xd")
.setImage(playsong.thumbnail)
.setAuthor(message.member.displayName, message.author.displayAvatarURL());



message.channel.send(embed).then(() => espera.delete())

})


client.distube.on("playList", async (message, queue, playlist) => {

let espera = await message.channel.send("Siguiente...")

const embed = new Discord.MessageEmbed()
.setTitle("Se Ha Encontrado Tu Playlist :mag_right:")
.setDescription(`Reproduciendo Playlist: **${playlist.name}**`)
.addField("**Duracion**", playlist
.formattedDuration)

 message.channel.send(embed).then(() => espera.delete())

})

client.distube.on("initQueue", queue => {
    queue.autoplay = false;
    queue.volume = 100;
});

client.distube.on("error", (message, error) => {
  console.log(error)
})

client.login(process.env.TOKEN);