<template>
    <div class="item" @click="showDetail(goods.id)">
    <div class="gd-pic">
      <img v-bind:src="goods.pic" alt="">
    </div>
    <div class="gd-info">
      <div class="gd-name">{{ goods.name }}</div>
      <div class="gd-des">{{ goods.desc }}</div>
      <div class="gd-mk">
        <i v-for="mk in goods.makers">{{ mk }}</i>
      </div>
      <div class="gd-price">
        <span class="cr-price">￥{{ goods.newPrice }}</span>
        <span class="old-price">￥{{ goods.oldPrice }}</span>
        <span class="add-cart" @click.self.stop="addToCart(goods.id, $event)">+</span>
      </div>
    </div>
    </div>
</template>

<style lang="stylus">
  @import "../../assets/stylus/mixin.styl";
  .item
    height px2rem(200)
    margin px2rem(15) px2rem(30)
    padding px2rem(15) px2rem(30)
    border-bottom 1px solid #ccc
    display flex
    justify-content space-between

    .gd-pic
      flex-basis px2rem(200)
      position relative
      img
        width 100%
        height 100%
        position absolute
        left 0
        top 0
        transition all 0.5s
    .gd-info
      flex 1
      display flex
      justify-content space-between
      align-content space-around
      flex-flow: column wrap;
      padding-left px2rem(20)
      overflow hidden
      .gd-name
        font-size px2rem(32)
        width 100%
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
      .gd-des
        font-size px2rem(24)
        width 100%
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
      .gd-mk
        font-size px2rem(24)
        i
          font-style normal
          display inline-block
          border 1px solid #ccc
          padding px2rem(5) px2rem(10)
          border-radius px2rem(5)
          margin 0 px2rem(5)
      .gd-price
        align-self flex-start
        font-size px2rem(25)
        position relative
        width 100%
        .cr-price
          font-size px2rem(35)
        .old-price
          color #ccc
          text-decoration line-through
        .add-cart
          position absolute
          right 0
          background-color darkblue
          color white
          font-size px2rem(30)
          font-weight bold
          padding px2rem(1) px2rem(20)

</style>

<script>
  export default {
    name: 'goodsItem',
    props: ['goods'],
    created: function () {


      document.addEventListener('BLBridgeReady', function () {
      })
    },
    methods: {
      init: function () {
        console.log('环境准备成功')
      },
      showDetail: function (id) {
        this.$router.push('/goods/detail/' + id)
      },

      addToCart: function (id, e) {
        window.CTJSBridge.LoadAPI('BLLogoutAPIManager', {}, {
          success: function (data) {

            console.log('success:');
          },
          fail: function (data) {
            console.log('fail:' + data);
          },
          progress: function (data) {
            console.log('progress:' + data);
          }
        })

        return;

        try {
          if (window.CTJSBridge && window.CTJSBridge.LoadMethod) {
            window.CTJSBridge.LoadMethod('RisoGoodsDetail', 'risoGoodsDetailViewController', {now: (new Date()).getTime()}, {
              success: function (data) {

                console.log('success:');
              },
              fail: function (data) {
                console.log('fail:' + data);
              },
              progress: function (data) {
                console.log('progress:' + data);
              }
            })
          } else {
            console.log('环境未准备好')
          }
          // var picNode = e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0];

          //  picNode.setAttribute('style', 'top:-2000px;left:1000px')
        } catch (e) {
          console.log('error')
        }
      }
    }
  }
</script>
