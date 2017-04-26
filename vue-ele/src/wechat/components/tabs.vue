<template>
  <div class="tabs">
    <div class="tab-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ratings">评论</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/sellers">商家</router-link>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/mixin.styl"
  #app
    .tabs
      display:flex
      width:100%
      height:40px
      line-height:40px
      //border-bottom:1px solid rgba(7,17,27,0.1)
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex:1
        text-align:center
        & > a
          color: rgb(77, 85, 93)
          display block
          font-size 14px
          &.active
            color: rgb(240, 20, 20)

</style>
<script>
    export default{
        data(){
            return{

            }
        },
        components:{
        }
    }
</script>
