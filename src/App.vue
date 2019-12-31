<template>
  <div id="app">
    <navlist/>
    <router-view></router-view>
  </div>
</template>

<script>
import navlist from './common/navlist'

export default {
  name: 'app',
  components: {
    navlist
  }
}
</script>

<style>
#app{
  width: 100%;
}
</style>
