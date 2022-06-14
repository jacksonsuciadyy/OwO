const { MessageEmbed } = require('discord.js')
const Canvas = require("canvas")
const Discord = require("discord.js")
const background = "https://cdn.discordapp.com/attachments/986226840731537408/986305011992645643/ffxiv_05192022_004143_905.png"

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

            console.log(generateImage)

            const img = await generateImage(member)
            member.guild.channels.cache.find(i => i.name.toLowerCase() === 'welcome').send({
                content: `Hey <@${member.id}>, welcome to the *${guildName}*!`,
                files: [img]
            })
    }
}

const dim = {
    height: 675,
    width: 1200,
    margin: 50
}

const av = {
    size: 256,
    x: 480,
    y: 170
}

const generateImage = async (member) => {
    let welcomeMessage = member.user.tag +" just joined the server"
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false, size: av.size})

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    // draw in the background
    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)

    // draw black tinted box
    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()
    
    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

    // write in text
    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    // draw in Welcome
    // ctx.font = "50px Roboto"
    // ctx.fillText("Welcome", dim.width/2, dim.margin + 70)

    // draw in the welcomeMessage
    ctx.font = "50px Roboto"
    ctx.fillText(welcomeMessage + discrim, dim.width/2, dim.height - dim.margin - 125)

    // draw in to the server
    // ctx.font = "40px Roboto"
    // ctx.fillText("to the server", dim.width / 2, dim.height - dim.margin - 50)

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}