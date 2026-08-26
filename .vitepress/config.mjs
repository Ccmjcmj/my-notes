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
      // { text: '前端基础', link: '/docs/base/index' },
      // { text: '前端进阶', link: '/advanced/index' },
      // { text: '前端应用', link: '/application/index' },
      // { text: '后端基础', link: '/backend/index' },
      // { text: '后端进阶', link: '/backend-advanced/index' },
      // { text: 'ai', link: '/ai/index' }
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
            // 以后加页面就往这里补，例如：
            // { text: 'HTML', link: '/docs/base/html' },
            // { text: 'CSS', link: '/docs/base/css' }
          ]
        }
      ],
      '/advanced/': [
        {
          text: '前端进阶',
          items: [
            { text: '概述', link: '/advanced/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
