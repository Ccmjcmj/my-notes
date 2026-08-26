import fs from 'fs';
import path from 'path';

const base = 'e:/my-notes/docs/computer-system/browser';

function write(sub, slug, title, desc) {
  const file = path.join(base, sub, `${slug}.md`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `# ${title}\n\n${desc}\n`, 'utf8');
}

// 1 浏览器整体架构
write('1-architecture', 'multi-process', '多进程模型', '主进程、渲染进程、网络进程、GPU 进程、插件进程。');
write('1-architecture', 'sandbox', '进程隔离与沙箱机制', '浏览器多进程架构下的隔离与安全沙箱。');
write('1-architecture', 'render-threads', '渲染进程内部线程', 'JS 引擎线程、GUI 渲染线程、定时器线程、网络线程、Web Worker 线程。');

// 2 页面渲染流程
write('2-rendering', 'dom-tree', 'HTML 解析 → DOM 树', 'HTML 解析构建 DOM 树的过程。');
write('2-rendering', 'cssom-tree', 'CSS 解析 → CSSOM 树', 'CSS 解析构建 CSSOM 树的过程。');
write('2-rendering', 'render-tree', '生成渲染树 Render Tree', 'DOM 与 CSSOM 合并为渲染树。');
write('2-rendering', 'reflow', '布局（回流/重排 reflow）', '布局阶段与回流重排的触发条件。');
write('2-rendering', 'repaint', '绘制（重绘 repaint）', '绘制阶段与重绘的触发条件。');
write('2-rendering', 'composite-gpu', '合成图层 composite、GPU 加速', '合成层与 GPU 加速原理。');
write('2-rendering', 'js-blocking', 'JS 阻塞渲染原理', 'JavaScript 如何阻塞 DOM 构建与渲染。');
write('2-rendering', 'css-blocking', 'CSS 阻塞渲染原理', 'CSS 如何影响渲染阻塞。');
write('2-rendering', 'script-loading', 'defer / async / type="module" 脚本加载差异', '不同 script 加载方式对渲染的影响。');

// 3 资源加载优先级
write('3-resource-loading', 'priority-rules', '浏览器资源加载优先级规则', '浏览器如何决定各类资源的加载顺序。');
write('3-resource-loading', 'preload', 'preload 预加载', '使用 preload 提前加载关键资源。');
write('3-resource-loading', 'prefetch', 'prefetch 预获取', '使用 prefetch 预获取未来可能需要的资源。');
write('3-resource-loading', 'dns-preconnect', 'dns-prefetch / preconnect', 'DNS 预解析与预连接优化。');
write('3-resource-loading', 'lazy-loading', '图片懒加载、原生 loading="lazy"', '图片懒加载与原生 lazy 属性。');

// 4 事件循环
write('4-event-loop', 'macro-micro-task', '宏任务、微任务区分', '宏任务与微任务的分类与典型 API。');
write('4-event-loop', 'browser-event-loop', '浏览器事件循环执行顺序', '浏览器中 Event Loop 的完整执行流程。');
write('4-event-loop', 'node-vs-browser', '和 Node 事件循环的差异', '浏览器与 Node.js 事件循环的对比。');

// 5 跨页面/跨上下文通信
write('5-communication', 'post-message', 'postMessage', '跨域 iframe、窗口间通信。');
write('5-communication', 'broadcast-channel', 'BroadcastChannel', '同源多标签页通信。');
write('5-communication', 'storage-events', 'LocalStorage / SessionStorage 存储事件', 'storage 事件实现跨页面通信。');
write('5-communication', 'shared-worker', 'SharedWorker', 'SharedWorker 多页面共享线程通信。');
write('5-communication', 'service-worker-relay', 'Service Worker 作为通信中转', 'Service Worker 中转消息的思路。');

// 6 页面性能指标与优化
write('6-performance', 'core-metrics', '核心指标：FP/FCP/LCP/CLS/INP', 'Web Vitals 等核心性能指标解读。');
write('6-performance', 'reflow-repaint-opt', '回流重绘优化策略', '减少回流重绘的常用优化手段。');
write('6-performance', 'long-tasks-worker', '长任务阻塞、Web Worker 解决思路', '长任务对主线程的影响与 Worker 方案。');
write('6-performance', 'main-thread-opt', '主线程优化', '主线程负载分析与优化思路。');

// 7 浏览器安全
write('7-security', 'xss', 'XSS 分类与防御', '反射型、存储型、DOM 型 XSS 及防御。');
write('7-security', 'csrf', 'CSRF 原理与防御', 'CSRF 攻击原理与 Token、SameSite 等防御。');
write('7-security', 'same-origin', '同源策略、跨域本质', '同源策略规则与跨域问题的本质。');
write('7-security', 'csp', 'CSP 内容安全策略', 'Content-Security-Policy 配置与作用。');

// 8 存储机制
write('8-storage', 'cookie', 'Cookie', 'Cookie 属性、作用域、HttpOnly、SameSite。');
write('8-storage', 'web-storage', 'localStorage / sessionStorage', 'Web Storage API 的使用与差异。');
write('8-storage', 'indexeddb', 'IndexedDB 基础', 'IndexedDB 结构化存储入门。');

// 拓展了解
write('9-optional/1-v8', 'jit-pipeline', '解析、Ignition 解释器、TurboFan 编译器（JIT）', 'V8 解析与 JIT 编译流水线。');
write('9-optional/1-v8', 'gc', 'GC 垃圾回收机制（新生代/老生代）', 'V8 分代垃圾回收机制概览。');
write('9-optional/2-rendering', 'layers-will-change', '图层划分规则、will-change', '合成层划分与 will-change 提示。');
write('9-optional/2-rendering', 'compositor-thread', '合成线程原理', 'Compositor Thread 的工作机制。');
write('9-optional/2-rendering', 'virtual-dom', '虚拟 DOM 和浏览器原生渲染的关系', '框架虚拟 DOM 与浏览器渲染的衔接。');
write('9-optional/3-network', 'fetch-xhr', 'Fetch、XMLHttpRequest', '浏览器网络请求 API 对比。');
write('9-optional/3-network', 'websocket', 'WebSocket', 'WebSocket 全双工通信基础。');
write('9-optional/3-network', 'service-worker-cache', 'Service Worker 基础、离线缓存', 'Service Worker 与离线缓存策略。');
write('9-optional/4-apis', 'raf', 'requestAnimationFrame', 'rAF 与渲染帧同步。');
write('9-optional/4-apis', 'mutation-observer', 'MutationObserver', 'DOM 变更监听 API。');
write('9-optional/4-apis', 'resize-observer', 'ResizeObserver', '元素尺寸变化监听 API。');

// 可跳过
write('10-skip', 'kernel-source', '浏览器内核源码细节', 'Chromium 等内核源码级细节，前端可跳过。');
write('10-skip', 'media-codec', '音频/视频底层编解码', '媒体编解码底层原理，前端可跳过。');
write('10-skip', 'webgl-pipeline', '复杂 WebGL 底层渲染管线', 'WebGL 渲染管线细节，前端可跳过。');
write('10-skip', 'plugin-dev', '浏览器插件开发', '浏览器扩展/插件开发，前端可跳过。');

fs.writeFileSync(
  path.join(base, 'index.md'),
  `# 浏览器专项（前端专属）\n\n高级前端方向的浏览器底层原理学习路线。\n\n> **优先级说明：** 🔴 核心必学 · 🟡 拓展了解 · 🟢 可跳过\n`,
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
