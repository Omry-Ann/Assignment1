<template>
  <div id="app">
    <title>My Page</title>
    <!-- <img src="./assets/Ann.png"> -->
    <RegisterForm/>
  </div>
</template>

<script>
import RegisterForm from './components/RegisterForm.vue'

export default {
  name: 'App',
  components: {
    RegisterForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(assets/Background.svg);
  background-size: cover;
}
</style>
