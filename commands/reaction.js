module.exports = {
    name: 'reaction',
    description: 'Reaction roles!',
    async execute(message, args, Discord, client) {
        const channel = '808019636221116446'
        const red = message.guild.roles.cache.find(role => role.name === "red");
        const green = message.guild.roles.cache.find(role => role.name === "green");
        const redemoji = '🔴';
        const greenemoji = '🟢';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose role')
            .setDescription('Some description\n\n' + `${redemoji} for red role\n` + `${greenemoji} for green role\n`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(redemoji);
        messageEmbed.react(greenemoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(red);
                }
                if (reaction.emoji.name === greenemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(green);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(red);
                }
                if (reaction.emoji.name === greenemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(green);
                }
            } else {
                return;
            }
        });
    }
}