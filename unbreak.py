import glob, json, os

files = glob.glob('src/**/*.tsx', recursive=True) + glob.glob('src/**/*.ts', recursive=True) + glob.glob('src/**/*.css', recursive=True)

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read().strip()
        if content.startswith('"') and content.endswith('"'):
            decoded = json.loads(content)
            with open(f, 'w', encoding='utf-8') as file:
                file.write(decoded)
            print(f"Fixed {f}")
    except Exception as e:
        print(f"Failed {f}: {e}")
