<template>
  <nav class="menu">
    <router-link :to="{ name:'home' }" exact>Home</router-link>
    <router-link :to="{ name:'faq' }">FAQ</router-link>
    <router-link :to="{ name:'tickets'}">Support tickets</router-link>
    <div class="spacer"></div>
    <template v-if="$state.username">
      <a>{{ $state.username }}</a>
      <a @click="logout">Logout</a>
    </template>
    <router-link v-else :to="{name:'login'}">Login</router-link>
  </nav>
</template>
  </nav>
  
</template>

<script>
const log = console.log.bind(console);
import state from "../plugins/state";
export default {
  methods: {
    logout() {
      this.$state.username = null;
    }
  }
};
</script>



<style lang="stylus" scoped>@import '../style/imports';

.router-link-active {
  border-bottom-color: $primary-color;
}
</style>