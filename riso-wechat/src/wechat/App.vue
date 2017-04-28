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

body

  #app
    font-family: Helvetica, Tahoma, Arial, STXihei, SimSun, Heiti, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
</style>
