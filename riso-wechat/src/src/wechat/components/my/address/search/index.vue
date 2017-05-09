<template>
  <div class="search-input">
    <span class="search-icon"></span>
    <input type="text" placeholder="请输入您的收货地址">
  </div>
</template>

<style lang="stylus">
  @import "../../../../assets/stylus/mixin.styl"

  .search-input
    display flex
    width 100%
    box-sizing border-box
    justify-content space-between
    align-items center
    padding px2rem(15) px2rem(30)
    border-bottom px2rem(2) solid #ccc
    .search-icon
      flex-basis px2rem(32)
      width @flex-basis
      height @flex-basis
      bg-image('icon_search');
      margin-right px2rem(15)

    input
      height px2rem(50)
      flex 1
      font-size px2rem(30)
      border 0
</style>

<script>
  export default {
    name: 'search'
  }
</script>
