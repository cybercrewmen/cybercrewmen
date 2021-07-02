module.exports = {
    name : "afk",
    description : "idk",
    execute(message , args){
        const reason = args.slice(0).join(" ") || "no reason"
        let user = message.author
        let member = message.guild.members.cache.get(user.id)
        
        member.setNickname(`[AFK]${message.author.username}`).catch(e => {console.error(e);})
        if(console.error) return message.channel.send({embed : {title : "ERROR", color : "RED",description : "something wrong happen!"}})
        message.channel.send({embed : {title : "AFK" , color : "GREEN" , description : `**successfully set your afk \n reason : ${reason}**`}})
    }
}