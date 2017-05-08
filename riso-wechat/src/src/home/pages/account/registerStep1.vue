<template>
  <div>
    <h3>请输入您的手机号</h3>
    <phone-input :phone="phone"></phone-input>
    <next-step-btn @nextBtnClick="nextStep" :isActive="isValidPhone"></next-step-btn>
  </div>
</template>

<style lang="stylus">
  @import "../../assets/stylus/mixin.styl";
  h3
    margin-left px2rem(30)

</style>

<script>
  import Vue from 'vue'
  import PhoneInput from '@/components/account/phoneInput'
  import NextStepBtn from "../../components/account/nextStepBtn";

  Vue.component(PhoneInput.name, PhoneInput);
  Vue.component(NextStepBtn.name, NextStepBtn);

  import {mapState} from 'vuex'

  export default {
    name: 'registerStep1',
    data(){
        return {
        }
    },
    created: function () {
    },
    watch: {
    },
    computed: {
      ...mapState({
        phone: state => state.account.phone,
        isValidPhone: state => state.account.phone.length === 11
      }),
    },
    methods: {
      nextStep: function () {
        this.$router.push('/account/register/step2')
      }
    }
  }
</script>
