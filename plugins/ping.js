const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


famous({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'Général',
    reaction: '🚀'       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre('*FAMOUS-TECH!!!*\n ```' + 7000 + '``` *𝐌𝐬*') 
    const { end } = new Date().getTime()
    await zk.sendMessage('*Pong!*\n ```' + (end - start) + '``` *ms*')
  }
)
