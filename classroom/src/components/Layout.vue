<template>
    <div>
        <classroomHeader></classroomHeader>
        <transition name="fade" mode="out-in">
        <router-view />
        </transition>
    </div>

</template>

<script>
import classroomHeader from "./classroomHeader";
export default {
  components: { classroomHeader }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .15s linear;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }


</style>
