import fs from 'fs';
import path from 'path';

const base = 'e:/my-notes/docs/base/typescript';

const tree = [
  {
    text: '1 TS 基础体系',
    items: [
      {
        text: '1.1 原始类型 & 顶层类型',
        sub: '1-basics/1-1-primitive',
        pages: [
          ['boolean-string-number', 'boolean / string / number / bigint / symbol / null / undefined'],
          ['any-unknown-never-void', 'any / unknown / never / void'],
          ['type-boundaries', '类型边界区别（any 和 unknown、never 和 void 核心差异）'],
        ],
      },
      {
        text: '1.2 引用类型',
        sub: '1-basics/1-2-reference',
        pages: [
          ['object', '对象类型 Object / 字面量对象类型'],
          ['array-tuple', '数组类型：普通数组、只读数组 readonly[]、元组 Tuple、只读元组'],
          ['function', '函数类型：函数签名、参数类型、返回值类型、可选参数、默认参数、剩余参数'],
          ['this', 'this 类型标注、this 参数'],
        ],
      },
      {
        text: '1.3 类型注解 vs 类型推断',
        sub: '1-basics/1-3-inference',
        pages: [
          ['auto-inference', '自动类型推断场景'],
          ['manual-annotation', '需要手动标注的场景'],
          ['widening-narrowing', '类型拓宽 & 类型收窄基础'],
        ],
      },
      {
        text: '1.4 类型断言',
        sub: '1-basics/1-4-assertion',
        pages: [
          ['as-assertion', 'as 断言、尖括号断言'],
          ['non-null-assertion', '非空断言 !'],
          ['assertion-best-practices', '断言的风险与最佳实践'],
        ],
      },
    ],
  },
  {
    text: '2 类型定义核心语法 🔥',
    items: [
      {
        text: '2.1 Interface 接口',
        sub: '2-definition/2-1-interface',
        pages: [
          ['optional-readonly', '属性可选、只读属性'],
          ['index-signature', '索引签名（字符串索引、数字索引）'],
          ['methods', '方法定义'],
          ['extends', '接口继承 extends、多继承'],
          ['declaration-merge', '接口合并（声明合并）'],
        ],
      },
      {
        text: '2.2 Type 类型别名',
        sub: '2-definition/2-2-type',
        pages: [
          ['alias-union-intersection', '基础别名、联合类型、交叉类型'],
          ['vs-interface', '与 Interface 的核心区别（重点面试）'],
          ['recursive', '递归类型'],
        ],
      },
      {
        text: '2.3 枚举 Enum',
        sub: '2-definition/2-3-enum',
        pages: [
          ['numeric-string-enum', '数字枚举、字符串枚举、异构枚举'],
          ['const-enum', '常量枚举 const enum（编译后直接内联，无运行时对象）'],
          ['enum-internals', '枚举底层原理、枚举反向映射'],
        ],
      },
      {
        text: '2.4 泛型',
        sub: '2-definition/2-4-generic',
        pages: [
          ['basics', '泛型基础：泛型函数、泛型接口、泛型类型别名、泛型类'],
          ['extends-constraint', '泛型约束 extends'],
          ['default-params', '默认泛型参数'],
          ['multiple-params', '多泛型参数'],
          ['practical', '泛型实战：工具函数、通用组件封装'],
        ],
      },
      {
        text: '2.5 装饰器 Decorator 🟡',
        sub: '2-definition/2-5-decorator',
        pages: [
          ['types', '类装饰器、方法装饰器、属性装饰器、参数装饰器'],
          ['order', '装饰器执行顺序'],
          ['react-nest', '装饰器在 React/Nest 中的使用（新版本装饰器标准）'],
        ],
      },
    ],
  },
  {
    text: '3 类型运算与类型体操 🔥',
    items: [
      {
        text: '3.1 联合类型 |、交叉类型 &',
        sub: '3-type-manipulation/3-1-union-intersection',
        pages: [
          ['distributive', '联合类型的分配性'],
          ['merge-rules', '交叉类型合并规则、冲突属性处理'],
          ['discriminated-unions', '可辨识联合（Discriminated Unions）'],
        ],
      },
      {
        text: '3.2 类型收窄 Narrowing',
        sub: '3-type-manipulation/3-2-narrowing',
        pages: [
          ['typeof-in-instanceof', 'typeof / in / instanceof / 等值判断收窄'],
          ['type-predicate', '类型守卫（type predicate is）'],
          ['discriminated-narrowing', '可辨识联合自动收窄'],
        ],
      },
      {
        text: '3.3 内置工具类型',
        sub: '3-type-manipulation/3-3-utility-types',
        pages: [
          ['basic', '基础：Partial / Required / Readonly / Pick / Omit'],
          ['union', '联合处理：Exclude / Extract'],
          ['function', '函数类型：Parameters / ReturnType / ConstructorParameters / InstanceType'],
          ['string-template', '字符串模板类型：Capitalize / Uppercase / Lowercase / Uncapitalize'],
          ['awaited', '元组工具：Awaited'],
        ],
      },
      {
        text: '3.4 模板字面量类型',
        sub: '3-type-manipulation/3-4-template-literal',
        pages: [
          ['basics', '基础字符串模板类型'],
          ['union-combination', '结合联合类型批量生成字符串字面量'],
          ['advanced-parse', '高级字符串类型提取、解析'],
        ],
      },
      {
        text: '3.5 索引访问、keyof、typeof 类型查询',
        sub: '3-type-manipulation/3-5-keyof-index',
        pages: [
          ['keyof', 'keyof 获取对象键联合'],
          ['indexed-access', 'T[K] 索引访问类型'],
          ['typeof-query', 'typeof 类型查询（区分运行时 typeof）'],
          ['mapped-types', '映射类型 Mapped Types'],
        ],
      },
      {
        text: '3.6 条件类型 Conditional Types',
        sub: '3-type-manipulation/3-6-conditional',
        pages: [
          ['basics', 'T extends U ? True : False'],
          ['distributive', '条件类型分配行为'],
          ['infer', 'infer 类型推断（类型体操核心难点）'],
          ['infer-practical', 'infer 提取函数参数、返回值、元组元素、Promise 内部类型'],
        ],
      },
      {
        text: '3.7 递归类型、循环约束 🟡',
        sub: '3-type-manipulation/3-7-recursive',
        pages: [
          ['deep-recursive', '深度递归对象类型'],
          ['recursive-conditional', '递归条件类型'],
        ],
      },
    ],
  },
  {
    text: '4 TS 模块、命名空间 & 类型导入导出',
    items: [
      {
        text: '4.1 TS 模块系统（ESM）',
        sub: '4-module/4-1-esm',
        pages: [
          ['type-import-export', 'import / export 类型导入导出（type import）'],
          ['import-type-syntax', '导入类型的两种写法 import type / inline type'],
          ['module-resolution', '模块解析策略（Classic / NodeNext / Bundler）'],
          ['paths', '裸模块、路径映射 paths'],
        ],
      },
      {
        text: '4.2 命名空间 namespace',
        sub: '4-module/4-2-namespace',
        pages: [
          ['usage', '命名空间使用场景'],
          ['vs-module', 'namespace 和 module 区别'],
        ],
      },
      {
        text: '4.3 类型声明文件 .d.ts',
        sub: '4-module/4-3-dts',
        pages: [
          ['declare-module', '全局类型声明、模块声明 declare module'],
          ['declare-var-function-class', 'declare var / declare function / declare class'],
          ['triple-slash', '三斜线指令 /// <reference types="" />'],
          ['third-party-types', '补充第三方缺失类型'],
        ],
      },
      {
        text: '4.4 @types 类型包机制',
        sub: '4-module',
        flat: true,
        pages: [['at-types', '@types 类型包机制']],
      },
    ],
  },
  {
    text: '5 tsconfig.json 配置 🔥',
    items: [
      {
        text: '5.1 核心编译选项',
        sub: '5-tsconfig/5-1-compile',
        pages: [
          ['target-module', 'target、module、moduleResolution'],
          ['strict', 'strict 严格模式（strictNullChecks 重中之重）'],
          ['skipLibCheck-interop', 'skipLibCheck、esModuleInterop、allowSyntheticDefaultImports'],
          ['paths-baseUrl', 'paths、baseUrl（路径别名）'],
          ['outDir-declaration', 'outDir、rootDir、declaration（生成 d.ts）、declarationMap'],
          ['sourceMap', 'sourceMap'],
        ],
      },
      {
        text: '5.2 类型检查相关选项',
        sub: '5-tsconfig/5-2-type-check',
        pages: [
          ['noImplicitAny', 'noImplicitAny、noImplicitThis'],
          ['noUnused', 'noUnusedLocals、noUnusedParameters'],
          ['exactOptionalPropertyTypes', 'exactOptionalPropertyTypes'],
        ],
      },
      {
        text: '5.3 项目引用 Project References 🟡',
        sub: '5-tsconfig/5-3-project-references',
        pages: [
          ['composite', 'composite'],
          ['cross-project', '跨项目类型依赖'],
        ],
      },
      {
        text: '5.4 tsconfig 继承 extends',
        sub: '5-tsconfig',
        flat: true,
        pages: [['extends', 'tsconfig 继承 extends']],
      },
    ],
  },
  {
    text: '6 TS 与前端框架结合实战',
    items: [
      {
        text: '6.1 React + TS',
        sub: '6-framework/6-1-react',
        pages: [
          ['fc-node-element', 'FC、React.ReactNode、React.ReactElement'],
          ['props-children', 'Props 类型、children 类型'],
          ['hooks', 'useState / useReducer / useCallback / useMemo 类型推导与手动标注'],
          ['useRef', 'useRef 类型（DOM ref / 可变值 ref）'],
          ['events', '事件类型 React.MouseEvent / ChangeEvent 等'],
          ['generic-component', '泛型组件封装'],
        ],
      },
      {
        text: '6.2 Vue + TS',
        sub: '6-framework/6-2-vue',
        pages: [
          ['defineProps-emits', 'Vue3 defineProps / defineEmits 类型写法'],
          ['ref-reactive', '组合式 API ref/reactive 类型'],
          ['generic-component', '泛型组件'],
          ['global-component', '全局组件类型扩充'],
        ],
      },
      {
        text: '6.3 工具库/公共组件库开发',
        sub: '6-framework/6-3-library',
        pages: [
          ['declaration-output', '输出类型声明文件'],
          ['generic-tools', '泛型工具组件封装'],
          ['cjs-esm', '兼容 CJS/ESM 类型'],
        ],
      },
      {
        text: '6.4 接口请求类型封装',
        sub: '6-framework',
        flat: true,
        pages: [['api-types', 'Axios 全局类型、后端自动生成 TS 类型']],
      },
    ],
  },
  {
    text: '7 TS 高级工程实践、类型质量管控',
    items: [
      {
        text: '7.1 类型复用最佳实践',
        sub: '7-practice/7-1-reuse',
        pages: [
          ['common-types', '业务通用类型抽离'],
          ['swagger-generate', '从后端 JSON/Swagger 自动生成 TS 类型'],
          ['avoid-any', '禁止滥用 any'],
        ],
      },
      {
        text: '7.2 类型校验 & 运行时校验区分',
        sub: '7-practice/7-2-runtime-validation',
        pages: [
          ['static-vs-runtime', 'TS 仅静态检查，无运行时能力'],
          ['zod-valibot', 'Zod / Valibot / Yup 结合 TS 做运行时类型校验'],
          ['type-guards', '类型守卫封装'],
        ],
      },
      {
        text: '7.3 ESLint + TypeScript 类型规范',
        sub: '7-practice/7-3-eslint',
        pages: [
          ['typescript-eslint', '@typescript-eslint 规则'],
          ['no-ignore', '禁止隐式 any、禁止 ts-ignore 滥用'],
          ['pre-commit-check', '提交前类型校验'],
        ],
      },
      {
        text: '7.4 模块联邦、微前端下 TS 类型共享 🟡',
        sub: '7-practice',
        flat: true,
        pages: [['module-federation', '模块联邦、微前端下 TS 类型共享']],
      },
      {
        text: '7.5 Monorepo + TS 多包类型管理 🟡',
        sub: '7-practice',
        flat: true,
        pages: [['monorepo-types', 'Monorepo + TS 多包类型管理']],
      },
    ],
  },
  {
    text: '8 进阶拓展 ⚪',
    collapsed: true,
    items: [
      {
        text: '8.1 TS 编译原理基础',
        sub: '8-advanced/8-1-compiler',
        pages: [
          ['three-stages', '编译三阶段：解析 → 绑定 → 类型检查 → 生成 JS'],
          ['ast', 'AST 基础概念'],
          ['type-system-design', '类型系统底层设计思想'],
        ],
      },
      {
        text: '8.2 高级类型体操刷题',
        sub: '8-advanced/8-2-challenges',
        pages: [
          ['implement-utility', '实现内置工具类型'],
          ['infer-complex', '复杂递归、infer 综合题型'],
          ['type-challenges', 'type-challenges 题库'],
        ],
      },
      {
        text: '8.3 插件开发：TS Language Service Plugin 🟡',
        sub: '8-advanced',
        flat: true,
        pages: [['language-service-plugin', '插件开发：TS Language Service Plugin']],
      },
      {
        text: '8.4 性能：大型项目 TS 类型编译速度优化',
        sub: '8-advanced',
        flat: true,
        pages: [['compile-performance', '性能：大型项目 TS 类型编译速度优化']],
      },
    ],
  },
];

function writePage(subPath, slug, title) {
  const file = path.join(base, subPath, `${slug}.md`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `# ${title}\n\n本文介绍 ${title}。\n`, 'utf8');
  return `/docs/base/typescript/${subPath}/${slug}`;
}

function buildSidebarItems(chapter) {
  return chapter.items.map((section) => {
    if (section.flat) {
      const [slug, title] = section.pages[0];
      return { text: section.text, link: writePage(section.sub, slug, title) };
    }
    return {
      text: section.text,
      items: section.pages.map(([slug, title]) => ({
        text: title,
        link: writePage(section.sub, slug, title),
      })),
    };
  });
}

fs.mkdirSync(base, { recursive: true });
fs.writeFileSync(
  path.join(base, 'index.md'),
  '# TypeScript 入门\n\nTypeScript 从基础类型到类型体操、工程配置与框架实战的完整学习路线。\n',
  'utf8'
);

const sidebarItems = tree.map((chapter) => {
  const item = { text: chapter.text, items: buildSidebarItems(chapter) };
  if (chapter.collapsed) item.collapsed = true;
  return item;
});

fs.writeFileSync(
  'e:/my-notes/scripts/typescript-sidebar.json',
  JSON.stringify(sidebarItems, null, 2),
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
