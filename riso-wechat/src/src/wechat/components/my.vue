<template>
  <transition name="fade">
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'my'
  }
</script>

<style lang="stylus">
  .container
    height 100%

  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
    opacity 1

  .fade-enter, .fade-leave
    opacity: 0

</style>
