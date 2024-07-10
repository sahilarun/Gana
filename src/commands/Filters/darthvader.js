const { EmbedBuilder, AttachmentBuilder } = require("discord.js")
module.exports = {
  name: 'darthvader',
  category: 'Filters',
  cooldown: 5,
  description: '',
  args: false,
  usage: '',
  userPrams: [],
  botPrams: ['EmbedLinks'],
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    const player = client.manager.players.get(message.guild.id);
    if (!player) {
      const embed = new EmbedBuilder().setColor(client.sahilcolor).setAuthor({
        name: message.author.username || "Unknown User",
        iconURL: message.author.displayAvatarURL( { dynamic : true }),
     })
     .setDescription(`No song/s currently playing within this guild.`)
     .setTimestamp()
      .setColor(client.sahilcolor);
      return message.channel.send({ embeds: [embed] });
    }
    const embed = new EmbedBuilder()
    .setColor(client.sahilcolor)
    if (player.darth) {
        player.setDarth(false);
        const att = new AttachmentBuilder(`https://iili.io/J6O6Lue.png`)
        return message.reply({
          files: [att]
      })
    } else {
        player.setDarth(true);
        const att1 = new AttachmentBuilder(`https://iili.io/J6O6vZG.png`)
        return message.reply({
          files: [att1]
      })
    }
  }
}