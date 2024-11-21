import os
import re

def replace_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Remplacer 'zokou({' par 'famous({'
    new_content = re.sub(r'zokou\({', 'famous({', content)

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(new_content)

def traverse_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.js'):
                file_path = os.path.join(root, file)
                replace_in_file(file_path)
                print(f"Remplacement effectué dans {file_path}")

if __name__ == "__main__":
    directory_to_search = "."  # Remplacez par le chemin du répertoire à parcourir
    traverse_directory(directory_to_search)
    print("Remplacement terminé.")