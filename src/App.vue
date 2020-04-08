<template>
  <div id="app">
    <card-list/>
  </div>
</template>

<script>
import CardList from './components/CardList.vue'

export default {
  name: 'App',
  components: {
    CardList
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  min-width 320px
</style>
