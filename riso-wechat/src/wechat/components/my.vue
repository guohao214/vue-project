<template>
  <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'my'
}
</script>

<style lang="stylus">
  .container
    height 100%
</style>
