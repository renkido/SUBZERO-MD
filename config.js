// ===== MAJOR CONFIGS =====
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg'); // Added PostgreSQL

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// ===== POSTGRESQL CONFIGURATION =====
const postgresConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
};

const pool = new Pool(postgresConfig); // Create connection pool

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('⚠️ PostgreSQL Connection Error:', err.message);
  } else {
    console.log('✅ Successfully connected to PostgreSQL database');
    release();
  }
});

module.exports = {
    // ===== DATABASE EXPORT =====
    pool, // Export the pool for use in other files
    
    // ===== BOT CORE SETTINGS ===== (Existing configs remain unchanged)
    SESSION_ID: process.env.SESSION_ID || "SUBZERO-MD~iBQ0JLOqGDGC3u64JMWQ",
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "ZONELFE-MD",
    MODE: process.env.MODE || "public",
    REPO: process.env.REPO || "https://github.com/renkido/SUBZERO-MD",
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "237695030544",
    OWNER_NAME: process.env.OWNER_NAME || "Saintest",
    DEV: process.env.DEV || "237695030544",
    DEVELOPER_NUMBER: '237695030544@s.whatsapp.net',

    // ... (ALL YOUR EXISTING CONFIGURATIONS REMAIN UNCHANGED) ...
    // No modifications below this line


    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SAINTEST BOT VIEWED YOUR STATUS 🤖*",
    READ_MESSAGE: process.env.READ_MESSAGE || "false",

    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    STICKER_NAME: process.env.STICKER_NAME || "ZONELFE-MD",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",

    // ===== MEDIA & AUTOMATION =====
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    BOT_IMAGE: "https://i.postimg.cc/XNTmcqZ3/subzero-menu.png",

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_CALL: process.env.ANTI_CALL || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_VV: process.env.ANTI_VV || "true",
    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
    ANTI_BOT: process.env.ANTI_BOT || "false",
    PM_BLOCKER: process.env.PM_BLOCKER || "false",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    FOOTER: process.env.FOOTER || "*© Gᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Saintest*",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_BIO: process.env.AUTO_BIO || "false",
    WELCOME_GOODBYE: process.env.WELCOME_GOODBYE || "false",
    AMDIN_EVENTS: process.env.ADMIN_EVENTS || "true",
};
