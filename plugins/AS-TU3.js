const { zokou } = require('../framework/zokou');
const fs = require('fs');
const axios = require('axios');

famous({ nomCom: "url1", categorie: "Conversion", reaction: "👨🏿‍💻" }, async (origineMessage, zk, commandeOptions) => {
    const { msgRepondu, repondre } = commandeOptions;

    if (!msgRepondu) {
        repondre('Veuillez mentionner une vidéo ou une image.');
        return;
    }

    let mediaPath;

    if (msgRepondu.videoMessage) {
        mediaPath = await zk.downloadAndSaveMediaMessage(msgRepondu.videoMessage);
    } else if (msgRepondu.imageMessage) {
        mediaPath = await zk.downloadAndSaveMediaMessage(msgRepondu.imageMessage);
    } else {
        repondre('Veuillez mentionner une vidéo ou une image.');
        return;
    }

    // Vérifier si le fichier existe et n'est pas vide
    if (!fs.existsSync(mediaPath) || fs.statSync(mediaPath).size === 0) {
        repondre('Le fichier est vide ou n\'a pas pu être téléchargé.');
        return;
    }

    try {
        const telegraphUrl = await uploadToTelegraph(mediaPath);
        fs.unlinkSync(mediaPath);  // Supprime le fichier après utilisation

        repondre(telegraphUrl);
    } catch (error) {
        console.error('Erreur lors de la création du lien Telegraph :', error);
        repondre('Erreur lors de la création du lien Telegraph.');
    }
});

async function uploadToTelegraph(mediaPath) {
    const fileData = fs.readFileSync(mediaPath);
    const formData = new FormData();
    formData.append('file', fileData, { filename: mediaPath });

    try {
        const response = await axios.post('https://telegra.ph/upload', formData, {
            headers: {
                ...formData.getHeaders(),
            },
        });

        console.log('Réponse de Telegraph :', response.data);
        
        if (response.data && response.data.error) {
            throw new Error(response.data.error);
        }

        return `https://telegra.ph${response.data.path}`;
    } catch (error) {
        console.error('Erreur lors de la requête à Telegraph :', error.response?.data);
        throw new Error('Erreur lors de l\'upload sur Telegraph');
    }
}
