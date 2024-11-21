const { famous } = require("../framework/famous");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


famous({ nomCom: 'uptime',
    desc: 'To check runtime',
    Categorie: 'Général',
    reaction: '⚙️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`𝑼𝒑𝒕𝒊𝒎𝒆 𝒅𝒆 𝑭𝑨𝑴𝑶𝑼𝑺-𝑴𝑫: ${runtime(process.uptime())}`) 

   


  }
);


famous({ nomCom: 'capt',
    desc: 'screenshots website',
    Categorie: 'GÉNÉRAL'
    reaction: '🎥', 
    fromMe: 'true', 

},
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

    if (!arg || arg.length === 0) return repondre("SVP Veuillezme fournir un lien pour que je puisse donner la capture d\'écran");

         const linkk = arg.join(' ');



let linkkk = `https://api.screenshotmachine.com/?key=c04d3a&url=${encodeURIComponent(linkk)}&dimension=720x720`;

let res = await getBuffer(linkkk);

await zk.sendMessage(dest, { image: res, caption: '𝑾𝒆𝒃 𝑺𝒄𝒓𝒆𝒆𝒏𝒔𝒉𝒐𝒕 𝒃𝒚 *𝑭𝑨𝑴𝑶𝑼𝑺-𝑴𝑫*'}, { quoted: ms });


}
);
