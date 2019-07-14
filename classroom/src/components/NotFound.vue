<template>
  <main class="not-found">
    <h3>404-没有这个页面啊……</h3>
    <span>
        <router-link :to="{name:'Layout'}">
          <el-button size="mini" type="primary">返回主页</el-button>
      </router-link>
    </span>


  </main>
</template> 
<style lang="scss" scoped>
    main.not-found {
        h3,
        span {
            display: inline-block;
        }
        width: 400px;
        height: 400px;
        margin: 0 auto;

    }


</style>
