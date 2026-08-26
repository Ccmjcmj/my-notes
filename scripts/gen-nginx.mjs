import fs from 'fs';
import path from 'path';

const base = 'e:/my-notes/docs/computer-system/nginx';

function write(sub, slug, title, desc) {
  const file = path.join(base, sub, `${slug}.md`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `# ${title}\n\n${desc}\n`, 'utf8');
}

// 1 Nginx 基础概念
write('1-basics', 'forward-reverse-proxy', '正向代理 vs 反向代理 ⭐', '正向代理与反向代理的区别，前端高频考点。');
write('1-basics', 'core-roles', 'Nginx 核心作用', '静态服务器、反向代理、负载均衡、缓存、压缩。');
write('1-basics', 'master-worker', '核心组成：master 进程 + worker 进程模型', 'Nginx master/worker 进程模型。');
write('1-basics', 'config-structure', '配置文件整体结构', 'main / events / http / server / location 层级结构。');

// 2 Server & Location 匹配规则
write('2-server-location', 'server-block', 'server 块：虚拟主机、域名监听、端口', 'server 块配置虚拟主机与监听。');
write('2-server-location', 'location-priority', 'location 匹配优先级', '= / ^~ / ~ / ~* / 前缀匹配的优先级规则。');
write('2-server-location', 'root-vs-alias', 'root 和 alias 的区别', 'root 与 alias 路径映射差异，常见踩坑点。');
write('2-server-location', 'index-default', 'index 默认首页配置', 'index 指令与默认首页行为。');

// 3 SPA 单页应用路由支持
write('3-spa-routing', 'try-files', 'try_files 指令原理', 'try_files 如何配合 SPA 路由。');
write('3-spa-routing', 'history-404', 'history 模式 404 问题解决方案', 'Vue/React history 模式刷新 404 的 Nginx 配置。');

// 4 静态资源优化
write('4-static-optimization', 'gzip', 'gzip 压缩', 'gzip on / types / min_length 等配置。');
write('4-static-optimization', 'cache-headers', '静态缓存 Cache-Control / Expires', '强缓存与协商缓存的 Nginx 配置。');
write('4-static-optimization', 'cors', '资源跨域配置 CORS', '静态资源跨域响应头配置。');

// 5 反向代理
write('5-reverse-proxy', 'proxy-pass-basics', 'proxy_pass 基础用法', 'proxy_pass 反向代理基本配置。');
write('5-reverse-proxy', 'proxy-pass-trailing-slash', 'proxy_pass 末尾带 / 和不带 / 的区别', 'URI 转发路径差异与常见错误。');
write('5-reverse-proxy', 'proxy-headers', '代理透传请求头', 'Host、X-Real-IP、X-Forwarded-For 等请求头透传。');
write('5-reverse-proxy', 'cors-solutions', '前端解决接口跨域常用方案', 'Nginx 代理解决跨域的实战方案。');

// 6 常用状态与排查
write('6-troubleshooting', 'status-codes', '常见状态码：403、404、499、502、504', 'Nginx 常见 HTTP 状态码含义与排查方向。');
write('6-troubleshooting', 'nginx-t', 'nginx -t 校验配置', '配置语法校验与测试命令。');
write('6-troubleshooting', 'reload-restart', 'reload / restart 区别', '平滑重载与重启的差异。');

// 拓展了解
write('7-optional/1-upstream', 'basics', 'upstream 基础配置', 'upstream 块的基本写法。');
write('7-optional/1-upstream', 'round-robin-ip-hash', '默认轮询、ip_hash（会话保持）', '轮询与 ip_hash 负载策略。');
write('7-optional/1-upstream', 'weight', '权重 weight 简单了解', 'upstream weight 权重配置。');
write('7-optional/2-https', 'ssl-cert', 'ssl_certificate / ssl_certificate_key', 'HTTPS 证书与私钥配置。');
write('7-optional/2-https', 'http-to-https', 'http 自动跳转 https', 'HTTP 到 HTTPS 的重定向配置。');
write('7-optional/2-https', 'hsts', 'HSTS', 'HTTP Strict Transport Security 配置。');
write('7-optional/3-rate-limit', 'limit-req-zone', 'limit_req_zone 简单概念', '限流防爬虫的基础概念。');
write('7-optional/4-logging', 'access-log', 'access_log 访问日志', '访问日志格式与配置。');
write('7-optional/4-logging', 'error-log', 'error_log 错误日志', '错误日志级别与排查。');

// 可跳过
write('8-skip', 'epoll', 'epoll 底层事件模型细节', 'Nginx epoll 事件模型，前端可跳过。');
write('8-skip', 'source-modules', '源码、模块开发', 'Nginx 源码与模块开发，前端可跳过。');
write('8-skip', 'health-check-gray', '复杂健康检查、灰度发布、动态 upstream', '高级运维场景，前端可跳过。');
write('8-skip', 'stream-tcp', 'stream 四层代理、tcp 负载均衡', '四层代理配置，前端可跳过。');
write('8-skip', 'waf-rules', '复杂安全 WAF 规则', 'WAF 规则配置，前端可跳过。');

fs.writeFileSync(
  path.join(base, 'index.md'),
  `# Nginx（前端方向）\n\n高级前端方向的 Nginx 学习路线，聚焦静态部署、反向代理与跨域。\n\n> **优先级说明：** 🔴 核心必学 · 🟡 拓展了解 · 🟢 可跳过\n`,
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
