<template>
  <classroomHeader></classroomHeader>
  <router-view />
</template>

<script>
import classroomHeader from "./classroomHeader";
export default {
  components: { classroomHeader }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
