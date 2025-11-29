// index.js
require('dotenv').config();
const express = require('express');
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const app = express();

// Basic health route for keep-alive pings
app.get('/', (req, res) => res.send('OK'));

// Start web server on the port Render sets
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Web server listening on port ${PORT}`));

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


