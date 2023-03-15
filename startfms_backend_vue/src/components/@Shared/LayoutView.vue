<template>
  <img alt="Vue logo" src="../../assets/logo.png">
  <HeaderPage></HeaderPage>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
  
<script>
  import HelloWorld from '../HelloWorld.vue'
  import HeaderPage from './Header/HeaderPage.vue'

  export default {
    name: 'LayoutView',
    components: {
      HelloWorld,
      HeaderPage
    }
  }
</script>
  
<style>
</style>
