<template>
  <div class="goods">
      <goods-item v-for="item in goodsItems" :goods="item"></goods-item>
    <button  v-for="item in funs" @click="" @click="callBridge(item)">{{ item }}</button>
  </div>
</template>

<style lang="stylus">
  @import "../../assets/stylus/mixin.styl";

  button
    padding:px2rem(10) px2rem(15)
    margin:px2rem(10)
</style>

<script>
  import Vue from 'vue'
  import Item from '@/components/goods/item'
  import { RISOBridge, RISOBridgeInit } from '../../assets/bridge/RISOBridge'

  Vue.component(Item.name, Item)

  RISOBridgeInit(function () {
    alert(1111)
  })

  export default {
    name: 'goodsList',
    data() {
      return {
          funs: [],
          goodsItems: [
            {
                id: 120,
                pic: 'http://www.wangdanian.cn/Public/Uploads/images/01(37).jpg',
                name: '澳大利亚大芒果',
                desc: '新鲜澳大利亚大芒果',
                makers: ['限购2件', '新人特惠'],
                newPrice: '50',
                oldPrice: '599'
            },
            {
              id: 125,
              pic: 'http://www.wangdanian.cn/Public/Uploads/images/03(22).jpg',
              name: '七星海鲈鱼蛤蜊浓汤',
              desc: '精选半岛海鲈鱼',
              makers: ['限购3件', '特别推荐'],
              newPrice: '600',
              oldPrice: '1599'
            },
            {
              id: 150,
              pic: 'http://www.wangdanian.cn/Public/Uploads/images/05(11).jpg',
              name: '常见海鲜种类图片及名称之五：鲳鱼',
              desc: '鲳鱼的传统烹饪加工方法有糟制、晒鲞、清蒸、刨盐等，近几年也有生鱼片吃法',
              makers: ['限购5件'],
              newPrice: '90',
              oldPrice: '120'
            },
          ],
      }
    },
    created: function () {


      for(var i in RISOBridge)
        if (RISOBridge.hasOwnProperty(i))
          this.funs.push(i)
    },
    methods: {
      callBridge(funName) {
        var params = {
          now: (new Date()).getTime(),
          title: 'RISO测试'
        }

        RISOBridge[funName].call(null, params, {
          success: function (data) {
            alert('success:' + data);
          },
          fail: function (data) {
            alert('fail:' + data);
          },
          progress: function (data) {
            alert('progress:' + data);
          }
        })
      }
    }
  }
</script>
