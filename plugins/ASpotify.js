const { zokou } = require("../framework/zokou");
const BaseUrl = 'https://api.giftedtechnexus.co.ke';
const giftedapikey = 'giftedtechk'; // Utilisation de la clé API fournie

// Commande pour télécharger une piste Spotify
famous({
  nomCom: "spotify",
  categorie: "Téléchargement",
  reaction: "💿"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Veuillez insérer un lien Spotify s'il vous plaît.");
    return;
  }

  const trackUrl = arg.join(" ");
  const apiUrl = `${BaseUrl}/api/download/spotifydl?url=${encodeURIComponent(trackUrl)}&apikey=${giftedapikey}`;

  console.log(`Appel de l'API : ${apiUrl}`); // Log de l'URL de l'API

  try {
    const apiResponse = await fetch(apiUrl);
    const apiResult = await apiResponse.json();

    console.log('Réponse de l\'API :', apiResult); // Log de la réponse de l'API

    if (apiResult && apiResult.status === 200 && apiResult.success) {
      const { download_url, data } = apiResult.result;

      // Vérifiez si 'data' est défini
      if (data) {
        const { title, artist } = data;

        await zk.sendMessage(origineMessage, {
          audio: { url: download_url },
          mimetype: 'audio/mpeg'
        }, { quoted: ms });

        repondre(`Téléchargement réussi ! Voici votre audio : *${title}* par *${artist.name}*`);
      } else {
        repondre('Les données de la piste ne sont pas disponibles.');
      }
    } else {
      repondre('Échec du téléchargement de l\'audio. Veuillez réessayer plus tard.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'appel à l\'API :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de l\'audio.');
  }
});
