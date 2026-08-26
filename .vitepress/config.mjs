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
            { text: 'TypeScript 入门', link: '/docs/base/typescript' }
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
                { text: '模块化（基础前提）', link: '/docs/advanced/engineering/module' },
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
