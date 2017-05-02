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
</style>
