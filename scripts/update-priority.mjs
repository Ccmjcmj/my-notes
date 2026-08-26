import fs from 'fs';

const configPath = 'e:/my-notes/.vitepress/config.mjs';
let config = fs.readFileSync(configPath, 'utf8');

// 统一 emoji：🔥 → 🔴，⚪ → 🟢
config = config.replaceAll('🔥', '🔴').replaceAll('⚪', '🟢');

// 操作系统：替换单页为嵌套目录
const osBlock = `            {
              text: '操作系统',
              collapsed: false,
              items: [
                { text: '概述', link: '/docs/computer-system/os/' },
                {
                  text: '🔴 核心必学',
                  items: [
                    {
                      text: '1 进程与线程',
                      items: [
                        { text: '1.1 进程基础', link: '/docs/computer-system/os/1-process-thread/process-basics' },
                        { text: '1.2 浏览器多进程架构', link: '/docs/computer-system/os/1-process-thread/browser-multi-process' },
                        { text: '1.3 线程基础', link: '/docs/computer-system/os/1-process-thread/thread-basics' },
                        { text: '1.4 渲染进程内五大线程', link: '/docs/computer-system/os/1-process-thread/render-threads' },
                        { text: '1.5 并发、并行概念', link: '/docs/computer-system/os/1-process-thread/concurrency-parallelism' }
                      ]
                    },
                    {
                      text: '2 内存：堆 & 栈',
                      items: [
                        { text: '2.1 栈', link: '/docs/computer-system/os/2-memory/stack' },
                        { text: '2.2 堆', link: '/docs/computer-system/os/2-memory/heap' },
                        { text: '2.3 V8 堆与 GC 基础', link: '/docs/computer-system/os/2-memory/v8-gc' }
                      ]
                    },
                    {
                      text: '3 IO 与异步模型',
                      items: [
                        { text: '3.1 同步/异步、阻塞/非阻塞', link: '/docs/computer-system/os/3-io-async/sync-async-blocking' },
                        { text: '3.2 IO 多路复用', link: '/docs/computer-system/os/3-io-async/io-multiplexing' },
                        { text: '3.3 事件驱动 & Event Loop 底层', link: '/docs/computer-system/os/3-io-async/event-loop' }
                      ]
                    }
                  ]
                },
                {
                  text: '🟡 网络相关 OS',
                  collapsed: true,
                  items: [
                    { text: '4 Socket 套接字', link: '/docs/computer-system/os/4-socket/socket' },
                    { text: '5 端口', link: '/docs/computer-system/os/5-port/port' }
                  ]
                },
                {
                  text: '🟢 拓展加分',
                  collapsed: true,
                  items: [
                    { text: '6 CPU 时间片、进程调度', link: '/docs/computer-system/os/6-cpu-scheduling/cpu-scheduling' },
                    { text: '7 文件描述符基础', link: '/docs/computer-system/os/7-fd/file-descriptor' }
                  ]
                }
              ]
            }`;

config = config.replace(
  "{ text: '操作系统', link: '/docs/computer-system/operating-system' }",
  osBlock
);

// 计算机网络：按 🔴🟡🟢 分组
const networkOldStart = `                { text: '概述', link: '/docs/computer-system/network/' },
                {
                  text: '1 前置基础',`;
const networkNewStart = `                { text: '概述', link: '/docs/computer-system/network/' },
                {
                  text: '🔴 核心必学',
                  items: [
                {
                  text: '1 前置基础',`;

if (config.includes(networkOldStart)) {
  config = config.replace(networkOldStart, networkNewStart);

  // 在 3 传输层 结束后、4 网络层 前不需要改
  // 把 4 网络层到 7 拓展 包进 🟡/🟢，6 章留在 🔴 内
  config = config.replace(
    `                {
                  text: '4 网络层 🟡',
                  collapsed: true,`,
    `                  ]
                },
                {
                  text: '🟡 了解为主',
                  collapsed: true,
                  items: [
                {
                  text: '4 网络层',`
  );

  config = config.replace(
    `                {
                  text: '5 链路层 🟢',
                  collapsed: true,
                  items: [
                    { text: 'MAC 地址', link: '/docs/computer-system/network/5-link-layer/mac' },
                    { text: '以太网基础', link: '/docs/computer-system/network/5-link-layer/ethernet' }
                  ]
                },
                {
                  text: '6 前端工程 & 性能实战 🔴',`,
    `                  ]
                },
                {
                  text: '6 前端工程 & 性能实战',`
  );

  config = config.replace(
    `                {
                  text: '7 拓展内容 🟢',
                  collapsed: true,
                  items: [
                    { text: '负载均衡、网关', link: '/docs/computer-system/network/7-advanced/load-balancer-gateway' },
                    { text: '前端安全 XSS、CSRF', link: '/docs/computer-system/network/7-advanced/frontend-security' }
                  ]
                }`,
    `                  ]
                },
                {
                  text: '🟢 拓展内容',
                  collapsed: true,
                  items: [
                {
                  text: '5 链路层',
                  items: [
                    { text: 'MAC 地址', link: '/docs/computer-system/network/5-link-layer/mac' },
                    { text: '以太网基础', link: '/docs/computer-system/network/5-link-layer/ethernet' }
                  ]
                },
                {
                  text: '7 拓展内容',
                  items: [
                    { text: '负载均衡、网关', link: '/docs/computer-system/network/7-advanced/load-balancer-gateway' },
                    { text: '前端安全 XSS、CSRF', link: '/docs/computer-system/network/7-advanced/frontend-security' }
                  ]
                }
                  ]
                }`
  );

  // 清理章节标题里残留的 🔴
  config = config.replace(/text: '2 应用层 🔴'/g, "text: '2 应用层'");
  config = config.replace(/text: '3 传输层 🔴'/g, "text: '3 传输层'");
  config = config.replace(/text: '6 前端工程 & 性能实战 🔴'/g, "text: '6 前端工程 & 性能实战'");
}

// 计算机体系 - 顶级条目加标记
config = config.replace(
  "{ text: '数据结构与算法', link: '/docs/computer-system/data-structures-algorithms' }",
  "{ text: '🔴 数据结构与算法', link: '/docs/computer-system/data-structures-algorithms' }"
);
config = config.replace(
  "{ text: '计算机组成 + 程序底层', link: '/docs/computer-system/computer-organization' }",
  "{ text: '🟡 计算机组成 + 程序底层', link: '/docs/computer-system/computer-organization' }"
);
config = config.replace(
  "{ text: '编译原理', link: '/docs/computer-system/compilers' }",
  "{ text: '🟢 编译原理', link: '/docs/computer-system/compilers' }"
);
config = config.replace(
  "{ text: '程序员的自我修养：链接、装载与库', link: '/docs/computer-system/linkers-loaders' }",
  "{ text: '🟢 程序员的自我修养：链接、装载与库', link: '/docs/computer-system/linkers-loaders' }"
);
config = config.replace(
  "{ text: '数据库系统概念', link: '/docs/computer-system/database-systems' }",
  "{ text: '🟢 数据库系统概念', link: '/docs/computer-system/database-systems' }"
);
config = config.replace(
  "{ text: '深入 Linux 内核架构', link: '/docs/computer-system/linux-kernel' }",
  "{ text: '🟢 深入 Linux 内核架构', link: '/docs/computer-system/linux-kernel' }"
);

// 前端基础
const baseReplacements = [
  ["{ text: 'HTML', link: '/docs/base/html' }", "{ text: '🔴 HTML', link: '/docs/base/html' }"],
  ["{ text: 'CSS', link: '/docs/base/css' }", "{ text: '🔴 CSS', link: '/docs/base/css' }"],
  ["{ text: 'JavaScript', link: '/docs/base/javascript' }", "{ text: '🔴 JavaScript', link: '/docs/base/javascript' }"],
  ["{ text: '浏览器与网络', link: '/docs/base/browser-network' }", "{ text: '🔴 浏览器与网络', link: '/docs/base/browser-network' }"],
  ["{ text: '请求与存储', link: '/docs/base/request-storage' }", "{ text: '🔴 请求与存储', link: '/docs/base/request-storage' }"],
];
for (const [a, b] of baseReplacements) config = config.replace(a, b);

// TS 章节标题加标记
config = config.replace('{ text: "1 TS 基础体系",', '{ text: "🔴 1 TS 基础体系",');
config = config.replace('{ text: "2 类型定义核心语法 🔴",', '{ text: "🔴 2 类型定义核心语法",');
config = config.replace('{ text: "3 类型运算与类型体操 🔴",', '{ text: "🔴 3 类型运算与类型体操",');
config = config.replace('{ text: "4 TS 模块、命名空间 & 类型导入导出",', '{ text: "🟡 4 TS 模块、命名空间 & 类型导入导出",');
config = config.replace('{ text: "5 tsconfig.json 配置 🔴",', '{ text: "🔴 5 tsconfig.json 配置",');
config = config.replace('{ text: "6 TS 与前端框架结合实战",', '{ text: "🔴 6 TS 与前端框架结合实战",');
config = config.replace('{ text: "7 TS 高级工程实践、类型质量管控",', '{ text: "🔴 7 TS 高级工程实践、类型质量管控",');
config = config.replace('{ text: "8 进阶拓展 🟢",', '{ text: "🟢 8 进阶拓展",');

// 工程化 - 模块化章节
config = config.replace('{ text: "1 模块化基础概念",', '{ text: "🔴 1 模块化基础概念",');
config = config.replace('{ text: "2 四大模块规范核心语法 🔴",', '{ text: "🔴 2 四大模块规范核心语法",');
config = config.replace('{ text: "3 ESM 与 CommonJS 核心差异 🔴",', '{ text: "🔴 3 ESM 与 CommonJS 核心差异",');
config = config.replace('{ text: "4 循环依赖问题 🔴",', '{ text: "🔴 4 循环依赖问题",');
config = config.replace('{ text: "5 打包工具中的模块处理",', '{ text: "🔴 5 打包工具中的模块处理",');
config = config.replace('{ text: "6 模块类型与 TS / 类型声明 .d.ts",', '{ text: "🟡 6 模块类型与 TS / 类型声明 .d.ts",');
config = config.replace('{ text: "7 工程化模块化最佳实践",', '{ text: "🔴 7 工程化模块化最佳实践",');
config = config.replace('{ text: "8 拓展内容 🟢",', '{ text: "🟢 8 拓展内容",');
config = config.replace('{ text: "2.2 ESM（ES Module，JS 语言标准 🔴）",', '{ text: "2.2 ESM（ES Module，JS 语言标准）",');

// 工程化其他条目
config = config.replace(
  "{ text: '包管理工具', link: '/docs/advanced/engineering/package-manager' }",
  "{ text: '🔴 包管理工具', link: '/docs/advanced/engineering/package-manager' }"
);
config = config.replace(
  "{ text: '构建 & 打包工具（核心重点）', link: '/docs/advanced/engineering/bundler' }",
  "{ text: '🔴 构建 & 打包工具', link: '/docs/advanced/engineering/bundler' }"
);
config = config.replace(
  "{ text: '代码质量 & 规范', link: '/docs/advanced/engineering/code-quality' }",
  "{ text: '🔴 代码质量 & 规范', link: '/docs/advanced/engineering/code-quality' }"
);
config = config.replace(
  "{ text: '框架工程体系', link: '/docs/advanced/engineering/framework' }",
  "{ text: '🟡 框架工程体系', link: '/docs/advanced/engineering/framework' }"
);
config = config.replace(
  "{ text: '环境、配置与部署', link: '/docs/advanced/engineering/env-deploy' }",
  "{ text: '🟡 环境、配置与部署', link: '/docs/advanced/engineering/env-deploy' }"
);
config = config.replace(
  "{ text: '高级工程化方向（进阶）', link: '/docs/advanced/engineering/advanced' }",
  "{ text: '🟢 高级工程化方向', link: '/docs/advanced/engineering/advanced' }"
);

// 前端进阶其他
config = config.replace("{ text: '设计模式', link:", "{ text: '🔴 设计模式', link:");
config = config.replace("{ text: '性能优化', link:", "{ text: '🔴 性能优化', link:");
config = config.replace("{ text: '安全性', link:", "{ text: '🔴 安全性', link:");
config = config.replace("{ text: '架构设计', link:", "{ text: '🔴 架构设计', link:");
config = config.replace("{ text: '代码规范', link:", "{ text: '🟡 代码规范', link:");

// 前端应用
const appItems = [
  ['框架实战踩坑', '🔴'],
  ['状态与路由落地', '🔴'],
  ['接口与鉴权', '🔴'],
  ['样式与移动端适配', '🔴'],
  ['性能体验 checklist', '🔴'],
  ['工程协作与发布', '🔴'],
  ['安全与监控', '🔴'],
  ['业务权限与复杂表单', '🔴'],
  ['组件库与中后台表格', '🔴'],
  ['微前端与 WebView', '🟡'],
  ['测试与线上排查', '🟢'],
];
for (const [name, emoji] of appItems) {
  config = config.replace(
    `{ text: '${name}', link:`,
    `{ text: '${emoji} ${name}', link:`
  );
}

// 后端基础
const backendBase = [
  ['Java 语言基础', '🔴'],
  ['构建工具与工程结构', '🟡'],
  ['Spring / Spring Boot', '🔴'],
  ['Spring MVC 与接口设计', '🔴'],
  ['MyBatis 与数据库', '🔴'],
  ['事务与基础 SQL', '🔴'],
  ['认证授权入门', '🔴'],
  ['Redis 入门', '🔴'],
  ['日志、测试与多环境', '🟡'],
];
for (const [name, emoji] of backendBase) {
  config = config.replace(`{ text: '${name}', link:`, `{ text: '${emoji} ${name}', link:`);
}

// 后端进阶
const backendAdv = [
  ['JVM 与性能调优', '🔴'],
  ['并发编程进阶', '🔴'],
  ['缓存与高并发设计', '🔴'],
  ['数据库进阶与分库分表', '🔴'],
  ['消息队列与最终一致性', '🔴'],
  ['微服务架构', '🔴'],
  ['分布式事务与服务治理', '🟡'],
  ['安全进阶', '🟡'],
  ['容器化与部署', '🟡'],
  ['可观测性', '🟡'],
];
for (const [name, emoji] of backendAdv) {
  config = config.replace(`{ text: '${name}', link:`, `{ text: '${emoji} ${name}', link:`);
}

// 后端应用
const backendApp = [
  ['接口契约与幂等', '🔴'],
  ['事务失效与数据一致性', '🔴'],
  ['订单 / 库存 / 金额落地', '🔴'],
  ['缓存双写与热点问题', '🔴'],
  ['鉴权越权与安全实践', '🔴'],
  ['MQ 与定时任务踩坑', '🔴'],
  ['发布变更与回滚', '🔴'],
  ['排查协作与可观测落地', '🟡'],
];
for (const [name, emoji] of backendApp) {
  config = config.replace(`{ text: '${name}', link:`, `{ text: '${emoji} ${name}', link:`);
}

// AI
const aiItems = [
  ['大模型与 Prompt 基础', '🔴'],
  ['RAG 与向量检索', '🔴'],
  ['Agent 概念与范式', '🔴'],
  ['工具调用原理', '🔴'],
  ['高级 Prompt 与结构化输出', '🟡'],
  ['RAG 进阶', '🟡'],
  ['Agent 规划与反思', '🟡'],
  ['记忆系统', '🟡'],
  ['多模态能力', '🟢'],
  ['微调与对齐', '🟢'],
  ['评测与红队', '🟡'],
  ['推理加速与私有化部署', '🟢'],
];
for (const [name, emoji] of aiItems) {
  config = config.replace(`{ text: '${name}', link:`, `{ text: '${emoji} ${name}', link:`);
}

// AI Agent
const agentItems = [
  ['场景选型与产品边界', '🔴'],
  ['Agent 架构落地', '🔴'],
  ['工具设计与系统集成', '🔴'],
  ['记忆与多轮状态', '🔴'],
  ['安全与权限控制', '🔴'],
  ['可靠性：重试、熔断、人工确认', '🔴'],
  ['可观测与评测', '🔴'],
  ['成本优化与模型路由', '🔴'],
  ['多 Agent 协作实践', '🟡'],
];
for (const [name, emoji] of agentItems) {
  config = config.replace(`{ text: '${name}', link:`, `{ text: '${emoji} ${name}', link:`);
}

// Whistle 子项
config = config.replace('Whistle / Fiddler 🟢', 'Whistle / Fiddler');

fs.writeFileSync(configPath, config, 'utf8');
console.log('Config updated');
