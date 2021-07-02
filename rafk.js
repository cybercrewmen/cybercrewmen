module.exports = {
    name : "rafk",
    description : "idk",
    execute(message , args){
        let user = message.author
        let member = message.guild.members.cache.get(user.id)

        member.setNickname(message.author.username).then(message.channel.send({embed : { title : "remove afk" , color : "GREEN" , description : `${message.author} **welcome back i removed your afk**`}}))
    }
}