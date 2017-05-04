<template>
  <div>
    <h3>请输入您的手机号</h3>
    <input-phone :phone="phoneNumber" @changePhone="changePhoneNumber"></input-phone>
    <next-btn @nextBtnClick="next" :isValid="phoneNumber.length == 11"></next-btn>
    <send-auth-code @nextBtnClick="next" :isValid="phoneNumber.length == 11"></send-auth-code>
  </div>
</template>

<style></style>

<script>
  import Vue from 'vue'
  import inputPhone from '@/components/account/inputPhoneNumber'
  import nextBtn from '@/components/account/nextStepBtn'
  import sendAuthCode from '@/components/account/sendAuthCode'

  Vue.component(inputPhone.name, inputPhone);
  Vue.component(nextBtn.name, nextBtn);
  Vue.component(sendAuthCode.name, sendAuthCode);

  export default {
    name: 'registerStep1',
    props: ['phoneNumber'],
    created: function () {
    },
    methods: {
      next: function () {
        this.$emit('nextBtnClick')
      },
      changePhoneNumber: function (newPhoneNumber) {
        this.$emit('changePhoneNumber', newPhoneNumber)
      }
    }
  }
</script>
