import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`

let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

/// Setting Dari Sini
global.owner = [
  ['62881024233402', 'Shiroine', true],
]
global.mods = []
global.prems = []
global.nomorbot = '6282123611559'
global.nomorown = '62881024233402'
global.nomorown1 = '6282123611559'
global.nomorown2 = '62881024233402'
global.nomorwa = '62881024233402'
global.readMore = readMore
global.author = '©️Shiroine'
global.namebot = '​MyClara'
global.wm = '©Shiroine'
global.watermark = wm
global.wm2 = '©Shiroine'
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.bottime = `Time: ${wktuwib}`
global.titlebot = `𝐌𝐲𝐂𝐥𝐚𝐫𝐚`
global.stickpack = 'Sticker By\n𝐌𝐲𝐂𝐥𝐚𝐫𝐚\nBot Urang Jawa'
global.stickauth = `ᴼʷⁿᵉʳ ᴮᵒᵗ\n𝐌𝐲𝐂𝐥𝐚𝐫𝐚\n+62881024233402`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`
global.nameown1 = 'Shiroine' // Optional
global.nameown2 = 'Shiroine' // Optional
global.thumb = 'https://telegra.ph/file/76d709c91f129b39eef88.jpg' // gambar di menu
global.leave = 'https://i.postimg.cc/yxvn10Ls/ssstik-io-1689170610318.jpg' /// Untuk BG leave

//Link Social Media Ganti Aja Kalau Ga Punya Biarin Aja
global.myweb = 'https://clayzaaubert.my.id' //website
global.sig = 'https://www.instagram.com/justto.39_' //instagram
global.sgh = 'https://github.com/Asskake' //github
global.sgc = 'https://chat.whatsapp.com/I1ucFecSWvVFfe2X0HSyCd' //group whatsapp
global.sdc = '-' //discord
global.snh = 'https://www.youtube.com/c/rextc6995' //youtube

//Donasi/Payment
global.pdana = '0881024233402' // Dana
global.povo = '0881024233402' // Ovo
global.pgopay = '0881024233402' // Gopay

/// Api keys
global.clayza = 'hbT8p6Fl2M' // https://api.clayzaaubert.my.id

/// TEXT
global.stiker_wait = '_Sedang Di Proses, Mohon Tunggu_.....'
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Eror, Mohon Coba Lagi Nanti'
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.multiplier = 69

/// flaaa
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

// The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
