<template>
  <header>
    <div class="header-left">
      <a>classroom</a>
    </div>
    <div>
      <el-input v-model="input" size="small" placeholder="搜索学习摘要内容"></el-input>
    </div>
    <div class="header-right">
      <a v-if="state.username">{{state.username}}</a>
      <a v-else>
        <router-link to="login">登录/注册</router-link>
      </a>

      <a>
        <router-link to="bookroom">图书室</router-link>
      </a>
      <a>
        <router-link to="plan">个人年度计划</router-link>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      state: this.$state
    };
  }
};
</script>


<style lang="scss" scoped>
header {
  width: 1140px;
  padding: 0;
  margin: 0 auto;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 2px -2px rgba(0, 21, 41, 0.12);
  .header-left {
    color: #409eff;
    margin-left: 50px;
    font-weight: 600;
  }
  .header-right {
    a {
      color: #1989fa;
      opacity: 0.8;
      text-decoration: none;
      cursor: pointer;
      margin-right: 50px;

      .router-link-active {
        border-bottom: 2px solid #1989fa;
        padding-bottom: 5px;
      }
    }
    a:hover {
      opacity: 1;
    }
  }
  .el-input {
    width: 280px;
  }
}
</style>
