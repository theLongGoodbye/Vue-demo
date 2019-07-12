<template>
  <header>
    <div class="header-left">
      <a>classroom</a>
    </div>
    <div class="header-right">
      <a>注册</a>
      <a>登录</a>
    </div>
  </header>
</template>



<style lang="scss" scoped>
header {
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  .header-left {
    color: #409eff;
    margin-left: 100px;
    font-weight: 600;
  }
  .header-right {
    margin-right: 100px;
    a {
      color: #1989fa;
      opacity: 0.5;
      text-decoration: none;
      cursor: pointer;
      margin-right: 50px;
    }
    a:hover {
      opacity: 1;
    }
  }
}
</style>
