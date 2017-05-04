<template>
  <div>
    <label>我们向 {{ phone }} 输入了一个验证码。请输入该验证码</label>

    <div class="ip-wrapper">
      <span class="input">
      <input type="tel" maxlength="4">
    </span>

      <span class="count-down" @click="sendCode" v-if="currentCountTimeSec == countTimeSec">
       发送验证码
      </span>
      <span class="count-down active" v-else>
        {{ currentCountTimeSec }} 后重新发送
      </span>
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

      &.input
        flex 1
        input
          width 100%
          font-size px2rem(32)
          border 0
          letter-spacing px2rem(2)
      &.count-down
        font-size px2rem(28)
        color #425566
        position relative
        font-weight bold
        &.active
          color: #ccc


</style>

<script>
  export default {
    name: 'sendAuthCode',
//    props: ['phone'],
    data() {
      return {
        countTimeSec: 30,
        currentCountTimeSec: 0,
        phone: 13524286564
      }
    },
    created: function () {
      this.currentCountTimeSec = this.countTimeSec
    },
    methods: {
      sendCode: function () {
        var $countDown = setInterval(() => {
          this.currentCountTimeSec--;
          if (this.currentCountTimeSec <= 0) {
            clearInterval($countDown)
            this.currentCountTimeSec = this.countTimeSec
          }
        }, 1000)
      }
    }
  }
</script>
