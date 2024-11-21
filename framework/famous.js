var tabCmds = [];
let cm = [];

function famous(obj, fonctions) {
    let infoComs = obj;
    if (!obj.categorie) {
        infoComs.categorie = "Général";
    }
    if (!obj.reaction) {
        infoComs.reaction = "💫";
    }
    infoComs.fonction = fonctions;
    cm.push(infoComs);
    // console.log('chargement...')
    return infoComs;
}

module.exports = { famous, Module: famous, cm };