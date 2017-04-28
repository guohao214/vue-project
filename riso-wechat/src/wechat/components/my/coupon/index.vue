<template>
  <div class="coupon-list">
    <div class="coupon">
      <div class="coupon-left"></div>
      <div class="coupon-content">
        <span class="amount-info">
          <div class="amount"><i>¥</i><label for="" class="money">200</label></div>
          <div class="info">快到期</div>
        </span>
        <span class="coupon-info">
          <div class="coupon-title">RISO FRESH 抵用券</div>
          <div class="coupon-description">生鲜满200减60抵用券</div>
          <div class="coupon-period">有效期：2016.09-21~2017.12~03</div>
        </span>
      </div>
      <div class="coupon-right"></div>
    </div>
    <div class="coupon">
      <div class="coupon-left"></div>
      <div class="coupon-content">
        <span class="amount-info">
          <div class="amount"><i>¥</i><label for="" class="money">200</label></div>
        </span>
        <span class="coupon-info">
          <div class="coupon-title">RISO FRESH 抵用券</div>
          <div class="coupon-description">生鲜满200减60抵用券</div>
          <div class="coupon-period">有效期：2016.09-21~2017.12~03</div>
        </span>
      </div>
      <div class="coupon-right"></div>
    </div>

    <div class="coupon-divide">
      <i>5</i>
      <label>已失效的券</label>
    </div>
    <div class="coupon invalid">
      <div class="coupon-left"></div>
      <div class="coupon-content">
        <span class="amount-info">
          <div class="amount"><i>¥</i><label class="money">200</label></div>
          <div class="info">已过期</div>
        </span>
        <span class="coupon-info">
          <div class="coupon-title">RISO FRESH 抵用券</div>
          <div class="coupon-description">生鲜满200减60抵用券</div>
          <div class="coupon-period">有效期：2016.09-21~2017.12~03</div>
        </span>
      </div>
      <div class="coupon-right"></div>
    </div>

    <div class="coupon-divide"><label>RISO</label></div>
  </div>
</template>

<script>
  export default {
    name: 'coupon',
    data () {
      return {
        msg: '22'
      }
    },
    created: function () {
      document.title = 'RISO - 优惠券'
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  body
    background-color #F8F8F8;
</style>

<style lang="stylus" scoped>
  @import "../../../assets/stylus/mixin.styl"

  .coupon-list
    padding: px2rem(18);
    background-color #F8F8F8;
    .coupon
      height: px2rem(224)
      margin: px2rem(15) 0;
      display: flex
      justify-content center
      align-items center

      .coupon-left
        height: inherit;
        width: px2rem(64)
        bg-image('left-valid');
      .coupon-content
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

        .coupon-info
          .coupon-title
            font-size px2rem(34)
            line-height px2rem(34)
            font-weight bold
            color #425566
          .coupon-description, .coupon-period
            font-size px2rem(24)
            line-height px2rem(34)
            color: #888888;

      .coupon-right
        height inherit;
        width: px2rem(32)
        bg-image('right-valid');
      &.invalid
        .coupon-left
          bg-image('left-invalid');
        .coupon-content
          background-color #FAFAFA
          .coupon-info
            .coupon-title
              color #97A3B4
            .coupon-description
              color #97A3B4
            .coupon-period
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

        .coupon-right
          bg-image('right-invalid');

</style>

<style lang="stylus" scoped="">
  @import "../../../assets/stylus/mixin.styl"
  .coupon-divide
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
