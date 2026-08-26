import fs from 'fs';
import path from 'path';

const base = 'e:/my-notes/docs/computer-system/os';

const pages = [
  ['index.md', '操作系统', '操作系统学习路线（高级前端视角）：进程线程、内存、IO 异步，以及与网络、浏览器的关系。'],
  ['1-process-thread/process-basics.md', '进程基础', '进程的概念、PCB、进程状态与切换。'],
  ['1-process-thread/browser-multi-process.md', '浏览器多进程架构', '浏览器多进程模型：Browser、Renderer、GPU、Network 等进程。'],
  ['1-process-thread/thread-basics.md', '线程基础', '线程概念、用户态与内核态线程。'],
  ['1-process-thread/render-threads.md', '渲染进程内五大线程', '主线程、合成线程、光栅线程等渲染进程内线程分工。'],
  ['1-process-thread/concurrency-parallelism.md', '并发、并行概念', '并发与并行的区别及在前端中的体现。'],
  ['2-memory/stack.md', '栈', '栈内存的特点、函数调用栈与作用域。'],
  ['2-memory/heap.md', '堆', '堆内存的特点与动态分配。'],
  ['2-memory/v8-gc.md', 'V8 堆与 GC 基础', 'V8 堆结构、新生代/老生代与垃圾回收基础。'],
  ['3-io-async/sync-async-blocking.md', '同步/异步、阻塞/非阻塞', '同步与异步、阻塞与非阻塞的概念对比。'],
  ['3-io-async/io-multiplexing.md', 'IO 多路复用', 'select / poll / epoll 等多路复用机制。'],
  ['3-io-async/event-loop.md', '事件驱动 & Event Loop 底层', '事件驱动模型与 Event Loop 的底层原理。'],
  ['4-socket/socket.md', 'Socket 套接字', 'Socket 的概念及与计算机网络模块的衔接。'],
  ['5-port/port.md', '端口', '端口的概念、常见端口与多路复用/分用。'],
  ['6-cpu-scheduling/cpu-scheduling.md', 'CPU 时间片、进程调度', '时间片轮转、调度算法基础。'],
  ['7-fd/file-descriptor.md', '文件描述符基础', '文件描述符的概念与常见用法。'],
];

for (const [file, title, desc] of pages) {
  const full = path.join(base, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, `# ${title}\n\n${desc}\n`, 'utf8');
}

console.log('Created', pages.length, 'OS pages');
