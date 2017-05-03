<template>
  <div>
    <header><slot name="header"></slot></header>
    <main>
      现在时间：
      <slot></slot>
    </main>
    <footer><slot name="footer"></slot></footer>
  </div>
</template>

<style></style>

<script>
    export default {
        name: 'slot-test'
    }
</script>
