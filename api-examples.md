# API 运行时示例

本页面演示了 VitePress 提供的一些运行时 API 的使用方法。

主要 `useData()` API 可用于访问当前页面的站点、主题和页面数据。它在 `.md` 和 `.vue` 文件中都可以使用：

<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据

<pre>{{ theme }}</pre>

### 页面数据

<pre>{{ page }}</pre>

### 页面 Frontmatter

<pre>{{ frontmatter }}</pre>