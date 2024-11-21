const { zokou } = require('../framework/zokou');
const traduire = require("../framework/traduction");
const s = require('../set');
const axios = require('axios');

// Alexa command
famous({nomCom:"alexa",reaction:"📡",categorie:"Thomas"}, async (dest, zk, commandeOptions) => {
  const {repondre, ms, arg} = commandeOptions;
  
  if (!arg || !arg[0]) {
    return repondre("YEES!\n _I'm listening to you._");
  }
  
  try {
    const userInput = arg.join(" ");
    const response = await axios.get(`http://api.brainshop.ai/get?bid=181821&key=ltFzFIXrtj2SVMTX&uid=[uid]&msg=${userInput}`);
    await repondre(response.data.cnt);
  } catch (error) {
    repondre("Something went wrong...");
  }
});

// GPT command
famous({nomCom:'gpt3.5',reaction:'📡',categorie:'IA'}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  
  if (!arg || arg.length === 0) {
    return repondre("Please ask a question.");
  }
  
  try {
    const prompt = arg.join(" ");
    const response = await axios.get(`https://api.maher-zubair.tech/ai/chatgpt3?q=${prompt}`);
    await repondre(response.data.result);
  } catch (error) {
    repondre("An error occurred while processing your request.");
  }
});
// Calculator command
famous({nomCom:'calcul',reaction:'🔢',categorie:'Thomas'}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  
  if (!arg || arg.length === 0) {
    return repondre("Please insert math calculations like 100000+2024.\n\nNOTE: Use \"(/)\" for division and \"(*)\" for multiplication or letter x");
  }
  
  try {
    const calculation = arg.join(" ");
    const response = await axios.get(`https://api.maher-zubair.tech/ai/mathssolve?q=${calculation}`);
    await repondre(response.data.result);
  } catch (error) {
    repondre("An error occurred while processing your calculation.");
  }
});

// GPT-4 command
famous({ nomCom: "gpt4", reaction: "🤔", categorie: "IA" }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
  
    try {
      if (!arg || arg.length === 0) {
        return repondre(`Please ask a question.`);
      }
  
      // Regrouper les arguments en une seule chaîne séparée par "-"
      const question = arg.join(' ');
      const response = await axios.get(`https://gpt4.giftedtech.workers.dev/?prompt=${question}`);
      
      const data = response.data;
      if (data) {
        repondre(data.result);
      } else {
        repondre("Error during response generation.");
      }
    } catch (error) {
      console.error('Erreur:', error.message || 'Une erreur s\'est produite');
      repondre("Oops, an error occurred while processing your request.");
    }
  });

// Best Wallpaper command
famous({nomCom:"best-wallp",reaction:'🙌',categorie:"Thomas"}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
    const imageUrl = response.data.urls.regular;
    
    await zk.sendMessage(dest, {
      image: { url: imageUrl },
      caption: "*POWERED BY HACKING-MD*"
    }, { quoted: ms });
  } catch (error) {
    repondre("An error occurred while fetching the image.");
  }
});

// Random Image command
famous({nomCom:"random",reaction:'🥂',categorie:"Thomas"}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
    const imageUrl = response.data.urls.regular;
    
    await zk.sendMessage(dest, {
      image: { url: imageUrl },
      caption: "*POWERED BY HACKING-MD*"
    }, { quoted: ms });
  } catch (error) {
    repondre("An error occurred while fetching the image.");
  }
});

// Nature Image command
famous({nomCom:"nature",reaction:'🦗',categorie:"Thomas"}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
    const imageUrl = response.data.urls.regular;
    
    await zk.sendMessage(dest, {
      image: { url: imageUrl },
      caption: "*POWERED BY HACKING-MD*"
    }, { quoted: ms });
  } catch (error) {
    repondre("An error occurred while fetching the image.");
  }
});

// Time command
famous({nomCom:'time',reaction:'⌚',categorie:"Thomas"}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  
try {
    const country = arg.join(" ");
    const response = await fetch(`https://levanter.onrender.com/time?code=${country}`);
    const data = await response.json();
    
    const countryName = data.result[0].name;
    const time = data.result[0].time;
    const timeZone = data.result[0].timeZone;
    
    await repondre(`Live Time in *${countryName}* Stats:\n\n*Date & Time:* ${time}\n *TimeZone:* ${timeZone}\n\n> *POWERED BY HACKING-MD*`);
  } catch (error) {
    repondre("That country name is incorrect!");
  }
});


famous({
  nomCom: 'lines',
  reaction: '🫵',
  categorie: "Thomas"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  const response = await fetch("https://api.maher-zubair.tech/misc/lines");
  const data = await response.json();
  await repondre(data.result);
});

famous({
  nomCom: 'insult',
  reaction: '💀',
  categorie: "Thomas"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  const response = await fetch("https://api.maher-zubair.tech/misc/insult");
  const data = await response.json();
  await repondre(data.result);
});

famous({
  nomCom: 'enhance',
  reaction: '💥',
  categorie: "Thomas"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  try {
    if (!arg || arg.length === 0) {
      return repondre("Please enter the Url of the image you want to enhance!");
    }
    const imageUrl = arg.join(" ");
    const enhancedImageUrl = "https://api.maher-zubair.tech/maker/enhance?url=" + imageUrl;
    zk.sendMessage(dest, {
      image: { url: enhancedImageUrl },
      caption: "*Enhanced by Zokou*"
    }, {
      quoted: ms
    });
  } catch (error) {
    console.error("Error:", error.message || "An error occurred");
    repondre("Oops, an error occurred while processing your request");
  }
});

famous({
  nomCom: 'dare',
  reaction: '😁',
  categorie: "Thomas"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  const response = await fetch("https://shizoapi.onrender.com/api/texts/dare?apikey=shizo");
  const data = await response.json();
  await repondre(data.result);
});

famous({
  nomCom: 'truth',
  reaction: '🤩',
  categorie: "Thomas"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  const response = await fetch("https://shizoapi.onrender.com/api/texts/truth?apikey=shizo");
  const data = await response.json();
  await repondre(data.result);
});


