const Discord = require('discord.js')

module.exports = {
    name : 'unmute',
    description : 'idk',
    execute(message, args){
    const target = message.mentions.members.first();
    const mutedRole = message.guild.roles.cache.find((role) => role.name === 'Muted');
    
    if(!message.member.permissions.has("MUTE_MEMBERS")) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"you  do not have the permission to use this command!"}})
    if(!target) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"you must mention a user first!"}})
    const reason = args.slice(1).join(" ") || "no reason!"
    message.reply({embed : {title : "unmute command" , color : "GREEN" , description :`${target} has been unmuted \n reason : ${reason}`}})
    target.roles.remove(mutedRole.id).catch(e => {console.error(e)})
    
    const embed = new Discord.MessageEmbed()
        .setTitle('**UNMUTE**')
        .setDescription(`you have been unmuted in **${message.guild.name}** by **${message.author}** \nreason : **${reason}**`)


        target.user.send(embed)
    } 
} 