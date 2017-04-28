<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img v-bind:src="seller.avatar" width="64" height="64"/>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}} 分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon"></span><span class="">{{ seller.supports[0].description}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default{
    props: {
      seller: {
        type: Object,
        default: function() {
          return {

          }
        }
      }
    },
    data(){
        return{
            msg:'hello vue'
        }
    },
    components:{
    }
  }


</script>

<style lang="stylus">
  @import "../../assets/stylus/mixin.styl"
  .header
    color: #ffffff
    background: rgba(0,0,0,0.6)
    .content-wrapper
      padding:24px 12px 18px 24px
      font-size 0
      .avatar
        display: inline-block
        vertical-align top
        img
          border-radius 2px
      .content
        display: inline-block
        font-size:14px
        .title
          margin: 2px 0 8px 0
          .brand
            width :30px
            height :18px;
            display inline-block
            bg-image("brand")
            background-size 30px 18px
            background-repeat no-repeat
            vertical-align middle
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold
            vertical-align middle
        .description
          margin-bottom 10px
          line-height 12px
          font-size 12px
        .support
          .icon
              display inline-block
              width 12px
              height 12px
              margin-right 4px
              background-size 12px
              background-repeat no-repeat
              bg-image('decrease_1')
              &.decrease
                bg-image('decrease_1')
          .xx
            font-size 12px
</style>
