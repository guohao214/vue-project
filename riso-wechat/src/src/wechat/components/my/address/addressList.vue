<template>
    <div class="address-list">
        <div class="address-title">
          <span>{{ title }}</span>
          <slot name=""></slot>

        </div>

        <div class="items">
          <div class="item" v-for="item in addressItems">
            <div class="name  ">{{ item.name }}</div>
          </div>
        </div>
    </div>
</template>

<style lang="stylus">
  @import "../../../assets/stylus/mixin.styl"

  .address-list
    padding px2rem(30)
    .address-title
      font-size px2rem(25)
      padding-top px2rem(30)
      padding-bottom px2rem(30)

    .items
      .item
        .name
          font-size px2rem(30)
          font-weight bold
</style>

<script>
  export default {
    name: 'addressList',
    props:['title', 'addressItems']
  }
</script>
