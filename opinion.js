const Discord = require('discord.js')

module.exports = {
    name : 'opinion',
    description : "idk",
    execute(message, args){
        const question = args.slice(0).join(" ")
        if(!question) return message.reply("there is no question!")
        
        const wordList = ["i doubt about it", "certainly", "no just no", "i dont think so", "ask the question again", "without a doubt", "i dont wanna answer it", "i dont know", "yes"]
        const getWord = Math.floor(Math.random() * (wordList.length))
        let word = wordList[getWord]
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, ${question} : ${word}`)

        message.channel.send(embed)
    }
}