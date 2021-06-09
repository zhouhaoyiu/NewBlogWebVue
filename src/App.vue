<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Canvas from '../src/views/canvas-nest.min.js'
export default {
  name: 'App',
  components: {
    Canvas
  }
}
</script>

<style lang='less'>
canvas {
  background: transparent;
  opacity: 0.8;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
