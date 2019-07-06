# Vue-demo
用 vue 实现的 6 个项目

markdown笔记本: https://thelonggoodbye.github.io/Vue-demo/1-markdown笔记本


> input 事件
```
<input @input="update"/>


methods: {
    update(event) {
      console.log(event.currentTarget.value);
    }
}
```

**自定义 v-model，p139**
