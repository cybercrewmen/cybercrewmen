module.exports = {
    name: 'ping',
    description: 'idk',
    execute(message, args){
        const wordList = ["idk", "i think u should find it yourself", "no", "i dont want to talk about it", "not in mood", "do the command again"];

        const getWord = Math.floor(Math.random() * (wordList.length + 1));
        let word = wordList[getWord]
        
        message.channel.send(`${message.author} ${word} `)
    }
}