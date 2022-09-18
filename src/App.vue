<template>
  <TimeTracker/>
</template>

<script>
import TimeTracker from './components/TimeTracker.vue'

export default {
  name: 'App',
  components: {
    TimeTracker,
  
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
