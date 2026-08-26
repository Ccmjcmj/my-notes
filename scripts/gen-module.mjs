import fs from 'fs';
import path from 'path';

const base = 'e:/my-notes/docs/advanced/engineering/module';

const tree = [
  {
    text: '1 模块化基础概念',
    items: [
      {
        text: '1.1 什么是模块化',
        sub: '1-basics/1-1-what-is-module',
        pages: [
          ['core-problems', '模块化解决的核心问题：全局污染、依赖管理、代码复用'],
          ['module-features', '模块的核心特性：独立作用域、按需导出、按需导入'],
          ['vs-component-engineering', '模块化 vs 组件化 vs 工程化 概念区分'],
        ],
      },
      {
        text: '1.2 前端模块化发展史',
        sub: '1-basics/1-2-history',
        pages: [
          ['global-script-iife', '原始阶段：全局 script、IIFE 自执行函数'],
          ['amd-cmd', '社区规范阶段：AMD / CMD（require.js、sea.js）'],
          ['commonjs', 'Node 规范：CommonJS'],
          ['esm', 'ES 标准：ESM（ES6 Module，现代主流）'],
        ],
      },
      {
        text: '1.3 模块缓存机制',
        sub: '1-basics/1-3-cache',
        pages: [
          ['singleton-cache', '模块单例缓存原理'],
          ['cache-pitfalls', '缓存带来的业务坑（公共状态污染）'],
          ['cache-clear', '缓存清除方案'],
        ],
      },
    ],
  },
  {
    text: '2 四大模块规范核心语法 🔥',
    items: [
      {
        text: '2.1 CommonJS（CJS，Node 传统规范）',
        sub: '2-specs/2-1-commonjs',
        pages: [
          ['core-api', '核心 API：require()、module.exports、exports'],
          ['dynamic', '动态特性：运行时解析、可写在 if/循环内'],
          ['value-copy', '导出值是值拷贝（不是引用）'],
          ['resolve-rules', 'Node 模块查找规则（优先缓存 → 内置模块 → node_modules）'],
          ['limitations', '缺点：不支持 Tree-Shaking、浏览器原生不识别'],
        ],
      },
      {
        text: '2.2 ESM（ES Module，JS 语言标准 🔥）',
        sub: '2-specs/2-2-esm',
        pages: [
          ['import-export', '基础导入导出：export、export default、import'],
          ['static', '静态特性：编译期解析，不能动态写在条件里'],
          ['live-binding', '只读导入绑定（引用动态更新）'],
          ['top-level-await', '顶层 await（top-level await）'],
          ['import-meta', 'import.meta 元信息'],
          ['dynamic-import', '动态导入 import() → 返回 Promise，用于懒加载'],
          ['browser-esm', '浏览器启用 ESM：script type="module"'],
        ],
      },
      {
        text: '2.3 AMD 🟡',
        sub: '2-specs/2-3-amd',
        pages: [
          ['define-require', 'define、require 异步加载'],
          ['requirejs', '适用场景：早年浏览器端 require.js'],
        ],
      },
      {
        text: '2.4 CMD 🟡',
        sub: '2-specs/2-4-cmd',
        pages: [
          ['lazy-execute', '懒执行特性'],
          ['seajs', 'sea.js，现已淘汰'],
        ],
      },
    ],
  },
  {
    text: '3 ESM 与 CommonJS 核心差异 🔥',
    sub: '3-esm-vs-cjs',
    flat: true,
    pages: [
      ['parse-timing', '解析时机：静态编译(ESM) vs 运行时(CJS)'],
      ['export-nature', '导出本质：实时绑定 vs 值拷贝'],
      ['tree-shaking', 'Tree-Shaking 支持与否'],
      ['circular-diff', '循环依赖表现差异'],
      ['cross-import', '跨规范互导（ESM 导入 CJS、CJS 导入 ESM）'],
      ['node-esm-switch', 'Node 下切换 ESM 方式（package.json "type":"module"）'],
    ],
  },
  {
    text: '4 循环依赖问题 🔥',
    sub: '4-circular-dependency',
    flat: true,
    pages: [
      ['what-is', '什么是循环依赖'],
      ['cjs-behavior', 'CommonJS 循环依赖表现（导出 undefined）'],
      ['esm-behavior', 'ESM 循环依赖表现（实时绑定，不会直接 undefined）'],
      ['debug', '如何排查循环依赖'],
      ['avoid', '工程规避方案（抽离公共类型/常量、重构依赖）'],
    ],
  },
  {
    text: '5 打包工具中的模块处理',
    items: [
      {
        text: '5.1 模块解析机制',
        sub: '5-bundler/5-1-resolution',
        pages: [
          ['path-types', '相对路径、绝对路径、裸模块标识符'],
          ['paths-alias', '路径别名 paths 原理'],
          ['extension-index', '扩展名自动补全、目录 index 默认查找'],
          ['externals', 'externals 外部模块剥离'],
        ],
      },
      {
        text: '5.2 Webpack 模块处理',
        sub: '5-bundler/5-2-webpack',
        pages: [
          ['dependency-graph', '构建依赖图'],
          ['loader', 'loader 处理非 JS 模块'],
          ['chunk-bundle', 'chunk、bundle 概念'],
          ['module-federation', 'Module Federation 模块联邦（跨应用模块共享）'],
        ],
      },
      {
        text: '5.3 Vite 模块处理',
        sub: '5-bundler/5-3-vite',
        pages: [
          ['dev-esm', 'dev 环境：直接浏览器原生 ESM'],
          ['pre-bundle', '预构建 pre-bundle 原理（处理 node_modules 裸模块）'],
          ['build-rollup', 'build 环境基于 Rollup 打包'],
        ],
      },
      {
        text: '5.4 Rollup 模块特点',
        sub: '5-bundler',
        flat: true,
        pages: [['rollup', 'Rollup 模块特点（优先 ESM 输出，适合库打包）']],
      },
    ],
  },
  {
    text: '6 模块类型与 TS / 类型声明 .d.ts',
    sub: '6-ts-dts',
    flat: true,
    pages: [
      ['module-type', '模块类型识别（type: module / commonjs）'],
      ['import-type', '类型导入 import type'],
      ['declare-module', 'declare module 第三方模块类型补充'],
      ['declaration', '模块导出类型自动生成（declaration）'],
    ],
  },
  {
    text: '7 工程化模块化最佳实践',
    sub: '7-best-practices',
    flat: true,
    pages: [
      ['directory-layer', '目录分层规范（业务模块、工具模块、组件模块、类型模块）'],
      ['export-convention', '导出规范：优先命名导出还是默认导出'],
      ['tree-shaking-export', '按需导出，避免全量导出影响 Tree-Shaking'],
      ['granularity', '模块粒度设计原则（不要过大/过碎）'],
      ['dynamic-import', '动态导入做路由懒加载、组件按需加载'],
      ['monorepo', 'monorepo 多包模块管理（pnpm workspace）🟡'],
    ],
  },
  {
    text: '8 拓展内容 ⚪',
    collapsed: true,
    sub: '8-advanced',
    flat: true,
    pages: [
      ['systemjs', '模块沙箱、运行时模块（SystemJS）'],
      ['import-maps', 'import maps（浏览器原生裸模块支持，无需打包工具）'],
      ['compat', 'ES 模块兼容性降级方案'],
      ['performance', '模块性能优化：Tree-Shaking、分包策略'],
    ],
  },
];

function writePage(subPath, slug, title) {
  const file = path.join(base, subPath, `${slug}.md`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `# ${title}\n\n本文介绍 ${title}。\n`, 'utf8');
  return `/docs/advanced/engineering/module/${subPath}/${slug}`;
}

function buildSection(section) {
  if (section.flat) {
    return section.pages.map(([slug, title]) => ({
      text: title,
      link: writePage(section.sub, slug, title),
    }));
  }
  if (section.items) {
    return section.items.map((sub) => {
      if (sub.flat) {
        const [slug, title] = sub.pages[0];
        return { text: sub.text, link: writePage(sub.sub, slug, title) };
      }
      return {
        text: sub.text,
        items: sub.pages.map(([slug, title]) => ({
          text: title,
          link: writePage(sub.sub, slug, title),
        })),
      };
    });
  }
  return [];
}

function buildChapter(chapter) {
  if (chapter.flat) {
    return {
      text: chapter.text,
      ...(chapter.collapsed ? { collapsed: true } : {}),
      items: buildSection(chapter),
    };
  }
  return {
    text: chapter.text,
    items: buildSection(chapter),
  };
}

fs.mkdirSync(base, { recursive: true });

const sidebarItems = tree.map(buildChapter);

fs.writeFileSync(
  'e:/my-notes/scripts/module-sidebar.json',
  JSON.stringify(sidebarItems, null, 2),
  'utf8'
);

function countFiles(dir) {
  if (!fs.existsSync(dir)) return 0;
  let n = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) n += countFiles(path.join(dir, e.name));
    else if (e.name.endsWith('.md')) n++;
  }
  return n;
}

console.log('Created', countFiles(base), 'markdown files in module/');
