"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { famous } = require("../framework/famous");
const fetch = require('node-fetch'); // Assurez-vous d'avoir la bibliothèque fetch

// Commande pour récupérer les informations du dépôt
famous({ nomCom: "repo", catégorie: "Général", reaction: "🌏", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/Famous-Tech/FAMOUS-MD-VF;
  const img = 'https://files.catbox.moe/6yegga.jpg';

  try {
    // Récupération des données du dépôt
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      // Informations sur le dépôt
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: new Date(data.updated_at).toLocaleDateString('en-GB'),
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');

      // Message à envoyer
      const gitdata = `
*VOICI VOTRE NOUVEAU QR SCANNEUR ET PAIR CODE* 
🔗 https://à-venir.com/

*C'est le QR code*
🔗 https://

*Pair code*

🗼 *REPOSITORY:* ${data.html_url}
✨ *STARS:* ${repoInfo.stars}
🧧 *FORKS:* ${repoInfo.forks}
📅 *RELEASE DATE:* ${releaseDate}
🕐 *LAST UPDATE:* ${repoInfo.lastUpdate}
👨‍💻 *OWNER:* *FAMOUS-TECH*
__________________________________
            *FAMOUS-TECH*`;

      // Envoi du message avec l'image
      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
