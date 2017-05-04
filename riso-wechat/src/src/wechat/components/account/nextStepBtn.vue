<template>
  <div v-bind:class="{'next-btn': true, 'active': isValid}" @click="clickBtn">

  </div>
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

    &.active
      background-color rgba(33,33,33,1)
</style>

<script>
    export default {
        name: 'nextBtn',
        props:['isValid'],
        created: function () {
        },
        methods: {
          clickBtn: function () {
                if (!this.isValid)
                    return;

                this.$emit('nextBtnClick')
            }
        }
    }
</script>
