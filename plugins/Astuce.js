const { zokou } = require("../framework/zokou");
const BaseUrl = 'https://api.giftedtech.my.id';
const giftedapikey = '_0x5aff35,_0x1876r'; // Utilisation de la clé API fournie

famous({
  nomCom: "tiktok",
  categorie: "Téléchargement",
  reaction: "📱"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Veuillez insérer un lien TikTok s'il vous plaît.");
    return;
  }

  try {
    const videoUrl = arg.join(" ");
    const apiUrl = `${BaseUrl}/api/download/tiktokdlv5?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`;

    const apiResponse = await fetch(apiUrl);
    const apiResult = await apiResponse.json();

    if (apiResult.status === 200 && apiResult.success) {
      const { hdplay, id, region, title, duration, nickname, author } = apiResult.result;

      // Préparation du message avec les informations supplémentaires
      const infoMessage = {
        caption: `*HACKING-MD TIKTOK  DOWNLOAD*
- *ID :* ${id}
- *Région :* ${region}
- *Titre :* ${title}
- *Durée :* ${duration}
- *Pseudo :* ${nickname}
- *Auteur :* ${author}`,

        video: { url: hdplay },
        mimetype: 'video/mp4'
      };

      await zk.sendMessage(origineMessage, infoMessage, { quoted: ms });

      repondre('Téléchargement réussi, by *HACKING-MD*!');
    } else {
      repondre('Échec du téléchargement de la vidéo. Veuillez réessayer plus tard.');
    }
  } catch (error) {
    console.error('Erreur de l\'API :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.');
  }
});
