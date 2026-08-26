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
            { text: '概述', link: '/docs/base/' }
          ]
        }
      ],
      '/docs/advanced/': [
        {
          text: '前端进阶',
          items: [
            { text: '概述', link: '/docs/advanced/' }
          ]
        }
      ],
      '/docs/application/': [
        {
          text: '前端应用',
          items: [
            { text: '概述', link: '/docs/application/' }
          ]
        }
      ],
      '/docs/backend/': [
        {
          text: '后端基础',
          items: [
            { text: '概述', link: '/docs/backend/' }
          ]
        }
      ],
      '/docs/backend-advanced/': [
        {
          text: '后端进阶',
          items: [
            { text: '概述', link: '/docs/backend-advanced/' }
          ]
        }
      ],
      '/docs/backend-application/': [
        {
          text: '后端应用',
          items: [
            { text: '概述', link: '/docs/backend-application/' }
          ]
        }
      ],
      '/docs/computer-system/': [
        {
          text: '计算机体系知识',
          items: [
            { text: '概述', link: '/docs/computer-system/' }
          ]
        }
      ],
      '/docs/ai/': [
        {
          text: 'AI',
          items: [
            { text: '概述', link: '/docs/ai/' }
          ]
        }
      ],
      '/docs/ai-agent/': [
        {
          text: 'AI Agent 应用',
          items: [
            { text: '概述', link: '/docs/ai-agent/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
