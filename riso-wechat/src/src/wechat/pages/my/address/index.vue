<template>
  <div class="address">
    <v-header>
      <span slot="title-slot">选择地址</span>
      <span slot="right-slot" @click="serviceDistrict" class="service-district">服务区域</span>
    </v-header>

    <search></search>
    <address-list title="定位地址" :addressItems="locationAddress"></address-list>
    <address-list title="收货地址" :addressItems="locationAddress"></address-list>
    <address-list title="附近地址" :addressItems="locationAddress"></address-list>
  </div>

</template>

<script>
  import Vue from 'vue'
  import Header from '@/components/header/header'
  import Search from '@/components/my/address/search/index'
  import AddressList from '@/components/my/address/addressList'
  Vue.component(Header.name, Header);
  Vue.component(Search.name, Search);
  Vue.component(AddressList.name, AddressList);

  export default {
    name: 'address',
    data () {
      return {
        locationAddress:[
          {
            name: '四川南路'
          }
        ]
      }
    },
    methods: {
      serviceDistrict() {
        alert(22)
      }
    },
    computed: {

    },
    created: function () {
      document.title = 'RISO - 优惠券';
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import "../../../assets/stylus/mixin.styl"

  .service-district
    font-size px2rem(25)
</style>
