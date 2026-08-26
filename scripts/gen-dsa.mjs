import fs from 'fs';
import path from 'path';

const base = 'e:/my-notes/docs/computer-system/dsa';

function write(sub, slug, title, desc) {
  const file = path.join(base, sub, `${slug}.md`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `# ${title}\n\n${desc}\n`, 'utf8');
}

write('1-complexity', 'time-complexity', '时间复杂度', 'O(1) / O(log n) / O(n) / O(n log n) / O(n²) 等常见复杂度等级。');
write('1-complexity', 'space-complexity', '空间复杂度', '空间复杂度的定义与分析方法。');
write('1-complexity', 'best-worst-average', '最好、最坏、平均复杂度', '三种复杂度场景的区别与适用分析。');
write('1-complexity', 'frontend-scenarios', '前端场景：性能判断', '判断代码性能、循环嵌套、数组方法性能分析等前端实践。');

write('2-structures/1-array', 'basics', '数组基础特性', '数组的基本特性与内存布局直观理解。');
write('2-structures/1-array', 'js-api', 'JS 数组 API 底层特性', 'JavaScript 数组常用 API 的底层行为与性能特点。');
write('2-structures/1-array', 'scenarios', '场景：数组扁平化、去重', '数组扁平化、去重等前端高频场景。');
write('2-structures/2-linked-list', 'singly', '单向链表', '单向链表的定义与基本操作。');
write('2-structures/2-linked-list', 'doubly', '双向链表', '双向链表的定义与基本操作。');
write('2-structures/2-linked-list', 'vs-array', '链表和数组对比', '增删查性能差异与选型思路。');
write('2-structures/3-stack', 'lifo', '后进先出 LIFO 特性', '栈的基本特性与实现思路。');
write('2-structures/3-stack', 'frontend-scenarios', '前端场景：调用栈、括号匹配', '函数调用栈、表达式求值、括号匹配等场景。');
write('2-structures/4-queue', 'fifo', '先进先出 FIFO', '队列的基本特性。');
write('2-structures/4-queue', 'basic-queue', '普通队列', '普通队列的实现与应用。');
write('2-structures/4-queue', 'priority-queue', '优先队列', '优先队列的概念与使用场景。');
write('2-structures/4-queue', 'frontend-scenarios', '前端场景：事件循环任务队列', '事件循环与任务队列的关系。');
write('2-structures/5-hash-table', 'hash-basics', '哈希原理、哈希冲突', '哈希函数、冲突处理的基本概念。');
write('2-structures/5-hash-table', 'js-map-set', 'JS Object / Map / Set 底层哈希表', 'JavaScript 中 Object、Map、Set 与哈希表的关系。');
write('2-structures/5-hash-table', 'scenarios', '场景：数组去重、两数之和', '哈希表在前端业务中的典型应用。');
write('2-structures/6-tree', 'basics', '树基础概念', '节点、父子关系、深度等基本概念。');
write('2-structures/6-tree/traversal', 'dfs', '二叉树遍历：前序 / 中序 / 后序', '深度优先遍历的三种顺序。');
write('2-structures/6-tree/traversal', 'bfs', '层序遍历 BFS', '广度优先层序遍历。');
write('2-structures/6-tree', 'frontend-trees', '前端业务树', 'DOM 树、虚拟 DOM、菜单树、组织树等前端场景。');
write('2-structures/6-tree', 'tree-operations', '树的操作', '树结构扁平化、树筛选、树查找等操作。');

write('3-algorithms/1-recursion', 'basics', '递归思想、终止条件', '递归的基本思想与终止条件设计。');
write('3-algorithms/1-recursion', 'stack-overflow', '递归爆栈问题', '递归深度过大导致栈溢出的原因与应对。');
write('3-algorithms/1-recursion', 'tree-traversal', '前端场景：遍历树结构', '用递归遍历菜单树、组织树等结构。');
write('3-algorithms/1-recursion', 'tail-recursion', '尾递归 🟡', '尾递归的概念，了解即可。');
write('3-algorithms/2-search', 'linear', '顺序查找', '线性顺序查找算法。');
write('3-algorithms/2-search', 'binary', '二分查找', '二分查找原理与实现，高频面试题。');
write('3-algorithms/3-sort', 'bubble', '冒泡排序', '冒泡排序原理与复杂度分析。');
write('3-algorithms/3-sort', 'selection', '选择排序', '选择排序原理与复杂度分析。');
write('3-algorithms/3-sort', 'insertion', '插入排序', '插入排序原理与复杂度分析。');
write('3-algorithms/3-sort', 'quick', '快速排序', '快速排序原理与复杂度分析。');
write('3-algorithms/3-sort', 'merge', '归并排序', '归并排序原理与复杂度分析。');
write('3-algorithms/3-sort', 'js-sort', 'JS sort 底层原理', 'JavaScript Array.sort 的底层实现与注意事项。');

write('4-business-problems', 'array', '数组类', '扁平化、去重、交集差集、最大子数组等。');
write('4-business-problems', 'tree', '树类', '树遍历、树转数组、数组转树、树过滤等。');
write('4-business-problems', 'string', '字符串类', '回文、字符串匹配等。');
write('4-business-problems', 'stack', '栈应用：有效括号', '有效括号等栈经典题。');
write('4-business-problems', 'dp-intro', '动态规划简单入门 🟡', '动态规划入门了解，前端不深挖。');

write('5-optional', 'balanced-trees', '红黑树、AVL 树 🟡', '平衡二叉树概念，了解即可。');
write('5-optional', 'graph', '图、图的遍历 🟡', '图的基本概念与遍历，了解即可。');
write('5-optional', 'hard-dp-greedy', '复杂动态规划、贪心难题 🟡', '复杂 DP 与贪心，前端不建议深挖。');
write('5-optional', 'hard-leetcode', '大量困难 LeetCode 🟡', '困难题刷题策略：前端不必盲目追求。');

write('6-learning-tips', 'structure-first', '先学数据结构，再刷算法', '每一个结构结合 JS 手写简易实现。');
write('6-learning-tips', 'business-first', '优先刷和业务相关题目', '不要盲目刷几百道算法题。');
write('6-learning-tips', 'goals', '学习目标', '能看懂、能手写基础版本、能分析复杂度、解决业务问题。');

fs.writeFileSync(
  path.join(base, 'index.md'),
  `# 数据结构与算法\n\n高级前端方向的数据结构与算法学习路线。\n\n> **优先级说明：** 🔴 核心必学 · 🟡 了解即可 · 📌 学习建议\n`,
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
