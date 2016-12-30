<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <hello2></hello2>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Hello2 from './components/Hello2'

export default {
  name: 'app',
  components: {
    Hello,  Hello2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
