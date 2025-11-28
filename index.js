const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages
    ]
});

// When bot is online
client.once('ready', () => {
    console.log(`Bot is online as ${client.user.tag}`);
});

// Welcome message
client.on('guildMemberAdd', member => {
    // Use the channel ID directly
    const welcomeChannel = member.guild.channels.cache.get("1434774019655208960");

    if (!welcomeChannel) return;

    const embed = new EmbedBuilder()
        .setTitle("🎉 Welcome to the Server!")
        .setDescription(`Hey <@${member.id}>! Glad to have you here ❤️`)
        .setThumbnail(member.user.displayAvatarURL())
        .setColor(0x00ff00)
        .setTimestamp();

    welcomeChannel.send({ embeds: [embed] });
});
// Login bot
client.login(process.env.TOKEN);

