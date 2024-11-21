const axios = require('axios');
const { zokou } = require("../framework/zokou");

const BaseUrl = 'https://api.giftedtechnexus.co.ke';
const giftedapikey = 'giftedtechk';

famous({ nomCom: "ge1", reaction: "🌐", categorie: "IA" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg } = commandeOptions;

  try {
    // Vérifier si l'utilisateur a fourni une URL d'image
    if (!arg || arg.length === 0) {
      return repondre("Hello, I'm *HACKING-MD*, an AI developed by *THOMAS TECH*.\n\nWhat help can I offer you today?.");
    }

    const imageUrl = arg[0]; // Supposer que le premier argument est l'URL de l'image

    // Construire l'URL de la requête à l'API Gemini
    const apiUrl = `${BaseUrl}/api/ai/geminiai?q=${encodeURIComponent(imageUrl)}&apikey=${giftedapikey}`;

    // Effectuer la requête à l'API
    const response = await axios.get(apiUrl);

    // Extraire les données de la réponse de l'API
    const { data } = response;

    // Vérifier si la réponse de l'API contient un résultat
    if (data && data.result) {
      // Renvoyer le texte extrait de l'image à l'utilisateur
      repondre(data.result);
    } else {
      // Si la réponse ne contient pas de résultat, renvoyer un message d'erreur
      repondre("Erreur lors de l'extraction du texte de l'image.");
    }
  } catch (error) {
    // Gérer les erreurs éventuelles lors de l'appel à l'API
    console.error("Erreur:", error.message || "Une erreur s'est produite");
    repondre("Oups, une erreur est survenue lors du traitement de votre demande.");
  }
});
