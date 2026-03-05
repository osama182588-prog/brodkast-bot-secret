module.exports = {
    bot: {
        tokens: [
          "MTQ3ODk2MDExMzM4ODYyMTg1NA.G9qJbF.KIuFbIKg_ofE3k9GJKejUEYcjHGtN0swpwi6D0",              // Main bot token - Replace with your actual token
          "MTQ3ODk2MDIxMTUxNDM2MzkwNg.GgSfO-.ph-0o_Z8kuXv7dtyXpFxggRgvgS4LHOrODz_sk",      // 2 bot token - Uncomment and replace to use
          "MTQ3ODk2MDI0OTIzNzkzMDA2NQ.GX7aBY.1bCmHD0VGCKL35SVc-GlgIcXgItw97aK9n8ndU",       // 3 bot token - Uncomment and replace to use
          "MTQ2NjgwOTY0ODk3NDkyMTk2MQ.GXR_yu.fF06YtvU-S43gjrV2QA8xHA4vOwNGT5P3dgsAI",      // 4 bot token - Uncomment and replace to use
          "MTQ3ODk2MDI5OTQzOTY4NTczMg.Gcbd0f.s3Tei-pVznKi7C7hzWuYOpJIe71DL42NgnLZFc",       // 5 bot token - Uncomment and replace to use
          "MTQ3ODk2MDM2MDMwNzI5ODQwNQ.GmDz9G.Ke4LwZ2W_lHTtLfaqFCYHs8yTUJ1UJu3OaUbTs",       // 6 bot token - Uncomment and replace to use
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



