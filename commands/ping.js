module.exports = {
  name: "ping",
  description: "this is a ping command!",
  async execute(message, args, client) {
    var resMsg = await message.channel.send(
      "Ping is being appreciated... :bar_chart:"
    );
    resMsg.edit(
      "Ping: " +
        Math.round(resMsg.createdTimestamp - message.createdTimestamp) +
        " ms."
    );
  },
};
