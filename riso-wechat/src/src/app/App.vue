<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>

export default {
  name: 'app',
  data: () => {
    return {
    }
  },
  created: function() {
  },
  components:{
  }
}

</script>

<style lang="stylus">
@import "assets/stylus/mixin.styl"

html, body
  padding:0
  margin:0

html
  height 100%

body
  height 100%
  #app
    font-family: Helvetica, Tahoma, Arial, STXihei, SimSun, Heiti, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height 100%

.mint-toast-text
  font-size: px2rem(24) !important
  padding: px2rem(10) px2rem(15) !important
  max-width px2rem(755*0.8) !important
  display flex !important
  justify-content center
  align-items center
</style>
