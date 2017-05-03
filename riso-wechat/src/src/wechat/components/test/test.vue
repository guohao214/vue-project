<template>
  <div class="container">
      <slot-c>
        <h1 slot="header">头部</h1>
        {{ message }}
        <h3 slot="footer">尾部</h3>
      </slot-c>
  </div>
</template>

<script>
import slotC from '@/components/test/slot'
export default {
  name: 'test',
  components: {
      slotC
  },
  data() {
      return {
          message: Date.now()
      }
  }
}
</script>

<style lang="stylus">
  .container
    height 100%
</style>
