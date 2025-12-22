module.exports = {
    bot: {
        tokens: [
          "MTQ1Mjc1NDkyMzIxMjExMTkzNQ.GNEVHw.TG6ayoOUT_jC60C8mPVzPJIy1XzgVPrymoIoF4",              // Main bot token - Replace with your actual token
          "MTQ1Mjc1NjM5NDUwMjUyMTA2Ng.GBS9cI.XpXkLkqKt5waqPzLVjLIAW3-K192pC4Sob5DBU",      // 2 bot token - Uncomment and replace to use
          "MTQ1Mjc1NjQzNDM1Mjg2OTM5MA.GPUWmm.vdfa0Lj3LUlgQQOrDTaoTnHisIPgj5var3AbiE",       // 3 bot token - Uncomment and replace to use
          "MTQ1Mjc1NjQ3NjQzODUxNTg5NQ.GRvFg4.Lfl4NP7PpmAYcwYCS1ccsqz7JjsyQ0A5AiFqnI",      // 4 bot token - Uncomment and replace to use
          "MTQ1Mjc1NjU4MDU0OTI2NzQ2OA.GldLUR.7SdNlWpPQjhfrOHYsm6VuVTfLod5jl_BFEUQmc",       // 5 bot token - Uncomment and replace to use
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

