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
    position relative

  /*.fade-enter-active,.fade-leave-active*/
    /*transition: opacity 0.5s*/

  /*.fade-enter, .fade-leave*/
    /*opacity: 0*/

</style>
