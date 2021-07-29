const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js")

module.exports = {
  name: 'pacman',

  execute (client, message, args) {

    const pacman = require('pacman-djs')

    let pts = ['🍓', '🍇', '🍒', '🍘', '🍭'];

    let randomPts = pts[Math.floor(Math.random() * (pts.lenght))];

    let mapa = [
      "▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣",
      "▣▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▣",
      "▣▣▩▩◇◇◇▩▩▩▩ᗣ▩▩▩▩◇◇◇▩▩▩▣",
      "▣▩▩▩▣▣▣▣▩▩▣▩▩▣▩▣▣▣▩▩▩▩▣",
      "▣▩▩▩▣▩▩◇▩▣▣▣▩▩▩▩▣ᗣ▩▩▩▩▣",
      "▣▩▩▩▩▩▣▣▩▩▣▩▩▣▣▩▩▩▩▩▩▩▣",
      "▣▣▩▩▩▩ᗣ▩▩▩▩▩▩▩ᗣ▩▩▩▩▩◇▩▣",
      "▣◇▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩◇▩▣",
      "▣◇▩▩▩▩▣▣▩▩▣▩▩▣▣▩▩▩▩▩▩▩▣",
      "▣▩▩▩▣▩▩▩▩▣▣▣▩▩▩▩▣▩▩▩▩▩▣",
      "▣▩▩▩▣▣◇▩▩▩▣▩▩▩▩▩◇▣▣▩▩▩▣",
      "▣▣▩▩◇◇◇▣▩▩ᗧ▩▩▩▩▣◇◇◇▩▩▩▣",
      "▣▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▩▣",
      "▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣"
    ]


    let juego = new pacman.PacGame(mapa, 3, {
      win_text: `¡Ganaste ${message.member.nickname || message.author.username}!`,
      to_lose_text: `Has Perdido ${message.member.nickname || message.author.username}, Mas Suerte La Proxima`,
      time_out_text: `Tardaste Mucho ${message.member.nickname || message.author.username}, Buen Intento`,
      coin_points: 164,
      coin_text: "💸", randomPts,
      time_text: "⌛",
    })

    juego.start_game(message)


    juego.on("end", (type, monedas, tiempo) => {

      if (type == 'player') {
        message.channel.send(`Felicidades! **${message.author.username}** Gano Con \`${monedas} ${randomPts}\``)

      }

      if (type == 'error') {
        message.channel.send('Ha Habido Un Error <:wow:851300686103578577> Usa El Comando Denuevo.')

      }
      
      
    })
    

  }


}