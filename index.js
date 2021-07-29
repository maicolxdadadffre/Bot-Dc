const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require('discord.js');
 const disbut = require('discord-buttons');
 disbut(client);

///snipe///

client.snipes = new Map()


// monitor
const keepAlive = require('./server.js');
const Monitor = require('ping-monitor');
 
keepAlive();

//sexo xd

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

if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
  const embedmencion = new Discord.MessageEmbed()
  .setTitle("Oh. He Oido Mi Nombre?")
  .setDescription(`Hola Me Llamo WatchDog, Mi Prefijo Es **w!** Si Quieres Saber Mas De Mi Puedes Usar w!help ^^`)
  .setThumbnail(client.user.displayAvatarURL())
  .setColor("RANDOM")
  .setFooter("Te Agradesco Que Me Elijieras!")
message.channel.send(embedmencion)
}

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command) || client.commands.find(c => c.alias && c.alias.includes(command));
  console.log(cmd)
if(cmd){
  cmd.execute(client, message, args)
} else {
  const embedexist = new Discord.MessageEmbed()

  .setTitle(`**${command}** No Es Un Comando | ❌`)
  .setDescription("*Para Ver Mis Comandos Escribe* **w!commands**")


  message.channel.send(embedexist)
}
});

client.on('ready', () => {
  console.log(`Conectado como ${client.user.tag}!`);
});

//pre//

const estados = [`| w!help`, `WatchDog | CD Bot List`]

client.on('ready', () => {

  setInterval(() => {
    function presence() {
      client.user.setPresence({
       status: 'on',
       activity: {
         name: estados[Math.floor(Math.random() * estados.length)],
         type: 'PLAYING',
  }
  })
}
presence()
}, 4000);

console.log('WatchDog Esta Listo!')
 
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

client.distube.on("addSong", async (message, queue, addsong) => {

  let embed = new MessageEmbed()

.setTitle("Peticion Añadida")
.setThumbnail(addsong.thumbnail, addsong.url)
.setDescription(`\u200b[${addsong.name}](${addsong.url})`)
.addField("PosicionㅤㅤㅤㅤPedido Por",`${queue.songs.length}ㅤㅤㅤㅤㅤ  ㅤ${addsong.user}`)




message.channel.send(embed)

})


client.distube.on("playSong", async (message, queue, playsong) => {

let espera = await message.channel.send("Cargando...")

  let embed = new MessageEmbed()

.setTitle("Reproduciendo | 🎧")
.setDescription(`\u200b[${playsong.name}](${playsong.url})`)
.addField("Duracionㅤㅤㅤ Pedido Por",`${playsong.formattedDuration}ㅤㅤㅤㅤㅤ   ${playsong.user}`)
.setImage(playsong.thumbnail)



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


///snipe client///

client.on('messageDelete', message => {
  client.snipes.set(message.channel.id, {
    content: message.content,
    delete: message.author,
    canal: message.channel
  })
})

client.login(process.env.TOKEN);