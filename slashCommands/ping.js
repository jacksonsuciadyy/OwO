const { blockQuote } = require("@discordjs/builders")

const run = async(client, interaction) => {
    interaction.reply({content: blockQuote("pong!")})
}

module.exports = {
    name: "ping",
    description: "ping",
    // perm: "KICK_MEMBERS",
    options: [
        {
            name: "user", 
            description: "The user to timeout",
            type: "USER", 
            required: true
        },
    ],
    run,
}