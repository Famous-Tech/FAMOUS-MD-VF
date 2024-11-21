const { zokou } = require("../framework/famous");
const axios = require("axios");
const traduire = require('../framework/traduction');
const Genius = require("genius-lyrics");
const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO");

famous({ nomCom: "sondage", reaction: "✨", categorie: "Général" }, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  const polll = commandeOptions.arg.join(' ');

  let [poll, opt] = polll.split("/");

  if (opt.split(",").length < 2) {
    return repondre(`Format incorrect.\nExemple : sondage Quelle est la réponse/Option 1, Option 2`);
  }

  let options = [];
  for (let i of opt.split(',')) {
    options.push(i.trim());
  }

  await zk.sendMessage(dest.id, {
    poll: {
      name: poll.trim(),
      values: options
    }
  });
});

famous({ nomCom: "faire", reaction: "✌️", categorie: "Fun" }, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const response = await axios.get('https://nekos.life/api/v2/fact');
  const data = response.data;

  repondre(`◆━━━━━━✦FAIRE✦━━━━━━◆
*◇* ${data.fact}

*◇* Powered by *Thomas*

╔═════◇
║◇ *FAIRE PAR HACKING-MD*
╚════════════════════>  `);
});

famous({ nomCom: "citation1", reaction: "🗿", categorie: "fun" }, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const response = await axios.get('https://favqs.com/api/qotd');
  const data = response.data;

  const flashhh = `
◆━━━━━━✦CITA✦━━━━━━◆
◇ _${data.quote.body}_

◇ *AUTHOR:* ${data.quote.author}
💬 Citation: ${await traduire(data.quote.body, { to: 'fr' })}
◇ _Powered by:_ *Thomas*

╔═════◇
║◇ *FAIRE PAR HACKING-MD*
╚════════════════════> `;

  repondre(thomasss);
});

famous({
   nomCom: "definir",
   reaction: "😁",
   categorie: "Recherche" }, async(dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  if (!arg || arg.length === 0) {
    return repondre("Veuillez fournir un terme à définir.");
  }

  const ques = arg.join(' ');

  try {
    const { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${ques}`);
    const textt = `
    Mot : ${ques}
    Définition: ${await traduire(data.list[0].definition.replace(/\[/g, "").replace(/\]/g, ""), { to: 'fr' })}
    Définition : ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
    Exemple : ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`;

    repondre(textt);
  } catch (error) {
    return repondre(`Aucun résultat pour ${ques}`);
  }
});

famous({ nomCom: "lyrics",
        reaction: "✨",
        categorie: "Musics🎼" }, async (dest, zk, commandeOptions) => {
    
    const { repondre, arg, ms } = commandeOptions;  
        
    try {
        if (!arg || arg.length === 0) {
            return repondre("Veuillez me fournir le nom de la chanson.");
        }

        const question = arg.join(' ');

        const searches = await Client.songs.search(question); 
        const firstSong = searches[0]; 
        const lyrics = await firstSong.lyrics(); 

        await zk.sendMessage(dest, { text: lyrics }, { quoted: ms }); 
    } catch (error) { 
        console.log(error);
        return repondre(`Je n'ai pas trouvé de paroles pour ${text}. Essayez de chercher une autre chanson.`);
    }
});
