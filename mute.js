const Discord = require('discord.js')

module.exports = {
    name : 'mute',
    description : 'idk',
    execute(message, args){
    const target = message.mentions.members.first();
    if(!message.member.permissions.has("MUTE_MEMBERS")) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"you  do not have the permission to use this command!"}})
    const advancetarget = message.guild.members.cache.get(target.id)
    if(advancetarget.hasPermission("ADMINISTRATOR")) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"that user had admin!"}})
    const mutedRole = message.guild.roles.cache.find((role) => role.name === 'Muted')
    if(!mutedRole) return message.channel.send({embed : {title : "ERROR" , color : "RED" , description :'There is no Muted role on this server'}});
    if(!target) return message.reply({embed : {title : "ERROR" , color : "RED" , description :"you must mention a user first!"}})
    const reason = args.slice(1).join(" ") || "no reason!"
    target.roles.add(mutedRole.id).catch(e => {console.error(e)})
    message.reply({embed : {title : "mute command" , color : "GREEN" , description :`${target} has been mute \n reason : ${reason}`}})

    const embed = new Discord.MessageEmbed()
        .setTitle('**MUTE COMMAND**')
        .setDescription(`you have been muted in **${message.guild.name}** by **${message.author}** \nreason : **${reason}**`)

        target.user.send(embed)
    }
}