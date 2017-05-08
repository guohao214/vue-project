<template>
  <div>
    <component :is="currentView" @nextBtnClick="next"
               @changePhoneNumber="changePhone" :phoneNumber="phone"></component>
  </div>
</template>

<style></style>

<script>
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import RegisterStep1 from './registerStep1'
  Vue.component(RegisterStep1.name, RegisterStep1);

  export default {
    name: 'register',
    data() {
      return {
        currentView: 'registerStep1'
      }
    },
    computed:mapState({
      'phone': state => state.account.phoneNumber
    }),
    methods: {
      next: function () {
        this.$router.push('/account/register/step2')
      },
      changePhone: function (newPhoneNumber) {
        this.phone = newPhoneNumber
      }
    }
  }
</script>
