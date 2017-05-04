<template>
  <div>
      <label>电话号码</label>

    <div class="ip-wrapper">
      <span class="phone-prefix">+86</span>
      <span class="input">
      <input type="tel" maxlength="11" @keyup="inputTel" ref="inputTel" v-bind:value="phone">
    </span>

      <span class="clear-input" @click="clearInput" v-if="showClearInput"></span>
    </div>
  </div>
</template>

<style lang="stylus">
  @import "../../assets/stylus/mixin.styl";

  label
    font-size px2rem(24)
    color #999
    margin 0
    margin-left px2rem(30)

  .ip-wrapper
    display flex
    justify-content space-between
    align-items flex-end
    margin 0 px2rem(30)
    border-bottom px2rem(4) solid #D3C90A
    padding-bottom px2rem(10)
    span
      display inline-block

      &.phone-prefix
        font-size px2rem(40)
        font-weight 200
        color: #333
        margin-right px2rem(30)
        vertical-align bottom

      &.input
        flex 1
        input
          width 100%
          font-size px2rem(32)
          border 0
      &.clear-input
        width px2rem(45)
        height px2rem(45)
        background-color #ccc
        border-radius 50%
        position relative
        &:after
          content ''
          height px2rem(3)
          width px2rem(25)
          position absolute
          background-color white
          left: px2rem(9)
          top: px2rem(18)
          transform: rotate(135deg)
        &:before
          content ''
          height px2rem(3)
          width px2rem(25)
          position absolute
          background-color white
          left: px2rem(9)
          top: px2rem(18)
          transform: rotate(45deg);
</style>

<script>
  export default {
    name: 'inputPhone',
    props:['phone'],
    data() {
        return {
          showClearInput: false
        }
    },
    watch: {
      phone: function (val) {
        if (val != '')
            this.showClearInput = true
      }
    },
    methods: {
      clearInput: function () {
        this.showClearInput = false
        this.$refs.inputTel.value = ''
        this.$emit('changePhone', '')
      },
      inputTel: function (e) {
        this.$emit('changePhone', e.target.value)
      }
    }
  }
</script>
