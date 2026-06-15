import glob, ast, os

files = glob.glob('d:/Antigravity/Website outreach/Rroofing/website/src/**/*.tsx', recursive=True)
files.append('d:/Antigravity/Website outreach/Rroofing/website/src/app/globals.css')

for f in set(files):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    if content.startswith('"') and content.endswith('"\n'):
        try:
            content = ast.literal_eval(content.strip())
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
        except Exception as e:
            print("Failed for", f, e)
    elif content.startswith('"') and content.endswith('"'):
        try:
            content = ast.literal_eval(content)
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
        except Exception as e:
            print("Failed for", f, e)
