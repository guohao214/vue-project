<template>
  <div class="register-step1">
    <v-header><span slot="title-slot">输入手机号</span></v-header>
    <div>
      <h3>请输入您的手机号</h3>
      <phone-input :phone="phone"></phone-input>
      <next-step-btn @nextBtnClick="nextStep" :isActive="isValidPhone"></next-step-btn>
    </div>
  </div>
</template>

<style lang="stylus">
  @import "../../assets/stylus/mixin.styl";
  h3
    margin-left px2rem(30)

</style>

<script>
  import Vue from 'vue'
  import Header from '@/components/header/header'
  import PhoneInput from '@/components/account/phoneInput'
  import NextStepBtn from "../../components/account/nextStepBtn";

  Vue.component(PhoneInput.name, PhoneInput);
  Vue.component(NextStepBtn.name, NextStepBtn);
  Vue.component(Header.name, Header);

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
