import fs from 'fs';
import path from 'path';

const base = 'e:/my-notes/docs/computer-system/compiler';

function write(sub, slug, title, desc) {
  const file = path.join(base, sub, `${slug}.md`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `# ${title}\n\n${desc}\n`, 'utf8');
}

// 1 编译基础概念
write('1-basics', 'compile-vs-interpret', '编译 vs 解释', '编译与解释的区别，JS 是解释型语言及 JIT 即时编译。');
write('1-basics', 'three-stages', '编译三阶段', '词法分析 → 语法分析 → 代码生成的编译流程。');
write('1-basics', 'ast', 'AST 抽象语法树 ⭐', '抽象语法树的概念与在前端工程中的核心地位。');

// 2 词法分析
write('2-lexer', 'token-basics', '词、Token、分词', '词法单元 Token 与分词的基本概念。');
write('2-lexer', 'js-tokenize', 'JS 源码如何拆成 Token', 'JavaScript 源码词法分析过程。');

// 3 语法分析
write('3-parser', 'ast-from-token', '基于 Token 生成 AST', 'Parser 如何将 Token 序列构建为 AST。');
write('3-parser', 'syntax-error', '语法报错原理', 'SyntaxError 是如何在语法分析阶段产生的。');
write('3-parser', 'mini-parser', '简单手写迷你 Parser', '手写简易 Parser 的实践入门。');

// 4 Babel
write('4-babel', 'parser', '@babel/parser：生成 AST', '使用 @babel/parser 将源码解析为 AST。');
write('4-babel', 'traverse', '@babel/traverse：遍历、修改 AST', '遍历与转换 AST 节点。');
write('4-babel', 'generator', '@babel/generator：AST 转回代码', '将 AST 生成回 JavaScript 代码。');
write('4-babel', 'types', '@babel/types：节点构造工具', '构造与判断 AST 节点的工具。');
write('4-babel', 'plugins-preset', '插件、预设 preset 原理', 'Babel 插件与 preset 的配置原理。');

// 5 代码转换实战
write('5-transformation', 'es6-to-es5', 'ES6+ 转 ES5', '语法降级与 polyfill 的基本思路。');
write('5-transformation', 'ts-to-js', 'TS 转 JS', 'TypeScript 编译到 JavaScript 的流程。');
write('5-transformation', 'practical-scenarios', '自动埋点、按需导入、语法降级', 'AST 转换在前端工程中的实战场景。');

// 拓展了解
write('6-optional', 'semantic-analysis', '语义分析基础', '作用域、类型检查等语义分析入门。');
write('6-optional', 'static-analysis', '宏、静态分析', 'ESLint、Prettier 等工具的底层思路。');
write('6-optional', 'template-compilation', '模板编译', 'Vue 模板编译、JSX 编译原理概览。');
write('6-optional', 'minify-treeshaking', '代码压缩、Tree-Shaking 和 AST', '压缩与 Tree-Shaking 如何依赖 AST。');
write('6-optional', 'jit-v8', 'JIT 即时编译（V8）', 'V8 的 JIT 编译机制概览。');

// 可跳过
write('7-skip', 'automata', '正规式、自动机理论', 'DFA / NFA 等理论，前端可跳过。');
write('7-skip', 'lr-ll', 'LR、LL 语法分析算法细节', '语法分析算法细节，前端可跳过。');
write('7-skip', 'ir-codegen', '中间代码 IR、优化、目标机器码', '编译器后端 IR 与代码生成，前端可跳过。');
write('7-skip', 'compiler-backend', '复杂编译器后端、寄存器分配', '寄存器分配等后端细节，前端可跳过。');

fs.writeFileSync(
  path.join(base, 'index.md'),
  `# 编译原理\n\n高级前端方向的编译原理学习路线。\n\n> **优先级说明：** 🔴 核心必学 · 🟡 拓展了解 · 🟢 可跳过\n`,
  'utf8'
);

function countFiles(dir) {
  let n = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) n += countFiles(path.join(dir, e.name));
    else if (e.name.endsWith('.md')) n++;
  }
  return n;
}

console.log('Created', countFiles(base), 'markdown files');
