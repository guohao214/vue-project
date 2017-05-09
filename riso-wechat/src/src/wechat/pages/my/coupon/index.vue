<template>
  <div class="cl-list" v-if="clIsEmpty">
    <router-link to="/my/coupon/qrCode">
      <div class="cl">
        <div class="cl-left"></div>
        <div class="cl-content">
          <span class="amount-info">
            <div class="amount"><i>¥</i><label class="money">200</label></div>
            <div class="info">快到期</div>
          </span>
          <span class="cl-info">
            <div class="cl-title">RISO FRESH 抵用券</div>
            <div class="cl-description">生鲜满200减60抵用券</div>
            <div class="cl-period">有效期：2016.09-21~2017.12~03</div>
          </span>
        </div>
        <div class="cl-right"></div>
      </div>
    </router-link>
      <div class="cl">
        <div class="cl-left"></div>
        <div class="cl-content">
          <span class="amount-info">
            <div class="amount"><i>¥</i><label for="" class="money">200</label></div>
          </span>
          <span class="cl-info">
            <div class="cl-title">RISO FRESH 抵用券</div>
            <div class="cl-description">生鲜满200减60抵用券</div>
            <div class="cl-period">有效期：2016.09-21~2017.12~03</div>
          </span>
        </div>
        <div class="cl-right"></div>
      </div>

      <div class="cl-divide">
        <i>5</i>
        <label>已失效的券</label>
      </div>
      <div class="cl invalid">
        <div class="cl-left"></div>
        <div class="cl-content">
          <span class="amount-info">
            <div class="amount"><i>¥</i><label class="money">200</label></div>
            <div class="info">已过期</div>
          </span>
          <span class="cl-info">
            <div class="cl-title">RISO FRESH 抵用券</div>
            <div class="cl-description">生鲜满200减60抵用券</div>
            <div class="cl-period">有效期：2016.09-21~2017.12~03</div>
          </span>
        </div>
        <div class="cl-right"></div>
      </div>

      <div class="cl-divide"><label>RISO</label></div>
  </div>
  <div class="cl-empty" v-else>
    <div class="bg"></div>
  </div>

</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'coupon',
    data () {
      return {
        msg: '22',
        clList:[{}],
        popupVisible: false
      }
    },
    methods: {
    },
    computed: {
      clIsEmpty() {
        return this.clList.length > 0 ? true : false
      }
    },
    created: function () {
      document.title = 'RISO - 优惠券';

      var requestParams = {
        memberToken: 'ef06d191f734bf29f3985d5a63e33520c183d819030076356a443d67b52c24ca',
        memberId:'100000002775003'
      }

      this.$request.post('coupon/getMemberCouponList.json', requestParams).then(function (data) {
        console.log(data)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  body
    background-color #F8F8F8;
    a
      text-decoration none
</style>

<style lang="stylus" scoped>
  @import "../../../assets/stylus/mixin.styl"

  .cl-empty
    display flex
    justify-content center
    margin-top px2rem(200)
    .bg
      width px2rem(400)
      height px2rem(267)
      bg-image('empty')

  .cl-list
    padding: px2rem(18);
    background-color #F8F8F8;
    .cl
      height: px2rem(224)
      margin: px2rem(15) 0;
      display: flex
      justify-content center
      align-items center

      .cl-left
        height: inherit;
        width: px2rem(64)
        bg-image('left-valid');
      .cl-content
        height px2rem(208);
        border-1px(rgba(7, 17, 27, 0.1))
        &:after
          box-shadow 2px 2px 3px rgba(7, 17, 27, 0.1)
        &:before
          box-shadow 2px 2px 3px rgba(7, 17, 27, 0.1)
        background-color white
        flex: 1
        position relative
        display flex
        justify-content flex-start
        align-items center
        span
          display inline-block
        .amount-info
          color: #DBD20B
          flex-basis px2rem(200)
          text-align center
          .amount
            font-size: px2rem(60)
            i
              font-size px2rem(24)
              font-style normal
              display: inline-block;
              padding: px2rem(15)
            .money
              border-bottom 5px dotted #DBD20B
          .info
            font-size px2rem(24)
            background-color: #DBD20B
            width px2rem(100)
            color white
            display inline-block
            vertical-align middle

        .cl-info
          .cl-title
            font-size px2rem(34)
            line-height px2rem(34)
            font-weight bold
            color #425566
          .cl-description, .cl-period
            font-size px2rem(24)
            line-height px2rem(34)
            color: #888888;

      .cl-right
        height inherit;
        width: px2rem(32)
        bg-image('right-valid');
      &.invalid
        .cl-left
          bg-image('left-invalid');
        .cl-content
          background-color #FAFAFA
          .cl-info
            .cl-title
              color #97A3B4
            .cl-description
              color #97A3B4
            .cl-period
              color #97A3B4
          span
          .amount-info
            color #C3CCD8
            .amount
              .money
                border 0
            .info
              color white
              background-color #CBD1D9
              vertical-align text-top

        .cl-right
          bg-image('right-invalid');

</style>

<style lang="stylus" scoped="">
  @import "../../../assets/stylus/mixin.styl"
  .cl-divide
    color #BBBBBB
    font-size px2rem(24)
    display flex
    justify-content center
    align-items center
    margin px2rem(30) 0
    position relative
    i
      position absolute
      font-style normal
      font-size px2rem(64)
      left 15%
      top px2rem(-30)
      color #dbd20b
      border-bottom 5px dotted #dbd20b;
      font-weight 300
    label
      display: table;
      width: px2rem(400)
      line-height: px2rem(32)
      white-space: nowrap;
      border-spacing: px2rem(10) 0;
      text-align center
      &:before
        display: table-cell;
        content: '';
        width: 35%;
        background: linear-gradient(#D3D2C6,#D3D2C6) repeat-x left center;
        background-size: 1px 1px;
      &:after
        display: table-cell;
        content: '';
        width: 35%;
        background: linear-gradient(#D3D2C6,#D3D2C6) repeat-x left center;
        background-size: 1px 1px;
</style>
