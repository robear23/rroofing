import json
import os

log_path = r'C:\Users\robsa\.gemini\antigravity-ide\brain\a6cd2fd5-ac45-49f4-b47a-fa0317bcca88\.system_generated\logs\transcript.jsonl'
files = {}

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        step = json.loads(line)
        for tc in step.get('tool_calls', []):
            if tc['name'] in ('write_to_file', 'default_api:write_to_file'):
                args = tc.get('args', {})
                path = args.get('TargetFile', '').replace('"', '')
                if 'src' in path:
                    files[path] = args.get('CodeContent', '')
            elif tc['name'] in ('replace_file_content', 'default_api:replace_file_content'):
                args = tc.get('args', {})
                path = args.get('TargetFile', '').replace('"', '')
                if path in files:
                    lines = files[path].split('\n')
                    start = args.get('StartLine', 1) - 1
                    end = args.get('EndLine', len(lines))
                    lines[start:end] = args.get('ReplacementContent', '').split('\n')
                    files[path] = '\n'.join(lines)

for p, c in files.items():
    print('Writing', p)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8') as out:
        out.write(c)
