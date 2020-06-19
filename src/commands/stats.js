function getUpTime(client) {
  let totalSeconds = client.uptime / 1000;
  const days =
    Math.floor(totalSeconds / 86400) <= 0
      ? ''
      : Math.floor(totalSeconds / 86400) < 10
      ? `0${Math.floor(totalSeconds / 86400)} days`
      : `${Math.floor(totalSeconds / 86400)} days`;

  const hours =
    Math.floor(totalSeconds / 3600) <= 0
      ? ''
      : Math.floor(totalSeconds / 3600) < 10
      ? `0${Math.floor(totalSeconds / 3600)} hours`
      : `${Math.floor(totalSeconds / 3600)} hours`;

  totalSeconds %= 3600;
  const minutes =
    Math.floor(totalSeconds / 60) <= 0
      ? ''
      : Math.floor(totalSeconds / 60) < 10
      ? `0${Math.floor(totalSeconds / 60)}  minutes`
      : `${Math.floor(totalSeconds / 60)} minutes`;

  const seconds =
    Math.floor(totalSeconds % 60) < 10
      ? `0${Math.floor(totalSeconds % 60)} seconds`
      : `${Math.floor(totalSeconds % 60)} seconds`;

  return `${days} ${hours} ${minutes} ${seconds}`;
}

// This currently doesn't work as intended, it just need a json file to store the data into.
function getWakeTime() {
  const date = new Date();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const mins =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const tz = /\((.*)\)/.exec(new Date().toString())[1];
  const am_pm = hour >= 12 ? 'PM' : 'AM';

  return `${hour}:${mins} ${am_pm} ${tz}`;
}

module.exports = {
  prefix: 'stats',
  description: 'Get current server information!',
  /**
   * @name stats
   * Displays the server stats.
   * @param {Discord.Message} message the message provided by discord
   */
  command: function stats(message, client) {
    try {
      const uptime = getUpTime(client);
      const wakeTime = getWakeTime();

      const statsEmbed = {
        color: '#0099FF',
        title: 'Server Information',
        description: 'Here is some information on our server!',
        fields: [
          {
            name: 'Server Name',
            value: message.guild.name
          },
          {
            name: 'Bot Uptime',
            value: uptime
          },
          {
            name: 'Bot Online Time',
            value: wakeTime
          },
          {
            name: 'Created on',
            value: message.guild.createdAt
          },
          {
            name: 'You joined on',
            value: message.member.joinedAt
          },
          {
            name: 'Total Member Count is',
            value: message.guild.memberCount
          },
          {
            name: 'Server run by',
            value: message.guild.owner
          }
        ],
        footer: { text: 'Thanks for being here with us!' }
      };
      message.channel.send({ embed: statsEmbed });
    } catch (error) {
      console.error(error);
    }
  }
};