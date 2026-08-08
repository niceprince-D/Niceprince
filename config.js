/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2348144820663'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['berlin👹👹'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Nice_Beast👹',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || '',KnightBot!H4sIAAAAAAAAA5VVXZOiOBT9L3nVmgZRAau6agERRUX8QNGteQgkQmwIGAKIU/73Lezp6XnYnerlKVxSJ+eec274AWhGCjzHDRj9ADkjFeS4XfImx2AE9PJ8xgx0AYIcghFoJsEu6lcddV5Ll8JvYiM5ygM/PF478WLiKmOVNJNEUxoregWPLsjLICHhHwB1AUWzw1yyC2vrmpfQ3sYk0+fnl20QiRoUN+zuSvu97ZjhK3i0iJAwQiMzj3GKGUzmuHEhYV+jb07IYBf47D4TBEFzb0p1uM2cldmcqtvSzEsUqrwTDbxxsv4afTJ5i/F9s9Av/XCzzwcCT4fqVE22jlgHwzr1tgPFcMxNtvHe6RckohjNEKac8ObLult2vM2u8fkQTvxJQu06Obq91McSv0825yUs9QO/BoJ+mn6ReEydVTBX4okvYsukxrLjbPhRvV3UMeznR+GiTtfLPQoD+vY7cZd9ZOXt/+iuLcKVotq4Ew0lFuj3tbox63rhMv+QQ3bJbCQcxsVJ3/izr9H3euG1syuO3PCWZ/N6aKb9Aa6s6VtuTJK9l/nKOmb+qZK3wid9yEv2J5ZHXDFneTTHmUcEr1MbjptK4X4YJKmMxtVB8Rrd9yMFpcUxDpGFio4brXZZMlvLFC/jfPwynJ7M46ATpWa90jfDuBOvX58dveFmhsBIfHQBwxEpOIOcZLSt9US1CyCqtjhkmD/lBUtr5p3GFLtnXHecLF6JZH2Z+ZqExqfEJ1a9J1KkbxaLYv0KuiBnWYiLAqMpKXjGmiUuChjhAoz+/t4FFN/4u3HtcZLYBWfCCu7RMk8yiD5c/fgIwzArKd82NDTaBWZgJHyWMeeERkWrY0khC2NSYSOGvACjM0wK/KtDzDACI85K/GtqjQy1wlv+SdEO2hh0Qfo0hCAwAj2pr4j9vtIThkNpNFD/Kr7VLS7M828Uc9AFyXNff9gfSj1VlFVpOJDbjW398YthC4gwhyQpwAgYizLkVWGZtpxLztKyNDPSjEgDnx19RONd+vhanwp0zcneQHQeciTkrszExMbj+yJHxEAntuF2bTXR67+AgBHA8T3M4IvYv23WKq1QvZ4N6JmZEtJimSfs4GMnmdp7mtC+81Kh+wu/2er6Pgk0nocWo5fZxD4u73icTmqHL/Z2PNDbHHUBwhUJ8e+HTfX7YhM5ZVMX87e+suzJM8VzAjgtQySScCWnaknvh6uwSCZmz1m5872nvu1ER6uCOLi5sufV0c0uXdNcS4saW32TEu09tM+hSX5eVuQZp9ar9vVM8HP2KWwd/IJ378zbjAmP7m8gP6+T//o9HGFhBVN4PSZremrowkfzXWeonrZ+pDRD/xjRAxSCbagXGXg8vndBnkB+zlgKRgBSxDKCQBewrGxDO6Pn7A+HGVo009eR0baewIJrn4OwIykuOExzMBJlZSiqsjiQuyBttDzfcsg/5gdo7WNfLPD4ByQ8K6hbBwAA
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: true,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys — secrets should be set as env vars on Railway, never hardcoded here
    glmApiKey: process.env.GLM_API_KEY || '',
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
