"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
const fetch = require('node-fetch'); // Assurez-vous d'avoir la bibliothèque fetch

// Commande pour récupérer les informations du dépôt
famous({ nomCom: "repo1", catégorie: "Général", reaction: "🌏", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/HACKING995/HACKING--MD9';
  const img = 'https://telegra.ph/file/b9a0855b3741a8b62a796.jpg';

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
🔗 https://qr-wp-piratage.onrender.com/

*C'est le QR code*
🔗 https://pairing-mdv3.onrender.com

*Pair code*

🗼 *REPOSITORY:* ${data.html_url}
✨ *STARS:* ${repoInfo.stars}
🧧 *FORKS:* ${repoInfo.forks}
📅 *RELEASE DATE:* ${releaseDate}
🕐 *LAST UPDATE:* ${repoInfo.lastUpdate}
👨‍💻 *OWNER:* *Thomas*
__________________________________
            *Made With* Thomas`;

      // Envoi du message avec l'image
      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
