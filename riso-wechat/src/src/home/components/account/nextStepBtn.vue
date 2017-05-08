<template>
  <div v-bind:class="{'next-btn': true, 'active': isActive}" @click="nextStepClick"></div>
</template>

<style lang="stylus">
  @import "../../assets/stylus/mixin.styl";

  .next-btn
    width px2rem(120)
    height  px2rem(120)
    background-color rgba(33,33,33,0.3)
    border-radius 50%
    position absolute
    margin-top px2rem(150)
    right px2rem(30)

    &:after
      content ''
      width px2rem(25)
      height px2rem(25)
      border-top:2px solid white
      border-right:2px  solid white
      transform rotate(45deg)
      position absolute
      left px2rem(40)
      top px2rem(47.5)


    &.active
      background-color rgba(33,33,33,1)
</style>

<script>
  import { mapGetters } from 'vuex';

    export default {
        name: 'nextStepBtn',
        created: function () {
        },
        props:['isActive'],
        methods: {
          nextStepClick: function () {
                if (!this.isActive)
                    return;

                this.$emit('nextBtnClick')
            }
        }
    }
</script>
