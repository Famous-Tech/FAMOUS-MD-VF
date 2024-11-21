const { zokou } = require('../framework/zokou');
const traduire = require("../framework/traduction") ;
const s = require('../set');
const axios = require('axios');
//const fetch = require('node-fetch');





famous({nomCom:"bot",reaction:"📡",categorie:"IA"},async(dest,zk,commandeOptions)=>{

  const {repondre,ms,arg}=commandeOptions;
  
    if(!arg || !arg[0])
    {return repondre("yes my bro, how are you ? I'm listening to you today.")}
    //var quest = arg.join(' ');
  try{
    
    
const message = await traduire(arg.join(' '),{ to : 'en'});
 console.log(message)
fetch(`http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=${message}`)
.then(response => response.json())
.then(data => {
  const botResponse = data.cnt;
  console.log(botResponse);

  traduire(botResponse, { to: 'fr' })
    .then(translatedResponse => {
      repondre(translatedResponse);
    })
    .catch(error => {
      console.error('Erreur lors de la traduction en français :', error);
      repondre('Erreur lors de la traduction en français');
    });
})
.catch(error => {
  console.error('Erreur lors de la requête à BrainShop :', error);
  repondre('Erreur lors de la requête à BrainShop');
});

  }catch(e){ repondre("oupsaa une erreur : "+e)}
    
  
  });  
  
famous({ nomCom: "gpt", reaction: "🌐", categorie: "IA" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  try {
    // Vérifier si l'utilisateur a fourni une question
    if (!arg || arg.length === 0) {
      return repondre("Veuillez poser une question.");
    }

    // Regrouper les arguments en une seule chaîne séparée par des espaces
    const question = arg.join(" ");

    // Construire l'URL de la requête à l'API
    const apiUrl = `https://api.giftedtechnexus.co.ke/api/ai/gpt4?q=${encodeURIComponent(question)}&apikey=giftedtechk`;

    // Effectuer la requête à l'API
    const response = await axios.get(apiUrl);

    // Extraire les données de la réponse de l'API
    const { data } = response;

    // Vérifier si la réponse de l'API contient un résultat
    if (data && data.result) {
      // Renvoyer la réponse de l'API à l'utilisateur
      repondre(data.result);
    } else {
      // Si la réponse de l'API ne contient pas de résultat, renvoyer un message d'erreur
      repondre("Erreur lors de la génération de la réponse");
    }
  } catch (error) {
    // Gérer les erreurs éventuelles lors de l'appel à l'API
    console.error("Erreur:", error.message || "Une erreur s'est produite");
    repondre("Oups, une erreur est survenue lors du traitement de votre demande.");
  }
});



famous({nomCom:"chat",reaction:"🤔",categorie:"IA"},async(dest,zk,commandeOptions)=>{

  const {repondre,ms,arg}=commandeOptions;
  
    if(!arg || !arg[0])
    {return repondre("yes my brother how are you I'm listening to you today.")}
    //var quest = arg.join(' ');
  try{
    
    
const message = await traduire(arg.join(' '),{ to : 'en'});
 console.log(message)
fetch(`http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=${message}`)
.then(response => response.json())
.then(data => {
  const botResponse = data.cnt;
  console.log(botResponse);

  traduire(botResponse, { to: 'en' })
    .then(translatedResponse => {
      repondre(translatedResponse);
    })
    .catch(error => {
      console.error('Erreur lors de la traduction en français :', error);
      repondre('Erreur lors de la traduction en français');
    });
})
.catch(error => {
  console.error('Erreur lors de la requête à BrainShop :', error);
  repondre('Erreur lors de la requête à BrainShop');
});

  }catch(e){ repondre("oupsaa une erreur : "+e)}
    
  
  });  

famous({
  nomCom: "dalle",
  reaction: '📡',
  categorie: 'IA'
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  
  try {
    // Vérifier si des arguments sont fournis
    if (!arg || arg.length === 0) {
      return repondre("Veuillez entrer les informations nécessaires pour générer l'image.");
    }

    // Joindre tous les arguments en une seule chaîne
    const prompt = arg.join(" ");

    // Construire l'URL de l'API DALL-E
    const imageUrl = "https://widipe.com/dalle?text=" + encodeURIComponent(prompt);

    // Envoyer l'image générée
    await zk.sendMessage(dest, {
      image: { url: imageUrl },
      caption: "*powered by HACKING-MD*"
    }, {
      quoted: ms
    });

  } catch (error) {
    console.error("Erreur:", error.message || "Une erreur s'est produite");
    repondre("Oups, une erreur s'est produite lors du traitement de votre demande");
  }
});


