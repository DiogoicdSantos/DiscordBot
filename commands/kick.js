module.exports = {
    name:'kick',
    description:'Kicks a user',
    execute(message, args){
        if(message.member.hasPermission('KICK_MEMBERS')){
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.members.resolve(user);
                if (member) {
                  member
                    .kick({
                      reason: 'They were bad!',
                    })
                    .then(() => {
                      message.channel.send(`Successfully kicked ${user.tag}`);
                    })
                    .catch(err => {
                      message.channel.send('I was unable to kick the member');
                      console.error(err);
                    });
                } else {
                  message.channel.send("That user isn't in this guild!");
                }
              } else {
                message.channel.send("You didn't mention the user to kick!");
              }
        }
    }
}