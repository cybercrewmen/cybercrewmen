const Discord = require ('discord.js');
const client = new Discord.Client({partials : ['MESSAGE' ,'CHANNEL', 'REACTION']});
const prefix = '+';

client.commands = new Discord.Collection()

const embed  = new Discord.MessageEmbed()
.setTitle('E')
.setDescription(`E\nE\nE\n\n\nEEEEEE`)
.setThumbnail("https://i.pinimg.com/originals/8f/96/04/8f9604b58605f8ba5d9e498764610557.jpg")

const fs = require('fs');



const config  = require ('./config.json')


client.once('ready', () => {console.log('EBOT IS ONLINE!!')})


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command);
}

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot)return
  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase();

    if (command === 'ping'){
      client.commands.get('ping').execute(message, args)
  } if (command === 'purge'){
      client.commands.get('purge').execute(message, args)
  } if (command === 'yt'){
      client.commands.get('yt').execute(message, args)
  } if (command === 'kick'){
      client.commands.get('kick').execute(message, args)
  } if (command === 'ban') {
      client.commands.get('ban').execute(message, args)
  } if (command === 'spam'){
      client.commands.get('spam').execute(client, message, args)
  } if (command === 'mute'){
      client.commands.get('mute').execute(message, args)
  } if (command === 'unmute'){
      client.commands.get('unmute').execute(message, args)
  } if (command === 'else') {
      message.author.send("idk")
  } if (command === 'opinion' || command === 'op'){
      client.commands.get("opinion").execute(message, args)
  } if (command === 'dm'){
      client.commands.get('dm').execute(message ,args)
  } if (command === 'nick'){
      client.commands.get('nick').execute(message, args)
  } if (command === 'help' || command === 'h'){
      client.commands.get('help').execute(message, args)
  } if (command === 'copy'){
      client.commands.get('copy').execute(message, args)
  } if (command === 'poll'){
      client.commands.get('poll').execute(message, args)
  } if (command === 'react'){
      client.commands.get('react').execute(message, args)
  } if (command === 'afk'){
      client.commands.get('afk').execute(message , args)
  } if (command === 'removeafk' || command === 'rafk'){
      client.commands.get('rafk').execute(message , args)
  }
})
client.login(config.token);


