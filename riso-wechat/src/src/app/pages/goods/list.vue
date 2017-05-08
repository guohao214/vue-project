<template>
  <div class="goods">
      <goods-item v-for="item in goodsItems" :goods="item"></goods-item>
  </div>
</template>

<style></style>

<script>
  import Vue from 'vue'
  import Item from '@/components/goods/item'

  Vue.component(Item.name, Item)

  export default {
    name: 'goodsList',
    data() {
      return {
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

    }
  }
</script>
