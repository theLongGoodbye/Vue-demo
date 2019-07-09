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

`自定义 v-model，p139`

```
动态路由
/tickets/:id         /tickets/abc      $route.params 的值 { id: 'abc' } 
/tickets/:id/comments/:comId            /tickets/abc/comments/42          { id: 'abc', comId: '42' }

路由配置文件
const routes = [ 
 // ... 
 { path: '/tickets', component: TicketsLayout, 
 meta: { private: true }, children: [ 
 // ... 
 { path: ':id', name: 'ticket', component: Ticket }, 
 ] }, 
]

组件模板
<router-link :to="{name:'ticket', params: { id: ticket._id }}"> 
{{ ticket.title }}</router-link>
```

```
点返回回到滚动位置
const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
    },
})
```
