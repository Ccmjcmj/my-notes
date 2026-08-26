# Markdown 示例

本页面演示了 VitePress 提供的一些内置 Markdown 扩展。

## 语法高亮

VitePress 提供由 [Shiki](https://github.com/shikijs/shiki) 驱动的语法高亮，并支持行高亮等额外功能：

**输入**

```js{4}
export default {
  data() {
    return {
      msg: '高亮行！'
    }
  }
}