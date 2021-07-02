const Discord = require('discord.js')

module.exports = {
    name : 'dm',
    description : 'idk',
    async execute(message, args){
        const messages = args.slice(1).join(" ");
        const player = message.mentions.users.first();
        if(!player) return message.reply("please mentions someone first!")
        if(isNaN(player)) return message.reply('that user doesnt exist!')
        if(!messages) return message.reply('there is no messages!')
        
        if(player === message.author) return message.reply('you cannot dm yourself!')
        
        
        const embed = new Discord.MessageEmbed()
        .setTitle("dm")
        .setDescription(`${player}, ${message.author} has a messages for you! \nmessage : **${messages}**`)
        .setColor('#FFFFFF')

        if(player){
            const memberTarger = message.guild.members.cache.get(player.id);
            memberTarger.user.send(embed).catch(e => {console.error(e)})

            await message.channel.bulkDelete(1)
            message.author.send({embed : {title : "DM command",color : "GREEN" , description : `successfully sent the private message to **${player}**! \nmessage : **${messages}**`}})
        }
    }
}