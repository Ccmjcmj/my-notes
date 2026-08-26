import fs from 'fs';
import path from 'path';

const root = 'e:/my-notes';
const configPath = path.join(root, '.vitepress/config.mjs');

let config = fs.readFileSync(configPath, 'utf8');

// 各模块侧边栏一级路由（12 空格 flat link）
config = config.replace(
  /^            \{ text: '(🔴|🟡|🟢) /gm,
  "            { text: '📚 $1 "
);

// 工程化子模块一级路由（16 空格 flat link）
config = config.replace(
  /^                \{ text: '(🔴|🟡|🟢) /gm,
  "                { text: '📚 $1 "
);

// TypeScript 嵌套一级模块
config = config.replace(
  /^              text: '🔴 TypeScript 入门',/m,
  "              text: '📚 🔴 TypeScript 入门',"
);

fs.writeFileSync(configPath, config, 'utf8');

// 收集需同步更新 H1 的页面链接
const linkPattern = /^ {12,16}\{ text: '📚 (?:🔴|🟡|🟢) [^']+', link: '([^']+)'/gm;
const links = new Set();
let match;
while ((match = linkPattern.exec(config)) !== null) {
  links.add(match[1]);
}

// 已有 📚 的嵌套模块 index
[
  '/docs/base/typescript/',
  '/docs/advanced/engineering/',
  '/docs/advanced/engineering/module',
  '/docs/computer-system/dsa/',
  '/docs/computer-system/computer-org/',
  '/docs/computer-system/os/',
  '/docs/computer-system/network/',
  '/docs/computer-system/compiler/',
  '/docs/computer-system/browser/',
  '/docs/computer-system/nginx/'
].forEach((link) => links.add(link));

function linkToFile(link) {
  const rel = link.replace(/^\/docs\//, 'docs/').replace(/\/$/, '');
  const asMd = path.join(root, `${rel}.md`);
  const asIndex = path.join(root, rel, 'index.md');
  if (fs.existsSync(asMd)) return asMd;
  if (fs.existsSync(asIndex)) return asIndex;
  return null;
}

let updated = 0;
for (const link of links) {
  const file = linkToFile(link);
  if (!file) continue;
  let content = fs.readFileSync(file, 'utf8');
  if (!content.startsWith('# ') || content.startsWith('# 📚 ')) continue;
  content = content.replace(/^# /, '# 📚 ');
  fs.writeFileSync(file, content, 'utf8');
  updated++;
}

console.log('Config updated, markdown H1 updated:', updated, 'files');
