const yts =  require('yt-search');
const ytdl = require('@distube/ytdl-core');
const fs = require('fs');

/* function pour avoir les données d'une recherche*/

async function getytlink(key) {
  try {
    const resultat = await yts(key);
    const videos = resultat.videos;
    const choix = videos[0];
    return {
        lien : choix.url ,
       affiche : choix.thumbnail,
      titre : choix.title,
      duree : choix.timestamp,
      id : choix.videoId,
    }  ;
  } catch (erreur) {
    console.error('Erreur lors de la recherche YouTube :', erreur);
    return null;
  }
}

module.exports = getytlink;

/* fonction pour télécharger les videos avec ytdl-core*/

const yt_Agent = require('./yt-agent-info')

async function ytdwn(url) {
  return ytdl(url, { quality: '18', agent: yt_Agent(ytdl)})
}
//this will download and save the file to disk, with name video.mp4
//sometimes it will go with error: Sign in to confirm you are not a bot
// you should try to use cookie and agent ##find How to get cookies
// which is not fixed yet by the lib.
// update yt_Agent as your account cookie
async function ytdwn_Video(url) {  
  return ytdl(url, { quality: '18', agent: yt_Agent(ytdl)})
}
async function ytdwn_Audio(url, fileName="audio.mp3") {  
  return ytdl(url, { filter: 'audioonly', quality: '140', agent: yt_Agent(ytdl)})
}

module.exports = {ytdwn, ytdwn_Video, ytdwn_Audio};

//TODO
//remember to modify this function in @distube\ytdl-core\lib\format-utils.js
const getFormatByQuality = (quality, formats) => {
	let getFormat = itag => formats.find(format => `${format.itag}` === `${itag}` || `${format.quality}` === `${itag}`);
	if (Array.isArray(quality)) {
	  return getFormat(quality.find(q => getFormat(q)));
	} else {
	  return getFormat(quality);
	}
};