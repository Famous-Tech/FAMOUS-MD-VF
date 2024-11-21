const { zokou } = require("../framework/zokou");
const BaseUrl = 'https://gifted-apis-third-30b2fdbb9819.herokuapp.com';
const giftedapikey = 'giftedtechk'; // Utilisation de la clé API fournie

famous({
  nomCom: "tik",
  categorie: "Téléchargement",
  reaction: "💿"
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
      const { hdplay } = apiResult.result;

      await zk.sendMessage(origineMessage, {
        video: { url: hdplay },
        mimetype: 'video/mp4'
      }, { quoted: ms });

      repondre('Téléchargement réussi, voici votre vidéo !');
    } else {
      repondre('Échec du téléchargement de la vidéo. Veuillez réessayer plus tard.');
    }
  } catch (error) {
    console.error('Erreur de l\'API :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.');
  }
});
