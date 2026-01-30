module.exports = {
    bot: {
        tokens: [
          "MTQ2NjgwODg2NTEwOTU3Mzc5Nw.GM3V3v.-vGFBt5TGC79RTQvMfbwQBMZXs86ks7P2YeQ7s",              // Main bot token - Replace with your actual token
          "MTQ2NjgwOTQ1NDE3ODYwMzAyOA.GG-dKm.48a6MH7KuxzWHU-eY7ZkrkioYoWXlZbJzu59m4",      // 2 bot token - Uncomment and replace to use
          "MTQ2NjgwOTU2NjgxNjYzMjg1Mg.GA0kRZ.U82p5g78aBZ0XwqMISwt037giEY7CjBJeigAco",       // 3 bot token - Uncomment and replace to use
          "MTQ2NjgwOTY0ODk3NDkyMTk2MQ.GXR_yu.fF06YtvU-S43gjrV2QA8xHA4vOwNGT5P3dgsAI",      // 4 bot token - Uncomment and replace to use
          "MTQ2NjgwOTczNTMwNjAyMjk5Mw.GO01jo.V3jRe4CLN4rwztl9GNeE4Q56hMRnQxnM3prqnQ",       // 5 bot token - Uncomment and replace to use
        ].filter(Boolean),

        defaultLanguage: 'ar', // ar | en لغة البوت
        
        activity: {
            name: '𝐒𝐄𝐂𝐑𝐄𝐓 ᴄꜰᴡ', // رسالة حالة البوت
            type: '𝐒𝐄𝐂𝐑𝐄𝐓', // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
            status: 'dnd' // online, idle, dnd, invisible
        }
    },
    server: {
        guildId: '1279529545002909797',         // ايدي السيرفر
        broadcastRoleId: '1447269499853078700', // ايدي الرول اللي يستخدم عليها البوت
        reportChannelId: '1438781942870048870' // ايدي الروم اللي يرسل فيه البوت التقارير
    },
    broadcast: {
        cooldownTime: 1000, // لا تلعب فيها
        memberCooldown: 100, // لا تلعب فيها
        requestsPerSecond: 1 // لا تلعب فيها
    },

    colors: {
        primary: '#5865F2',    // Discord Blue (used for standard messages)
        success: '#57F287',    // Green (used for successful operations)
        warning: '#FEE75C',    // Yellow (used for warnings)
        error: '#ED4245',      // Red (used for errors)
        neutral: '#5D5D5D'     // Gray (used for neutral messages)
    }

};


