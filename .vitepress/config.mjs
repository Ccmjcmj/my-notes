import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "我的知识库",
  description: "前端笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '前端基础', link: '/docs/base/' },
      { text: '前端进阶', link: '/docs/advanced/' },
      { text: '前端应用', link: '/docs/application/' },
      { text: '后端基础', link: '/docs/backend/' },
      { text: '后端进阶', link: '/docs/backend-advanced/' },
      { text: '后端应用', link: '/docs/backend-application/' },
      { text: '计算机体系知识', link: '/docs/computer-system/' },
      { text: 'ai', link: '/docs/ai/' },
      { text: 'ai agent应用', link: '/docs/ai-agent/' }
    ],

    sidebar: {
      '/markdown-examples': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/api-examples': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/docs/base/': [
        {
          text: '前端基础',
          items: [
            { text: '概述', link: '/docs/base/' },
            { text: 'HTML', link: '/docs/base/html' },
            { text: 'CSS', link: '/docs/base/css' },
            { text: 'JavaScript', link: '/docs/base/javascript' },
            { text: '浏览器与网络', link: '/docs/base/browser-network' },
            { text: '请求与存储', link: '/docs/base/request-storage' },
            { text: '工程化入门', link: '/docs/base/engineering' },
                        {
              text: 'TypeScript 入门',
              collapsed: false,
              items: [
                { text: '概述', link: '/docs/base/typescript/' },
                { text: "1 TS 基础体系",
                                  items: [
                                    { text: "1.1 原始类型 & 顶层类型",
                                      items: [
                                        { text: "boolean / string / number / bigint / symbol / null / undefined", link: "/docs/base/typescript/1-basics/1-1-primitive/boolean-string-number" },
                                        { text: "any / unknown / never / void", link: "/docs/base/typescript/1-basics/1-1-primitive/any-unknown-never-void" },
                                        { text: "类型边界区别（any 和 unknown、never 和 void 核心差异）", link: "/docs/base/typescript/1-basics/1-1-primitive/type-boundaries" }
                                      ],
                                     },
                                    { text: "1.2 引用类型",
                                      items: [
                                        { text: "对象类型 Object / 字面量对象类型", link: "/docs/base/typescript/1-basics/1-2-reference/object" },
                                        { text: "数组类型：普通数组、只读数组 readonly[]、元组 Tuple、只读元组", link: "/docs/base/typescript/1-basics/1-2-reference/array-tuple" },
                                        { text: "函数类型：函数签名、参数类型、返回值类型、可选参数、默认参数、剩余参数", link: "/docs/base/typescript/1-basics/1-2-reference/function" },
                                        { text: "this 类型标注、this 参数", link: "/docs/base/typescript/1-basics/1-2-reference/this" }
                                      ],
                                     },
                                    { text: "1.3 类型注解 vs 类型推断",
                                      items: [
                                        { text: "自动类型推断场景", link: "/docs/base/typescript/1-basics/1-3-inference/auto-inference" },
                                        { text: "需要手动标注的场景", link: "/docs/base/typescript/1-basics/1-3-inference/manual-annotation" },
                                        { text: "类型拓宽 & 类型收窄基础", link: "/docs/base/typescript/1-basics/1-3-inference/widening-narrowing" }
                                      ],
                                     },
                                    { text: "1.4 类型断言",
                                      items: [
                                        { text: "as 断言、尖括号断言", link: "/docs/base/typescript/1-basics/1-4-assertion/as-assertion" },
                                        { text: "非空断言 !", link: "/docs/base/typescript/1-basics/1-4-assertion/non-null-assertion" },
                                        { text: "断言的风险与最佳实践", link: "/docs/base/typescript/1-basics/1-4-assertion/assertion-best-practices" }
                                      ],
                                     }
                                  ],
                                 },
                { text: "2 类型定义核心语法 🔥",
                                  items: [
                                    { text: "2.1 Interface 接口",
                                      items: [
                                        { text: "属性可选、只读属性", link: "/docs/base/typescript/2-definition/2-1-interface/optional-readonly" },
                                        { text: "索引签名（字符串索引、数字索引）", link: "/docs/base/typescript/2-definition/2-1-interface/index-signature" },
                                        { text: "方法定义", link: "/docs/base/typescript/2-definition/2-1-interface/methods" },
                                        { text: "接口继承 extends、多继承", link: "/docs/base/typescript/2-definition/2-1-interface/extends" },
                                        { text: "接口合并（声明合并）", link: "/docs/base/typescript/2-definition/2-1-interface/declaration-merge" }
                                      ],
                                     },
                                    { text: "2.2 Type 类型别名",
                                      items: [
                                        { text: "基础别名、联合类型、交叉类型", link: "/docs/base/typescript/2-definition/2-2-type/alias-union-intersection" },
                                        { text: "与 Interface 的核心区别（重点面试）", link: "/docs/base/typescript/2-definition/2-2-type/vs-interface" },
                                        { text: "递归类型", link: "/docs/base/typescript/2-definition/2-2-type/recursive" }
                                      ],
                                     },
                                    { text: "2.3 枚举 Enum",
                                      items: [
                                        { text: "数字枚举、字符串枚举、异构枚举", link: "/docs/base/typescript/2-definition/2-3-enum/numeric-string-enum" },
                                        { text: "常量枚举 const enum（编译后直接内联，无运行时对象）", link: "/docs/base/typescript/2-definition/2-3-enum/const-enum" },
                                        { text: "枚举底层原理、枚举反向映射", link: "/docs/base/typescript/2-definition/2-3-enum/enum-internals" }
                                      ],
                                     },
                                    { text: "2.4 泛型",
                                      items: [
                                        { text: "泛型基础：泛型函数、泛型接口、泛型类型别名、泛型类", link: "/docs/base/typescript/2-definition/2-4-generic/basics" },
                                        { text: "泛型约束 extends", link: "/docs/base/typescript/2-definition/2-4-generic/extends-constraint" },
                                        { text: "默认泛型参数", link: "/docs/base/typescript/2-definition/2-4-generic/default-params" },
                                        { text: "多泛型参数", link: "/docs/base/typescript/2-definition/2-4-generic/multiple-params" },
                                        { text: "泛型实战：工具函数、通用组件封装", link: "/docs/base/typescript/2-definition/2-4-generic/practical" }
                                      ],
                                     },
                                    { text: "2.5 装饰器 Decorator 🟡",
                                      items: [
                                        { text: "类装饰器、方法装饰器、属性装饰器、参数装饰器", link: "/docs/base/typescript/2-definition/2-5-decorator/types" },
                                        { text: "装饰器执行顺序", link: "/docs/base/typescript/2-definition/2-5-decorator/order" },
                                        { text: "装饰器在 React/Nest 中的使用（新版本装饰器标准）", link: "/docs/base/typescript/2-definition/2-5-decorator/react-nest" }
                                      ],
                                     }
                                  ],
                                 },
                { text: "3 类型运算与类型体操 🔥",
                                  items: [
                                    { text: "3.1 联合类型 |、交叉类型 &",
                                      items: [
                                        { text: "联合类型的分配性", link: "/docs/base/typescript/3-type-manipulation/3-1-union-intersection/distributive" },
                                        { text: "交叉类型合并规则、冲突属性处理", link: "/docs/base/typescript/3-type-manipulation/3-1-union-intersection/merge-rules" },
                                        { text: "可辨识联合（Discriminated Unions）", link: "/docs/base/typescript/3-type-manipulation/3-1-union-intersection/discriminated-unions" }
                                      ],
                                     },
                                    { text: "3.2 类型收窄 Narrowing",
                                      items: [
                                        { text: "typeof / in / instanceof / 等值判断收窄", link: "/docs/base/typescript/3-type-manipulation/3-2-narrowing/typeof-in-instanceof" },
                                        { text: "类型守卫（type predicate is）", link: "/docs/base/typescript/3-type-manipulation/3-2-narrowing/type-predicate" },
                                        { text: "可辨识联合自动收窄", link: "/docs/base/typescript/3-type-manipulation/3-2-narrowing/discriminated-narrowing" }
                                      ],
                                     },
                                    { text: "3.3 内置工具类型",
                                      items: [
                                        { text: "基础：Partial / Required / Readonly / Pick / Omit", link: "/docs/base/typescript/3-type-manipulation/3-3-utility-types/basic" },
                                        { text: "联合处理：Exclude / Extract", link: "/docs/base/typescript/3-type-manipulation/3-3-utility-types/union" },
                                        { text: "函数类型：Parameters / ReturnType / ConstructorParameters / InstanceType", link: "/docs/base/typescript/3-type-manipulation/3-3-utility-types/function" },
                                        { text: "字符串模板类型：Capitalize / Uppercase / Lowercase / Uncapitalize", link: "/docs/base/typescript/3-type-manipulation/3-3-utility-types/string-template" },
                                        { text: "元组工具：Awaited", link: "/docs/base/typescript/3-type-manipulation/3-3-utility-types/awaited" }
                                      ],
                                     },
                                    { text: "3.4 模板字面量类型",
                                      items: [
                                        { text: "基础字符串模板类型", link: "/docs/base/typescript/3-type-manipulation/3-4-template-literal/basics" },
                                        { text: "结合联合类型批量生成字符串字面量", link: "/docs/base/typescript/3-type-manipulation/3-4-template-literal/union-combination" },
                                        { text: "高级字符串类型提取、解析", link: "/docs/base/typescript/3-type-manipulation/3-4-template-literal/advanced-parse" }
                                      ],
                                     },
                                    { text: "3.5 索引访问、keyof、typeof 类型查询",
                                      items: [
                                        { text: "keyof 获取对象键联合", link: "/docs/base/typescript/3-type-manipulation/3-5-keyof-index/keyof" },
                                        { text: "T[K] 索引访问类型", link: "/docs/base/typescript/3-type-manipulation/3-5-keyof-index/indexed-access" },
                                        { text: "typeof 类型查询（区分运行时 typeof）", link: "/docs/base/typescript/3-type-manipulation/3-5-keyof-index/typeof-query" },
                                        { text: "映射类型 Mapped Types", link: "/docs/base/typescript/3-type-manipulation/3-5-keyof-index/mapped-types" }
                                      ],
                                     },
                                    { text: "3.6 条件类型 Conditional Types",
                                      items: [
                                        { text: "T extends U ? True : False", link: "/docs/base/typescript/3-type-manipulation/3-6-conditional/basics" },
                                        { text: "条件类型分配行为", link: "/docs/base/typescript/3-type-manipulation/3-6-conditional/distributive" },
                                        { text: "infer 类型推断（类型体操核心难点）", link: "/docs/base/typescript/3-type-manipulation/3-6-conditional/infer" },
                                        { text: "infer 提取函数参数、返回值、元组元素、Promise 内部类型", link: "/docs/base/typescript/3-type-manipulation/3-6-conditional/infer-practical" }
                                      ],
                                     },
                                    { text: "3.7 递归类型、循环约束 🟡",
                                      items: [
                                        { text: "深度递归对象类型", link: "/docs/base/typescript/3-type-manipulation/3-7-recursive/deep-recursive" },
                                        { text: "递归条件类型", link: "/docs/base/typescript/3-type-manipulation/3-7-recursive/recursive-conditional" }
                                      ],
                                     }
                                  ],
                                 },
                { text: "4 TS 模块、命名空间 & 类型导入导出",
                                  items: [
                                    { text: "4.1 TS 模块系统（ESM）",
                                      items: [
                                        { text: "import / export 类型导入导出（type import）", link: "/docs/base/typescript/4-module/4-1-esm/type-import-export" },
                                        { text: "导入类型的两种写法 import type / inline type", link: "/docs/base/typescript/4-module/4-1-esm/import-type-syntax" },
                                        { text: "模块解析策略（Classic / NodeNext / Bundler）", link: "/docs/base/typescript/4-module/4-1-esm/module-resolution" },
                                        { text: "裸模块、路径映射 paths", link: "/docs/base/typescript/4-module/4-1-esm/paths" }
                                      ],
                                     },
                                    { text: "4.2 命名空间 namespace",
                                      items: [
                                        { text: "命名空间使用场景", link: "/docs/base/typescript/4-module/4-2-namespace/usage" },
                                        { text: "namespace 和 module 区别", link: "/docs/base/typescript/4-module/4-2-namespace/vs-module" }
                                      ],
                                     },
                                    { text: "4.3 类型声明文件 .d.ts",
                                      items: [
                                        { text: "全局类型声明、模块声明 declare module", link: "/docs/base/typescript/4-module/4-3-dts/declare-module" },
                                        { text: "declare var / declare function / declare class", link: "/docs/base/typescript/4-module/4-3-dts/declare-var-function-class" },
                                        { text: "三斜线指令 /// <reference types=\"\" />", link: "/docs/base/typescript/4-module/4-3-dts/triple-slash" },
                                        { text: "补充第三方缺失类型", link: "/docs/base/typescript/4-module/4-3-dts/third-party-types" }
                                      ],
                                     },
                                    { text: "4.4 @types 类型包机制", link: "/docs/base/typescript/4-module/at-types" }
                                  ],
                                 },
                { text: "5 tsconfig.json 配置 🔥",
                                  items: [
                                    { text: "5.1 核心编译选项",
                                      items: [
                                        { text: "target、module、moduleResolution", link: "/docs/base/typescript/5-tsconfig/5-1-compile/target-module" },
                                        { text: "strict 严格模式（strictNullChecks 重中之重）", link: "/docs/base/typescript/5-tsconfig/5-1-compile/strict" },
                                        { text: "skipLibCheck、esModuleInterop、allowSyntheticDefaultImports", link: "/docs/base/typescript/5-tsconfig/5-1-compile/skipLibCheck-interop" },
                                        { text: "paths、baseUrl（路径别名）", link: "/docs/base/typescript/5-tsconfig/5-1-compile/paths-baseUrl" },
                                        { text: "outDir、rootDir、declaration（生成 d.ts）、declarationMap", link: "/docs/base/typescript/5-tsconfig/5-1-compile/outDir-declaration" },
                                        { text: "sourceMap", link: "/docs/base/typescript/5-tsconfig/5-1-compile/sourceMap" }
                                      ],
                                     },
                                    { text: "5.2 类型检查相关选项",
                                      items: [
                                        { text: "noImplicitAny、noImplicitThis", link: "/docs/base/typescript/5-tsconfig/5-2-type-check/noImplicitAny" },
                                        { text: "noUnusedLocals、noUnusedParameters", link: "/docs/base/typescript/5-tsconfig/5-2-type-check/noUnused" },
                                        { text: "exactOptionalPropertyTypes", link: "/docs/base/typescript/5-tsconfig/5-2-type-check/exactOptionalPropertyTypes" }
                                      ],
                                     },
                                    { text: "5.3 项目引用 Project References 🟡",
                                      items: [
                                        { text: "composite", link: "/docs/base/typescript/5-tsconfig/5-3-project-references/composite" },
                                        { text: "跨项目类型依赖", link: "/docs/base/typescript/5-tsconfig/5-3-project-references/cross-project" }
                                      ],
                                     },
                                    { text: "5.4 tsconfig 继承 extends", link: "/docs/base/typescript/5-tsconfig/extends" }
                                  ],
                                 },
                { text: "6 TS 与前端框架结合实战",
                                  items: [
                                    { text: "6.1 React + TS",
                                      items: [
                                        { text: "FC、React.ReactNode、React.ReactElement", link: "/docs/base/typescript/6-framework/6-1-react/fc-node-element" },
                                        { text: "Props 类型、children 类型", link: "/docs/base/typescript/6-framework/6-1-react/props-children" },
                                        { text: "useState / useReducer / useCallback / useMemo 类型推导与手动标注", link: "/docs/base/typescript/6-framework/6-1-react/hooks" },
                                        { text: "useRef 类型（DOM ref / 可变值 ref）", link: "/docs/base/typescript/6-framework/6-1-react/useRef" },
                                        { text: "事件类型 React.MouseEvent / ChangeEvent 等", link: "/docs/base/typescript/6-framework/6-1-react/events" },
                                        { text: "泛型组件封装", link: "/docs/base/typescript/6-framework/6-1-react/generic-component" }
                                      ],
                                     },
                                    { text: "6.2 Vue + TS",
                                      items: [
                                        { text: "Vue3 defineProps / defineEmits 类型写法", link: "/docs/base/typescript/6-framework/6-2-vue/defineProps-emits" },
                                        { text: "组合式 API ref/reactive 类型", link: "/docs/base/typescript/6-framework/6-2-vue/ref-reactive" },
                                        { text: "泛型组件", link: "/docs/base/typescript/6-framework/6-2-vue/generic-component" },
                                        { text: "全局组件类型扩充", link: "/docs/base/typescript/6-framework/6-2-vue/global-component" }
                                      ],
                                     },
                                    { text: "6.3 工具库/公共组件库开发",
                                      items: [
                                        { text: "输出类型声明文件", link: "/docs/base/typescript/6-framework/6-3-library/declaration-output" },
                                        { text: "泛型工具组件封装", link: "/docs/base/typescript/6-framework/6-3-library/generic-tools" },
                                        { text: "兼容 CJS/ESM 类型", link: "/docs/base/typescript/6-framework/6-3-library/cjs-esm" }
                                      ],
                                     },
                                    { text: "6.4 接口请求类型封装", link: "/docs/base/typescript/6-framework/api-types" }
                                  ],
                                 },
                { text: "7 TS 高级工程实践、类型质量管控",
                                  items: [
                                    { text: "7.1 类型复用最佳实践",
                                      items: [
                                        { text: "业务通用类型抽离", link: "/docs/base/typescript/7-practice/7-1-reuse/common-types" },
                                        { text: "从后端 JSON/Swagger 自动生成 TS 类型", link: "/docs/base/typescript/7-practice/7-1-reuse/swagger-generate" },
                                        { text: "禁止滥用 any", link: "/docs/base/typescript/7-practice/7-1-reuse/avoid-any" }
                                      ],
                                     },
                                    { text: "7.2 类型校验 & 运行时校验区分",
                                      items: [
                                        { text: "TS 仅静态检查，无运行时能力", link: "/docs/base/typescript/7-practice/7-2-runtime-validation/static-vs-runtime" },
                                        { text: "Zod / Valibot / Yup 结合 TS 做运行时类型校验", link: "/docs/base/typescript/7-practice/7-2-runtime-validation/zod-valibot" },
                                        { text: "类型守卫封装", link: "/docs/base/typescript/7-practice/7-2-runtime-validation/type-guards" }
                                      ],
                                     },
                                    { text: "7.3 ESLint + TypeScript 类型规范",
                                      items: [
                                        { text: "@typescript-eslint 规则", link: "/docs/base/typescript/7-practice/7-3-eslint/typescript-eslint" },
                                        { text: "禁止隐式 any、禁止 ts-ignore 滥用", link: "/docs/base/typescript/7-practice/7-3-eslint/no-ignore" },
                                        { text: "提交前类型校验", link: "/docs/base/typescript/7-practice/7-3-eslint/pre-commit-check" }
                                      ],
                                     },
                                    { text: "7.4 模块联邦、微前端下 TS 类型共享 🟡", link: "/docs/base/typescript/7-practice/module-federation" },
                                    { text: "7.5 Monorepo + TS 多包类型管理 🟡", link: "/docs/base/typescript/7-practice/monorepo-types" }
                                  ],
                                 },
                { text: "8 进阶拓展 ⚪",
                                  collapsed: true,
                                  items: [
                                    { text: "8.1 TS 编译原理基础",
                                      items: [
                                        { text: "编译三阶段：解析 → 绑定 → 类型检查 → 生成 JS", link: "/docs/base/typescript/8-advanced/8-1-compiler/three-stages" },
                                        { text: "AST 基础概念", link: "/docs/base/typescript/8-advanced/8-1-compiler/ast" },
                                        { text: "类型系统底层设计思想", link: "/docs/base/typescript/8-advanced/8-1-compiler/type-system-design" }
                                      ],
                                     },
                                    { text: "8.2 高级类型体操刷题",
                                      items: [
                                        { text: "实现内置工具类型", link: "/docs/base/typescript/8-advanced/8-2-challenges/implement-utility" },
                                        { text: "复杂递归、infer 综合题型", link: "/docs/base/typescript/8-advanced/8-2-challenges/infer-complex" },
                                        { text: "type-challenges 题库", link: "/docs/base/typescript/8-advanced/8-2-challenges/type-challenges" }
                                      ],
                                     },
                                    { text: "8.3 插件开发：TS Language Service Plugin 🟡", link: "/docs/base/typescript/8-advanced/language-service-plugin" },
                                    { text: "8.4 性能：大型项目 TS 类型编译速度优化", link: "/docs/base/typescript/8-advanced/compile-performance" }
                                  ],
                                 }
              ]
            }
          ]
        }
      ],
      '/docs/advanced/': [
        {
          text: '前端进阶',
          items: [
            { text: '概述', link: '/docs/advanced/' },
            {
              text: '工程化',
              collapsed: false,
              items: [
                { text: '概述', link: '/docs/advanced/engineering/' },
                                {
                  text: '模块化（基础前提）',
                  collapsed: false,
                  items: [
                    { text: '概述', link: '/docs/advanced/engineering/module' },
                    { text: "1 模块化基础概念",
                                          items: [
                                            { text: "1.1 什么是模块化",
                                              items: [
                                                { text: "模块化解决的核心问题：全局污染、依赖管理、代码复用", link: "/docs/advanced/engineering/module/1-basics/1-1-what-is-module/core-problems" },
                                                { text: "模块的核心特性：独立作用域、按需导出、按需导入", link: "/docs/advanced/engineering/module/1-basics/1-1-what-is-module/module-features" },
                                                { text: "模块化 vs 组件化 vs 工程化 概念区分", link: "/docs/advanced/engineering/module/1-basics/1-1-what-is-module/vs-component-engineering" }
                                              ],
                                             },
                                            { text: "1.2 前端模块化发展史",
                                              items: [
                                                { text: "原始阶段：全局 script、IIFE 自执行函数", link: "/docs/advanced/engineering/module/1-basics/1-2-history/global-script-iife" },
                                                { text: "社区规范阶段：AMD / CMD（require.js、sea.js）", link: "/docs/advanced/engineering/module/1-basics/1-2-history/amd-cmd" },
                                                { text: "Node 规范：CommonJS", link: "/docs/advanced/engineering/module/1-basics/1-2-history/commonjs" },
                                                { text: "ES 标准：ESM（ES6 Module，现代主流）", link: "/docs/advanced/engineering/module/1-basics/1-2-history/esm" }
                                              ],
                                             },
                                            { text: "1.3 模块缓存机制",
                                              items: [
                                                { text: "模块单例缓存原理", link: "/docs/advanced/engineering/module/1-basics/1-3-cache/singleton-cache" },
                                                { text: "缓存带来的业务坑（公共状态污染）", link: "/docs/advanced/engineering/module/1-basics/1-3-cache/cache-pitfalls" },
                                                { text: "缓存清除方案", link: "/docs/advanced/engineering/module/1-basics/1-3-cache/cache-clear" }
                                              ],
                                             }
                                          ],
                                         },
                    { text: "2 四大模块规范核心语法 🔥",
                                          items: [
                                            { text: "2.1 CommonJS（CJS，Node 传统规范）",
                                              items: [
                                                { text: "核心 API：require()、module.exports、exports", link: "/docs/advanced/engineering/module/2-specs/2-1-commonjs/core-api" },
                                                { text: "动态特性：运行时解析、可写在 if/循环内", link: "/docs/advanced/engineering/module/2-specs/2-1-commonjs/dynamic" },
                                                { text: "导出值是值拷贝（不是引用）", link: "/docs/advanced/engineering/module/2-specs/2-1-commonjs/value-copy" },
                                                { text: "Node 模块查找规则（优先缓存 → 内置模块 → node_modules）", link: "/docs/advanced/engineering/module/2-specs/2-1-commonjs/resolve-rules" },
                                                { text: "缺点：不支持 Tree-Shaking、浏览器原生不识别", link: "/docs/advanced/engineering/module/2-specs/2-1-commonjs/limitations" }
                                              ],
                                             },
                                            { text: "2.2 ESM（ES Module，JS 语言标准 🔥）",
                                              items: [
                                                { text: "基础导入导出：export、export default、import", link: "/docs/advanced/engineering/module/2-specs/2-2-esm/import-export" },
                                                { text: "静态特性：编译期解析，不能动态写在条件里", link: "/docs/advanced/engineering/module/2-specs/2-2-esm/static" },
                                                { text: "只读导入绑定（引用动态更新）", link: "/docs/advanced/engineering/module/2-specs/2-2-esm/live-binding" },
                                                { text: "顶层 await（top-level await）", link: "/docs/advanced/engineering/module/2-specs/2-2-esm/top-level-await" },
                                                { text: "import.meta 元信息", link: "/docs/advanced/engineering/module/2-specs/2-2-esm/import-meta" },
                                                { text: "动态导入 import() → 返回 Promise，用于懒加载", link: "/docs/advanced/engineering/module/2-specs/2-2-esm/dynamic-import" },
                                                { text: "浏览器启用 ESM：script type=\"module\"", link: "/docs/advanced/engineering/module/2-specs/2-2-esm/browser-esm" }
                                              ],
                                             },
                                            { text: "2.3 AMD 🟡",
                                              items: [
                                                { text: "define、require 异步加载", link: "/docs/advanced/engineering/module/2-specs/2-3-amd/define-require" },
                                                { text: "适用场景：早年浏览器端 require.js", link: "/docs/advanced/engineering/module/2-specs/2-3-amd/requirejs" }
                                              ],
                                             },
                                            { text: "2.4 CMD 🟡",
                                              items: [
                                                { text: "懒执行特性", link: "/docs/advanced/engineering/module/2-specs/2-4-cmd/lazy-execute" },
                                                { text: "sea.js，现已淘汰", link: "/docs/advanced/engineering/module/2-specs/2-4-cmd/seajs" }
                                              ],
                                             }
                                          ],
                                         },
                    { text: "3 ESM 与 CommonJS 核心差异 🔥",
                                          items: [
                                            { text: "解析时机：静态编译(ESM) vs 运行时(CJS)", link: "/docs/advanced/engineering/module/3-esm-vs-cjs/parse-timing" },
                                            { text: "导出本质：实时绑定 vs 值拷贝", link: "/docs/advanced/engineering/module/3-esm-vs-cjs/export-nature" },
                                            { text: "Tree-Shaking 支持与否", link: "/docs/advanced/engineering/module/3-esm-vs-cjs/tree-shaking" },
                                            { text: "循环依赖表现差异", link: "/docs/advanced/engineering/module/3-esm-vs-cjs/circular-diff" },
                                            { text: "跨规范互导（ESM 导入 CJS、CJS 导入 ESM）", link: "/docs/advanced/engineering/module/3-esm-vs-cjs/cross-import" },
                                            { text: "Node 下切换 ESM 方式（package.json \"type\":\"module\"）", link: "/docs/advanced/engineering/module/3-esm-vs-cjs/node-esm-switch" }
                                          ],
                                         },
                    { text: "4 循环依赖问题 🔥",
                                          items: [
                                            { text: "什么是循环依赖", link: "/docs/advanced/engineering/module/4-circular-dependency/what-is" },
                                            { text: "CommonJS 循环依赖表现（导出 undefined）", link: "/docs/advanced/engineering/module/4-circular-dependency/cjs-behavior" },
                                            { text: "ESM 循环依赖表现（实时绑定，不会直接 undefined）", link: "/docs/advanced/engineering/module/4-circular-dependency/esm-behavior" },
                                            { text: "如何排查循环依赖", link: "/docs/advanced/engineering/module/4-circular-dependency/debug" },
                                            { text: "工程规避方案（抽离公共类型/常量、重构依赖）", link: "/docs/advanced/engineering/module/4-circular-dependency/avoid" }
                                          ],
                                         },
                    { text: "5 打包工具中的模块处理",
                                          items: [
                                            { text: "5.1 模块解析机制",
                                              items: [
                                                { text: "相对路径、绝对路径、裸模块标识符", link: "/docs/advanced/engineering/module/5-bundler/5-1-resolution/path-types" },
                                                { text: "路径别名 paths 原理", link: "/docs/advanced/engineering/module/5-bundler/5-1-resolution/paths-alias" },
                                                { text: "扩展名自动补全、目录 index 默认查找", link: "/docs/advanced/engineering/module/5-bundler/5-1-resolution/extension-index" },
                                                { text: "externals 外部模块剥离", link: "/docs/advanced/engineering/module/5-bundler/5-1-resolution/externals" }
                                              ],
                                             },
                                            { text: "5.2 Webpack 模块处理",
                                              items: [
                                                { text: "构建依赖图", link: "/docs/advanced/engineering/module/5-bundler/5-2-webpack/dependency-graph" },
                                                { text: "loader 处理非 JS 模块", link: "/docs/advanced/engineering/module/5-bundler/5-2-webpack/loader" },
                                                { text: "chunk、bundle 概念", link: "/docs/advanced/engineering/module/5-bundler/5-2-webpack/chunk-bundle" },
                                                { text: "Module Federation 模块联邦（跨应用模块共享）", link: "/docs/advanced/engineering/module/5-bundler/5-2-webpack/module-federation" }
                                              ],
                                             },
                                            { text: "5.3 Vite 模块处理",
                                              items: [
                                                { text: "dev 环境：直接浏览器原生 ESM", link: "/docs/advanced/engineering/module/5-bundler/5-3-vite/dev-esm" },
                                                { text: "预构建 pre-bundle 原理（处理 node_modules 裸模块）", link: "/docs/advanced/engineering/module/5-bundler/5-3-vite/pre-bundle" },
                                                { text: "build 环境基于 Rollup 打包", link: "/docs/advanced/engineering/module/5-bundler/5-3-vite/build-rollup" }
                                              ],
                                             },
                                            { text: "5.4 Rollup 模块特点", link: "/docs/advanced/engineering/module/5-bundler/rollup" }
                                          ],
                                         },
                    { text: "6 模块类型与 TS / 类型声明 .d.ts",
                                          items: [
                                            { text: "模块类型识别（type: module / commonjs）", link: "/docs/advanced/engineering/module/6-ts-dts/module-type" },
                                            { text: "类型导入 import type", link: "/docs/advanced/engineering/module/6-ts-dts/import-type" },
                                            { text: "declare module 第三方模块类型补充", link: "/docs/advanced/engineering/module/6-ts-dts/declare-module" },
                                            { text: "模块导出类型自动生成（declaration）", link: "/docs/advanced/engineering/module/6-ts-dts/declaration" }
                                          ],
                                         },
                    { text: "7 工程化模块化最佳实践",
                                          items: [
                                            { text: "目录分层规范（业务模块、工具模块、组件模块、类型模块）", link: "/docs/advanced/engineering/module/7-best-practices/directory-layer" },
                                            { text: "导出规范：优先命名导出还是默认导出", link: "/docs/advanced/engineering/module/7-best-practices/export-convention" },
                                            { text: "按需导出，避免全量导出影响 Tree-Shaking", link: "/docs/advanced/engineering/module/7-best-practices/tree-shaking-export" },
                                            { text: "模块粒度设计原则（不要过大/过碎）", link: "/docs/advanced/engineering/module/7-best-practices/granularity" },
                                            { text: "动态导入做路由懒加载、组件按需加载", link: "/docs/advanced/engineering/module/7-best-practices/dynamic-import" },
                                            { text: "monorepo 多包模块管理（pnpm workspace）🟡", link: "/docs/advanced/engineering/module/7-best-practices/monorepo" }
                                          ],
                                         },
                    { text: "8 拓展内容 ⚪",
                                          collapsed: true,
                                          items: [
                                            { text: "模块沙箱、运行时模块（SystemJS）", link: "/docs/advanced/engineering/module/8-advanced/systemjs" },
                                            { text: "import maps（浏览器原生裸模块支持，无需打包工具）", link: "/docs/advanced/engineering/module/8-advanced/import-maps" },
                                            { text: "ES 模块兼容性降级方案", link: "/docs/advanced/engineering/module/8-advanced/compat" },
                                            { text: "模块性能优化：Tree-Shaking、分包策略", link: "/docs/advanced/engineering/module/8-advanced/performance" }
                                          ],
                                         }
                  ]
                },
                { text: '包管理工具', link: '/docs/advanced/engineering/package-manager' },
                { text: '构建 & 打包工具（核心重点）', link: '/docs/advanced/engineering/bundler' },
                { text: '代码质量 & 规范', link: '/docs/advanced/engineering/code-quality' },
                { text: '框架工程体系', link: '/docs/advanced/engineering/framework' },
                { text: '环境、配置与部署', link: '/docs/advanced/engineering/env-deploy' },
                { text: '高级工程化方向（进阶）', link: '/docs/advanced/engineering/advanced' }
              ]
            },
            { text: '设计模式', link: '/docs/advanced/design-pattern' },
            { text: '性能优化', link: '/docs/advanced/performance-optimization' },
            { text: '安全性', link: '/docs/advanced/security' },
            { text: '架构设计', link: '/docs/advanced/architecture-design' },
            { text: '代码规范', link: '/docs/advanced/code-style' }
          ]
        }
      ],
      '/docs/application/': [
        {
          text: '前端应用',
          items: [
            { text: '概述', link: '/docs/application/' },
            { text: '框架实战踩坑', link: '/docs/application/framework-pitfalls' },
            { text: '状态与路由落地', link: '/docs/application/state-routing' },
            { text: '接口与鉴权', link: '/docs/application/api-auth' },
            { text: '样式与移动端适配', link: '/docs/application/style-mobile' },
            { text: '性能体验 checklist', link: '/docs/application/performance-checklist' },
            { text: '工程协作与发布', link: '/docs/application/engineering-release' },
            { text: '安全与监控', link: '/docs/application/security-monitoring' },
            { text: '业务权限与复杂表单', link: '/docs/application/permission-forms' },
            { text: '组件库与中后台表格', link: '/docs/application/component-tables' },
            { text: '微前端与 WebView', link: '/docs/application/microfrontend-webview' },
            { text: '测试与线上排查', link: '/docs/application/testing-troubleshooting' }
          ]
        }
      ],
      '/docs/backend/': [
        {
          text: '后端基础',
          items: [
            { text: '概述', link: '/docs/backend/' },
            { text: 'Java 语言基础', link: '/docs/backend/java-basics' },
            { text: '构建工具与工程结构', link: '/docs/backend/build-structure' },
            { text: 'Spring / Spring Boot', link: '/docs/backend/spring-boot' },
            { text: 'Spring MVC 与接口设计', link: '/docs/backend/spring-mvc' },
            { text: 'MyBatis 与数据库', link: '/docs/backend/mybatis' },
            { text: '事务与基础 SQL', link: '/docs/backend/transaction-sql' },
            { text: '认证授权入门', link: '/docs/backend/auth' },
            { text: 'Redis 入门', link: '/docs/backend/redis' },
            { text: '日志、测试与多环境', link: '/docs/backend/logging-testing' }
          ]
        }
      ],
      '/docs/backend-advanced/': [
        {
          text: '后端进阶',
          items: [
            { text: '概述', link: '/docs/backend-advanced/' },
            { text: 'JVM 与性能调优', link: '/docs/backend-advanced/jvm-tuning' },
            { text: '并发编程进阶', link: '/docs/backend-advanced/concurrency' },
            { text: '缓存与高并发设计', link: '/docs/backend-advanced/cache-concurrency' },
            { text: '数据库进阶与分库分表', link: '/docs/backend-advanced/database-sharding' },
            { text: '消息队列与最终一致性', link: '/docs/backend-advanced/mq-consistency' },
            { text: '微服务架构', link: '/docs/backend-advanced/microservices' },
            { text: '分布式事务与服务治理', link: '/docs/backend-advanced/distributed-tx' },
            { text: '安全进阶', link: '/docs/backend-advanced/security' },
            { text: '容器化与部署', link: '/docs/backend-advanced/container-deploy' },
            { text: '可观测性', link: '/docs/backend-advanced/observability' }
          ]
        }
      ],
      '/docs/backend-application/': [
        {
          text: '后端应用',
          items: [
            { text: '概述', link: '/docs/backend-application/' },
            { text: '接口契约与幂等', link: '/docs/backend-application/api-idempotent' },
            { text: '事务失效与数据一致性', link: '/docs/backend-application/transaction-consistency' },
            { text: '订单 / 库存 / 金额落地', link: '/docs/backend-application/order-inventory' },
            { text: '缓存双写与热点问题', link: '/docs/backend-application/cache-pitfalls' },
            { text: '鉴权越权与安全实践', link: '/docs/backend-application/auth-security' },
            { text: 'MQ 与定时任务踩坑', link: '/docs/backend-application/mq-jobs' },
            { text: '发布变更与回滚', link: '/docs/backend-application/release-rollback' },
            { text: '排查协作与可观测落地', link: '/docs/backend-application/troubleshooting' }
          ]
        }
      ],
      '/docs/computer-system/': [
        {
          text: '计算机体系知识',
          items: [
            { text: '概述', link: '/docs/computer-system/' },
            { text: '数据结构与算法', link: '/docs/computer-system/data-structures-algorithms' },
            { text: '计算机组成 + 程序底层', link: '/docs/computer-system/computer-organization' },
            { text: '操作系统', link: '/docs/computer-system/operating-system' },
            {
              text: '计算机网络',
              collapsed: false,
              items: [
                { text: '概述', link: '/docs/computer-system/network/' },
                {
                  text: '1 前置基础',
                  items: [
                    { text: '1.1 TCP/IP 四层模型', link: '/docs/computer-system/network/1-foundation/tcp-ip-model' },
                    { text: '1.2 OSI 七层模型 🟡', link: '/docs/computer-system/network/1-foundation/osi-model' }
                  ]
                },
                {
                  text: '2 应用层 🔥',
                  items: [
                    {
                      text: '2.1 HTTP',
                      items: [
                        { text: 'HTTP 特性：无状态', link: '/docs/computer-system/network/2-application/http/stateless' },
                        { text: '请求报文、响应报文', link: '/docs/computer-system/network/2-application/http/message' },
                        { text: '请求方法', link: '/docs/computer-system/network/2-application/http/methods' },
                        { text: '状态码', link: '/docs/computer-system/network/2-application/http/status-code' },
                        { text: 'HTTP 缓存', link: '/docs/computer-system/network/2-application/http/cache' },
                        { text: 'Cookie / Session / Storage', link: '/docs/computer-system/network/2-application/http/storage' },
                        { text: 'HTTP 版本', link: '/docs/computer-system/network/2-application/http/versions' },
                        { text: '内容编码 gzip/br', link: '/docs/computer-system/network/2-application/http/encoding' }
                      ]
                    },
                    {
                      text: '2.2 HTTPS',
                      items: [
                        { text: 'HTTP 安全缺陷', link: '/docs/computer-system/network/2-application/https/security-flaws' },
                        { text: '加密与数字证书', link: '/docs/computer-system/network/2-application/https/crypto-cert' },
                        { text: 'TLS 握手流程', link: '/docs/computer-system/network/2-application/https/tls-handshake' },
                        { text: 'HTTP 与 HTTPS 区别', link: '/docs/computer-system/network/2-application/https/http-vs-https' }
                      ]
                    },
                    {
                      text: '2.3 DNS',
                      items: [
                        { text: '域名解析作用', link: '/docs/computer-system/network/2-application/dns/overview' },
                        { text: '递归查询、迭代查询', link: '/docs/computer-system/network/2-application/dns/query' },
                        { text: 'DNS 缓存、hosts', link: '/docs/computer-system/network/2-application/dns/cache-hosts' },
                        { text: 'DNS 劫持 🟡', link: '/docs/computer-system/network/2-application/dns/hijack' }
                      ]
                    },
                    {
                      text: '2.4 WebSocket',
                      items: [
                        { text: '与 HTTP 关系、握手', link: '/docs/computer-system/network/2-application/websocket/handshake' },
                        { text: '适用场景', link: '/docs/computer-system/network/2-application/websocket/scenarios' },
                        { text: '与轮询/长轮询对比', link: '/docs/computer-system/network/2-application/websocket/vs-polling' }
                      ]
                    },
                    { text: '2.5 正向代理 & 反向代理', link: '/docs/computer-system/network/2-application/proxy' },
                    { text: '2.6 其他应用协议 🟡', link: '/docs/computer-system/network/2-application/other-protocols' }
                  ]
                },
                {
                  text: '3 传输层 🔥',
                  items: [
                    {
                      text: '3.1 TCP',
                      items: [
                        { text: 'TCP 特性', link: '/docs/computer-system/network/3-transport/tcp/features' },
                        { text: '三次握手', link: '/docs/computer-system/network/3-transport/tcp/handshake' },
                        { text: '四次挥手', link: '/docs/computer-system/network/3-transport/tcp/wave' },
                        { text: '滑动窗口', link: '/docs/computer-system/network/3-transport/tcp/sliding-window' },
                        { text: '拥塞控制 🟡', link: '/docs/computer-system/network/3-transport/tcp/congestion' }
                      ]
                    },
                    {
                      text: '3.2 UDP',
                      items: [
                        { text: 'UDP 特性', link: '/docs/computer-system/network/3-transport/udp/features' },
                        { text: '使用场景', link: '/docs/computer-system/network/3-transport/udp/scenarios' },
                        { text: 'TCP vs UDP 对比', link: '/docs/computer-system/network/3-transport/udp/vs-tcp' }
                      ]
                    },
                    { text: '3.3 端口、Socket、多路分用', link: '/docs/computer-system/network/3-transport/port-socket' }
                  ]
                },
                {
                  text: '4 网络层 🟡',
                  collapsed: true,
                  items: [
                    { text: 'IP 协议', link: '/docs/computer-system/network/4-network-layer/ip' },
                    { text: 'ICMP（ping 原理）', link: '/docs/computer-system/network/4-network-layer/icmp' },
                    { text: 'ARP 🟡', link: '/docs/computer-system/network/4-network-layer/arp' }
                  ]
                },
                {
                  text: '5 链路层 ⚪',
                  collapsed: true,
                  items: [
                    { text: 'MAC 地址', link: '/docs/computer-system/network/5-link-layer/mac' },
                    { text: '以太网基础', link: '/docs/computer-system/network/5-link-layer/ethernet' }
                  ]
                },
                {
                  text: '6 前端工程 & 性能实战 🔥',
                  items: [
                    { text: '6.1 浏览器完整请求生命周期', link: '/docs/computer-system/network/6-frontend-practice/request-lifecycle' },
                    {
                      text: '6.2 资源加载优化',
                      items: [
                        { text: 'CDN', link: '/docs/computer-system/network/6-frontend-practice/resource-optimization/cdn' },
                        { text: 'preload / preconnect / prefetch', link: '/docs/computer-system/network/6-frontend-practice/resource-optimization/preload' },
                        { text: '分包、懒加载', link: '/docs/computer-system/network/6-frontend-practice/resource-optimization/code-splitting' }
                      ]
                    },
                    {
                      text: '6.3 抓包工具',
                      items: [
                        { text: 'Chrome DevTools Network', link: '/docs/computer-system/network/6-frontend-practice/packet-capture/devtools' },
                        { text: 'Whistle / Fiddler ⚪', link: '/docs/computer-system/network/6-frontend-practice/packet-capture/whistle-fiddler' }
                      ]
                    },
                    { text: '6.4 线上问题排查', link: '/docs/computer-system/network/6-frontend-practice/troubleshooting' }
                  ]
                },
                {
                  text: '7 拓展内容 ⚪',
                  collapsed: true,
                  items: [
                    { text: '负载均衡、网关', link: '/docs/computer-system/network/7-advanced/load-balancer-gateway' },
                    { text: '前端安全 XSS、CSRF', link: '/docs/computer-system/network/7-advanced/frontend-security' }
                  ]
                }
              ]
            },
            { text: '编译原理', link: '/docs/computer-system/compilers' },
            { text: '程序员的自我修养：链接、装载与库', link: '/docs/computer-system/linkers-loaders' },
            { text: '数据库系统概念', link: '/docs/computer-system/database-systems' },
            { text: '深入 Linux 内核架构', link: '/docs/computer-system/linux-kernel' }
          ]
        }
      ],
      '/docs/ai/': [
        {
          text: 'AI',
          items: [
            { text: '概述', link: '/docs/ai/' },
            { text: '大模型与 Prompt 基础', link: '/docs/ai/llm-prompt' },
            { text: 'RAG 与向量检索', link: '/docs/ai/rag' },
            { text: 'Agent 概念与范式', link: '/docs/ai/agent-concepts' },
            { text: '工具调用原理', link: '/docs/ai/tool-calling' },
            { text: '高级 Prompt 与结构化输出', link: '/docs/ai/advanced-prompt' },
            { text: 'RAG 进阶', link: '/docs/ai/rag-advanced' },
            { text: 'Agent 规划与反思', link: '/docs/ai/agent-planning' },
            { text: '记忆系统', link: '/docs/ai/memory' },
            { text: '多模态能力', link: '/docs/ai/multimodal' },
            { text: '微调与对齐', link: '/docs/ai/finetune-alignment' },
            { text: '评测与红队', link: '/docs/ai/evaluation' },
            { text: '推理加速与私有化部署', link: '/docs/ai/inference-deploy' }
          ]
        }
      ],
      '/docs/ai-agent/': [
        {
          text: 'AI Agent 应用',
          items: [
            { text: '概述', link: '/docs/ai-agent/' },
            { text: '场景选型与产品边界', link: '/docs/ai-agent/scenario-boundary' },
            { text: 'Agent 架构落地', link: '/docs/ai-agent/architecture' },
            { text: '工具设计与系统集成', link: '/docs/ai-agent/tool-integration' },
            { text: '记忆与多轮状态', link: '/docs/ai-agent/memory-state' },
            { text: '安全与权限控制', link: '/docs/ai-agent/security-permission' },
            { text: '可靠性：重试、熔断、人工确认', link: '/docs/ai-agent/reliability' },
            { text: '可观测与评测', link: '/docs/ai-agent/observability-eval' },
            { text: '成本优化与模型路由', link: '/docs/ai-agent/cost-routing' },
            { text: '多 Agent 协作实践', link: '/docs/ai-agent/multi-agent' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
