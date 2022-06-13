const { bold, italic, strikethrough, underscore, spoiler, quote, blockQuote } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const run = async(client, interaction) => {
    console.log("Start run pool")
    let question = interaction.options.getString("question")
    let choice_a = interaction.options.getString("choice_a")
    console.log(choice_a)
    // console.log(choice_a == null)
    // console.log(choice_a === "null")
    let choice_b = interaction.options.getString("choice_b")
    let choice_c = interaction.options.getString("choice_c")
    let choice_d = interaction.options.getString("choice_d")
    let choice_e = interaction.options.getString("choice_e")
    let choice_f = interaction.options.getString("choice_f")
    let choice_g = interaction.options.getString("choice_g")
    let choice_h = interaction.options.getString("choice_h")
    let choice_i = interaction.options.getString("choice_i")
    let choice_j = interaction.options.getString("choice_j")
    let choice_k = interaction.options.getString("choice_k")
    let choice_l = interaction.options.getString("choice_l")
    let choice_m = interaction.options.getString("choice_m")
    let choice_n = interaction.options.getString("choice_n")
    let choice_o = interaction.options.getString("choice_o")
    let choice_p = interaction.options.getString("choice_p")
    let choice_q = interaction.options.getString("choice_q")
    let choice_r = interaction.options.getString("choice_r")
    console.log("Finished declare question & choices") 

    if(question != null) return interaction.reply("Invalid question!")

    let questionMsg = `📊 ${question}`;
    let answerMsg = "";

    if(choice_a != null) {
        answerMsg = `\n🇦 ${choice_a}`
    }
    if(choice_b != null) {
        answerMsg += `\n🇧 ${choice_b}`
    }
    if(choice_c != null) {
        answerMsg += `\n🇨 ${choice_c}`
    }
    if(choice_d != null) {
        answerMsg += `\n🇩 ${choice_d}`
    }
    if(choice_e != null) {
        answerMsg += `\n🇪 ${choice_e}`
    }
    if(choice_f != null) {
        answerMsg += `\n🇫 ${choice_f}`
    }
    if(choice_g != null) {
        answerMsg += `\n🇬 ${choice_g}`
    }
    if(choice_h != null) {
        answerMsg += `\n🇭 ${choice_h}`
    }
    if(choice_i != null) {
        answerMsg += `\n🇮 ${choice_i}`
    }
    if(choice_j != null) {
        answerMsg += `\n🇯 ${choice_j}`
    }
    if(choice_k != null) {
        answerMsg += `\n🇰 ${choice_k}`
    }
    if(choice_l != null) {
        answerMsg += `\n🇱 ${choice_l}`
    }
    if(choice_m != null) {
        answerMsg += `\n🇲 ${choice_m}`
    }
    if(choice_n != null) {
        answerMsg += `\n🇳 ${choice_n}`
    }
    if(choice_o != null) {
        answerMsg += `\n🇴 ${choice_o}`
    }
    if(choice_p != null) {
        answerMsg += `\n🇵 ${choice_p}`
    }
    if(choice_q != null) {
        answerMsg += `\n🇶 ${choice_q}`
    }
    if(choice_r != null) {
        answerMsg += `\n🇷 ${choice_r}`
    }
    
    // let msg = questionMsg + answerMsg

    // console.log(`Finished set msg variable | Message : ${blockQuote(msg)}`)

    const user = client.users.cache.get(interaction.member.user.id);

    const exampleEmbed = new MessageEmbed()
        .setTitle(`${questionMsg}`)
        .setDescription(answerMsg)
        .setAuthor({ name: interaction.member.user.username, iconURL: user.displayAvatarURL()})
        .setColor("PURPLE")

    try {
        // const message = await interaction.reply(`${bold("POLL")}`)
        
        interaction.channel.send({ embeds: [exampleEmbed] })
            .then(embedMessage => {
            if(choice_a != null) {
                embedMessage.react("🇦")
            }
            if(choice_b != null) {
                embedMessage.react("🇧")
            }
            if(choice_c != null) {
                embedMessage.react("🇨")
            }
            if(choice_d != null) {
                embedMessage.react("🇩")
            }
            if(choice_e != null) {
                embedMessage.react("🇪")
            }
            if(choice_f != null) {
                embedMessage.react("🇫")
            }
            if(choice_g != null) {
                embedMessage.react("🇬")
            }
            if(choice_h != null) {
                embedMessage.react("🇭")
            }
            if(choice_i != null) {
                embedMessage.react("🇮")
            }
            if(choice_j != null) {
                embedMessage.react("🇯")
            }
            if(choice_k != null) {
                embedMessage.react("🇰")
            }
            if(choice_l != null) {
                embedMessage.react("🇱")
            }
            if(choice_m != null) {
                embedMessage.react("🇲")
            }
            if(choice_n != null) {
                embedMessage.react("🇳")
            }
            if(choice_o != null) {
                embedMessage.react("🇴")
            }
            if(choice_p != null) {
                embedMessage.react("🇵")
            }
            if(choice_q != null) {
                embedMessage.react("🇶")
            }
            if(choice_r != null) {
                embedMessage.react("🇷")
            }
            });
    } catch (err) {
        if(err) {
            console.error(err)
        }
    }
}

module.exports = {
    name: "poll",
    description: "Create a new poll.",
    // perm: "BAN_MEMBERS",
    options: [
        {
            name: "question", 
            description: "Type your question e.g. Have you had enough coffee?",
            type: "STRING", 
            required: true
        },
        {
            name: "choice_a",
            description: "Type choice e.g Coffee!. Putting emoji at the front will change bot reaction e.g :coffee: Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_b",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_c",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_d",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_e",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_f",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_g",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_h",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_i",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_j",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_k",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_l",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_m",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_n",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_o",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_p",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_q",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        },
        {
            name: "choice_r",
            description: "Type choice e.g Coffee!",
            type: "STRING",
            required: false
        }
    ],
    run,
}