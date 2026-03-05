module.exports = {
    bot: {
        tokens: [
          "MTQ3ODk2MDExMzM4ODYyMTg1NA.GMKQxg.fjWrQ57ft7y6Wg1AVORvYU3IF87dEImyyaCVAY",              // Main bot token - Replace with your actual token
          "MTQ3ODk2MDIxMTUxNDM2MzkwNg.GGcRzd.3aPjVFT0ssXlocURZGFHaq-8gyzyBBb6g0pV5w",      // 2 bot token - Uncomment and replace to use
          "MTQ3ODk2MDI0OTIzNzkzMDA2NQ.GfioA7.WaFoPxytZYVyeiOhr5Spuo3UiybPpFMejZDVvk",       // 3 bot token - Uncomment and replace to use
          "MTQ3ODk2MDI5OTQzOTY4NTczMg.G55WnC.ctSHoBP7TVatutk1qrwvrc7SH1Yi2JfdRrxGU4",      // 4 bot token - Uncomment and replace to use
          "MTQ3ODk2MDM2MDMwNzI5ODQwNQ.G-DDIG.BV4rDtYtfkGRbZT5mN7i7ig9BSRTKMWB7izWak",       // 5 bot token - Uncomment and replace to use
          "MTQ3ODk2NTIyNTA2Njg2MDY5NA.GE_JDR.9H5G-zZAcQmfo-8z6CgHHNx1KfSAhwpSwaAlzw",       // 6 bot token - Uncomment and replace to use
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





