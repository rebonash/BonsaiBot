const { Client, MessageEmbed, MessageAttachment, avatarEmbed } = require('discord.js');


// Create an instance of a Discord client
const client = new Client();


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('Bonsai está plantado!');
  client.user.setStatus('online')
});


client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'ping') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Te digo, Pong!🏓')
      // Set the color of the embed
      .setColor(242424)
      // Set the main content of the embed
      .setDescription('Un comando simple, pero entretenido!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});



client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('Tienes que unirte a un canal de voz para que me pueda unir, perraco!');
       
    }
  }
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'rip') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      
      // Set the color of the embed
      .setColor(242424)
      // Set the main content of the embed
      .setImage('https://i.imgur.com/w3duR07.png')
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

client.on('message', message => {
  
  if (message.content === 'help') {
    const embed = new MessageEmbed()
    .setTitle('🔧Soporte de Bonzai🔧')
    .setDescription('Comandos Geniales no disponibles. En desarrollo💪')
    .setFooter('Bot Bonzai')
    .setAuthor('Ulosegov')
    .addField('Discord with Node.js')
    .setImage('https://media0.giphy.com/media/QZbXPKVRepbr3TNHR8/giphy.gif')
    message.channel.send(embed);
  }
});



client.login ('ODE4NTM1MTc3Mjg2MTg5MDU2.YEZeSQ.dc_MBT-DIwD5l1DKxFBctgS-bRE')