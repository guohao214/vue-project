<template>
  <div>
    <h3>请输入6位验证码</h3>
    <send-auth-code :phone="phone" @getAuthCode="getAuthCode" :codeLength="authCodeLength"></send-auth-code>
    <next-step-btn @nextBtnClick="nextStep" :isActive="isInputAuthCode"></next-step-btn>
  </div>
</template>

<style lang="stylus">
  @import "../../assets/stylus/mixin.styl";
  h3
    margin-left px2rem(30)

</style>

<script>
  import Vue from 'vue'
  import SendAuthCode from '@/components/account/sendAuthCode'
  import NextStepBtn from "@/components/account/nextStepBtn";

  Vue.component(SendAuthCode.name, SendAuthCode);
  Vue.component(NextStepBtn.name, NextStepBtn);

  import {mapState} from 'vuex'

  export default {
    name: 'registerStep2',
    data() {
        return {
            authCode: '',
            authCodeLength: 6
        }
    },
    created: function () {
        if (!this.phone) {
            this.$router.replace('/account/register/step1')
        }
    },
    computed: {
      ...mapState({
        phone: state => state.account.phone,
      }),
      isInputAuthCode: function () {
          return this.authCode.length === this.authCodeLength
      }
    },
    methods: {
      nextStep: function () {
        alert('注册成功')
      },
      getAuthCode: function (authCode) {
        this.authCode = authCode
      }
    }
  }
</script>
