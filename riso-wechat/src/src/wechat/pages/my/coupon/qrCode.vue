<template>
  <div class="qrcode">
    <mt-popup
      v-model="popupVisible"
      class="mint-popup-3"
      position="right"
      :modal="false">
      二维码啊二维码
    </mt-popup>
  </div>
</template>

<style lang="stylus" scoped="">
  @import "../../../assets/stylus/mixin.styl"

  .mint-popup-3
    width: 100%;
    height: 100%;
    background-color: #fff;
</style>

<script>
  import Vue from 'vue'
  import { Popup } from 'mint-ui'
  Vue.component(Popup.name, Popup);

    export default {
        name: 'couponQRCode',
        data() {
            return {
              popupVisible: true
            }
        },
        deactivated: function () {
          this.$destroy()
        }
    }
</script>
