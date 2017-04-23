<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <v-tabs></v-tabs>

    <router-view></router-view>
  </div>

</template>

<script>
import header from './components/header/header'
import tabs from './components/tabs'
import axios from 'axios'

export default {
  name: 'app',
  data: () => {
    return {
      seller: {
        brand: '屈浩的粥',
        name: '好粥（回龙观）',
        avatar: 'http://i9.pdim.gs/b2a97149ec43dfc95eb177508af29f6c.png',
        description: '屈浩的店',
        deliveryTime: '30',
        supports:[
          {type:1, id: 1, description: '口味独特的好吃的'},
          {type:2, id: 2, description: 'xx2'},
          {type:3, id: 3, description: 'xx3'},
        ]
      }
    }
  },
  created: function() {
    axios
      .get('/api/seller', {id : 1})
      .then(function() {
      })
      .catch(function(err){
        alert(err)
    })
  },
  components:{
    'v-header': header,
    'v-tabs': tabs
  }
}



</script>

<style lang="stylus">
html, body
  padding:0
  margin:0
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
</style>
