<template> 
    <div class="app-layout"> 
    <header class="header"> 
        <div><img class="img" 
        src="../assets/logo.svg"/></div> 
        <div>My shirt shop</div> 
    </header> 
    <!-- 菜单将放在这里 --> 
    <router-view /> 
    </div> 
</template>






<style lang="stylus" scoped> 
.header { 
    .img { 
        width: 64px; 
        height: 64px; 
    } 
} 
</style>