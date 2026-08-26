import fs from 'fs';
import path from 'path';

const base = 'e:/my-notes/docs/computer-system/computer-org';

function write(sub, slug, title, desc) {
  const file = path.join(base, sub, `${slug}.md`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `# ${title}\n\n${desc}\n`, 'utf8');
}

// 1 存储层次体系
write('1-storage', 'hierarchy', '存储器层级', '寄存器 → L1/L2/L3 缓存 → 内存 → 磁盘的存储层次体系。');
write('1-storage', 'cache', 'Cache 高速缓存原理', '缓存行、缓存命中率与局部性原理。');
write('1-storage', 'memory-cache-gap', '内存与缓存的性能差距', '内存与缓存之间的性能数量级差异。');
write('1-storage', 'frontend-v8-gc', '前端关联：V8 内存、GC、大数据渲染', 'V8 内存管理、GC 与大数据量渲染性能的关系。');

// 2 内存基础
write('2-memory', 'addressing', '寻址、字节、位、字', '寻址方式与字节、位、字的基本概念。');
write('2-memory', 'endianness', '大端 / 小端', '大端序与小端序的区别与影响。');
write('2-memory', 'virtual-physical', '虚拟内存 & 物理内存', '虚拟内存与物理内存，和进程、堆栈的关联。');

// 3 CPU
write('3-cpu', 'cores-hyperthreading', 'CPU 核心、超线程', 'CPU 核心数与超线程的基本概念。');
write('3-cpu', 'instructions', '指令、指令集', '机器指令与指令集架构入门。');
write('3-cpu', 'parallel-concurrency', '并行与并发', '并行与并发的区别，和浏览器多进程、Web Worker 的关联。');

// 4 I/O
write('4-io', 'io-basics', 'I/O 基本概念', '输入输出的基本概念与分类。');
write('4-io', 'interrupt', '中断', '中断机制，操作系统 IO 多路复用的硬件基础。');

// 拓展了解
write('5-optional', 'bus', '总线基础概念', '总线的基本概念，了解即可。');
write('5-optional', 'disk', '磁盘基础', 'SSD / HDD 性能差异与存储特点。');
write('5-optional', 'ieee754', '浮点数存储 IEEE754 ⭐', 'IEEE754 浮点数存储，JS 0.1+0.2 问题的根源。');

// 可跳过
write('6-skip', 'alu', '运算器、ALU 细节', '算术逻辑单元的细节，前端可跳过。');
write('6-skip', 'pipeline', '控制器、指令流水线、分支预测', '流水线与分支预测细节，前端可跳过。');
write('6-skip', 'gates', '硬件电路、门电路', '门电路与硬件电路，前端可跳过。');
write('6-skip', 'assembly', '汇编语言', '汇编语言入门，前端可跳过。');
write('6-skip', 'hardware-timing', '各类硬件接口时序', '硬件接口时序细节，前端可跳过。');

fs.writeFileSync(
  path.join(base, 'index.md'),
  `# 计算机组成 + 程序底层\n\n高级前端方向的计算机组成原理学习路线。\n\n> **优先级说明：** 🔴 核心必学 · 🟡 拓展了解 · 🟢 可跳过\n`,
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
