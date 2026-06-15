import glob
import ast

files = glob.glob('src/components/*.tsx')

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    if content.startswith('"') and '<truncated' in content:
        # It's a truncated python/json string representation
        # Let's clean it up to see what we have
        clean_content = content.split('<truncated')[0]
        # remove the starting quote
        if clean_content.startswith('"'):
            clean_content = clean_content[1:]
        
        # fix escaped newlines
        clean_content = clean_content.replace('\\n', '\n').replace('\\"', '"')
        
        with open(f, 'w', encoding='utf-8') as file:
            file.write(clean_content)
        print(f"Cleaned {f}")
