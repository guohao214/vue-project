<template>
  <div class="header">
    <div class="back"></div>
    <div class="title-name"><slot name="title-slot"></slot></div>
    <div class="right"><slot name="right-slot"></slot></div>
  </div>
</template>

<script>

  export default{
    name: 'v-header'
  }

</script>

<style lang="stylus">
  @import "../../assets/stylus/mixin.styl"
  .header
    color: #000
    background-color white
    position fixed
    top: 0
    left 0
    width 100%
    display flex
    justify-content space-between
    align-items center
    height px2rem(60)
    font-size px2rem(30)
    padding 0 px2rem(30)
    box-sizing border-box

    &+div
      margin-top px2rem(70)

    $backWidth = 15
    .back
      position relative
      width px2rem($backWidth)
      height @width
      &:after
        content ''
        border-left:px2rem(3) #000 solid
        border-top:@border-left
        display inline-block
        position absolute
        width px2rem($backWidth)
        height @width
        transform rotate(-45deg)
        top px2rem(-7)
        left 0

    .title-name
      flex 1
      text-align center
      font-weight bold


</style>
