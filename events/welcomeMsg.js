const { MessageEmbed } = require('discord.js');
const { generateImage } = require('../generateImage.js')

module.exports = {
    name: "welcomeMsg",
    run: async (bot, member, guildID) => {
            const {client} = bot
            // const user = client.users.cache.get(member.user.id);
            const guildName = client.guilds.cache.get(guildID).name
            // console.log(member)
            // member.guild.roles.fetch()
            //     .then(roles => roles.name.toLowerCase() == "member")
            //     .then(role => member.roles.add(role)) // Variable to get channel ID
            const role = member.guild.roles.cache.find(i => i.name.toLowerCase() === 'member')
            member.roles.add(role)

            const img = await generateImage(member)
            guild.channels.cache.find(i => i.name.toLowerCase() === 'welcome').send({
                content: `Hey <@${member.id}>, welcome to the *${guildName}*!`,
                files: [img]
            })
    }
}