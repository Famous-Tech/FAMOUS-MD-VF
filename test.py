import os
import re

# Chemin du répertoire racine où vous souhaitez commencer la recherche
root_dir = './'

# Expression régulière pour trouver la ligne à remplacer
pattern = re.compile(r'const\s*{\s*zokou\s*}\s*=\s*require\s*\(\s*"\.\./framework/zokou"\s*\)\s*;')

# Nouveau texte à remplacer
replacement = 'const { famous } = require("../framework/famous");'

# Fonction pour remplacer le texte dans un fichier
def replace_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        file_content = file.read()

    # Remplacer toutes les occurrences de l'expression régulière
    new_content = pattern.sub(replacement, file_content)

    # Si le contenu a changé, écrire les modifications dans le fichier
    if new_content != file_content:
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Modifié: {file_path}")

# Parcourir tous les fichiers et dossiers dans le répertoire racine
for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        # Vérifier si le fichier est un fichier JavaScript
        if file.endswith('.js'):
            file_path = os.path.join(subdir, file)
            replace_in_file(file_path)

print("Remplacement terminé.")