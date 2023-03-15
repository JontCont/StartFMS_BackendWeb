<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HeaderPage></HeaderPage>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderPage from './components/@Shared/Header/HeaderPage.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderPage
  }
}
</script>

<style>
</style>
