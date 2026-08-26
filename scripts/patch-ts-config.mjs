import fs from 'fs';

const sidebar = JSON.parse(
  fs.readFileSync('e:/my-notes/scripts/typescript-sidebar.json', 'utf8')
);

function toJs(obj, indent = 16) {
  const pad = ' '.repeat(indent);
  const padInner = ' '.repeat(indent + 2);
  if (Array.isArray(obj)) {
    return (
      '[\n' +
      obj.map((item) => padInner + toJs(item, indent + 2)).join(',\n') +
      '\n' +
      pad +
      ']'
    );
  }
  if (obj.link) {
    return `{ text: ${JSON.stringify(obj.text)}, link: ${JSON.stringify(obj.link)} }`;
  }
  const lines = [`{ text: ${JSON.stringify(obj.text)}`];
  if (obj.collapsed) lines.push(`${padInner}collapsed: true`);
  lines.push(`${padInner}items: ${toJs(obj.items, indent + 2)}`);
  lines.push(`${pad} }`);
  return lines.join(',\n');
}

const tsBlock = `            {
              text: 'TypeScript 入门',
              collapsed: false,
              items: [
                { text: '概述', link: '/docs/base/typescript/' },
${sidebar.map((ch) => '                ' + toJs(ch, 16).replace(/\n/g, '\n                ')).join(',\n')}
              ]
            }`;

const configPath = 'e:/my-notes/.vitepress/config.mjs';
let config = fs.readFileSync(configPath, 'utf8');
config = config.replace(
  "{ text: 'TypeScript 入门', link: '/docs/base/typescript' }",
  tsBlock
);
fs.writeFileSync(configPath, config, 'utf8');
console.log('Config updated');
