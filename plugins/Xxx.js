const axios = require('axios');
const { zokou } = require("../framework/zokou");

const BaseUrl = 'https://api.giftedtechnexus.co.ke';
const downloadUrl = 'https://api.giftedtechnexus.co.ke/api/download/xnxxdl';
const giftedapikey = 'giftedtechk';

famous({ nomCom: "xx", reaction: "📥", categorie: "Téléchargement" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  try {
    // Vérifier si l'utilisateur a fourni un nom de vidéo
    if (!arg || arg.length === 0) {
      return repondre("Veuillez fournir le nom de la vidéo à télécharger.");
    }

    const videoName = arg[0]; // Supposer que le premier argument est le nom de la vidéo

    // Construire l'URL de la requête pour télécharger la vidéo
    const apiUrl = `${downloadUrl}?url=https://www.xnxx.health/video/${videoName}&apikey=${giftedapikey}`;

    // Effectuer la requête à l'API
    const response = await axios.get(apiUrl);

    // Extraire les données de la réponse de l'API
    const { data } = response;

    // Vérifier si la réponse de l'API contient un lien de téléchargement
    if (data && data.downloadLink) {
      // Renvoyer le lien de téléchargement à l'utilisateur
      repondre(`Voici votre vidéo : [Télécharger](${data.downloadLink})`);
    } else {
      // Si la réponse ne contient pas de lien de téléchargement, renvoyer un message d'erreur
      repondre("Erreur lors du téléchargement de la vidéo. Vérifiez le nom de la vidéo.");
    }
  } catch (error) {
    // Gérer les erreurs éventuelles lors de l'appel à l'API
    console.error("Erreur:", error.message || "Une erreur s'est produite");
    repondre("Oups, une erreur est survenue lors du traitement de votre demande.");
  }
});
