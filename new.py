import re

def replace_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Remplacer 'HACKING-MD' par 'FAMOUS-MD'
    new_content = re.sub(r'HACKING-MD', 'FAMOUS-MD', content)

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(new_content)

if __name__ == "__main__":
    file_to_modify = "README.md"  # Remplacez par le chemin du fichier à modifier
    replace_in_file(file_to_modify)
    print(f"Remplacement effectué dans {file_to_modify}")