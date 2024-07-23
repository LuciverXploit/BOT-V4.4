const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "LuciverBotz"
global.ownerName = "BangLuciBotz"
global.ownerBot = "6281568350150"
global.ownerNumber = ["6281568350150"] 

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = true // auto read messages

// Auto Downloader Tiktok
global.TiktokAutoDownload = true

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})