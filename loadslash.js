const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.slashCommands = new Discord.Collection()

let bot = {
    client,
}

client.loadSlashCommands = (bot, reload) => require("./handlers/slashCommandsHandler")(bot, reload)
client.loadSlashCommands(bot, false)

// const guildID = "874493088024899595"

client.on("ready", async () => {
    console.log(`Loading ${client.slashCommands.size} slash commands`)
    const Guilds = client.guilds.cache.map(guild => guild.id);
    Guilds.forEach(async (guildID) => {
        const guild = client.guilds.cache.get(guildID)
        if (!guild)
            console.error("Target Guild not found")

        await guild.commands.set([...client.slashCommands.values()])
    });
    
    console.log("Finished")
    process.exit(0)
})


client.login(process.env.TOKEN)