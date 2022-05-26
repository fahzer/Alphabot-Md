const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'ZeeoneOfc',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = true //status online (online)

// Other
global.botname = "Sabo - MD" //namabot kalian
global.ownername= "Sabo" //nama kalian
global.myweb ="https://chat.whatsapp.com/BXRH5ApRnbaHm6ULbPuG4d" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/UCPVHqM42eOQNMTptryIa2dQ" //bebas asal jan hapus
global.github = "https://github.com/SaboBOTZMD" //bebas
global.email = "sabooygy@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "628815952469" // nomor wa kalian
global.ownernomerr = "+628815952469" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["628815952469","628815952469","628815952469"] //ganti agar fitur owner bisa di gunakan
global.packname = 'Sabo' //sticker wm ubah
global.author = 'Sabo - MD' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '*_Done Deck_*',
    admin: '*_Yang Bisa Cuman Admin, Lu Siapa? Member Gausah Soker_*',
    botAdmin: '*_Mikir Dong Deck, Bot Ga Admin_*',
    owner: '*_Yang Bisa Cuman Owner, Lu Ngapain? Emang Lu Owner?_*',
    group: '*_Cuman Bisa Di Gc_*',
    private: '*_Cukan Bisa Di Private Message_*',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: '*_Ga Support Gif_*',
    wait: '*_Bentar Deck_*',
	lockCmd: '*_Fitur Tidak Diaktifkan Oleh Owner!_*',
	example1: '*_Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)_*'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
