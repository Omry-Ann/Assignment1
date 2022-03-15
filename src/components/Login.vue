<template>
  <div class="=login">
      <h1>Login Page</h1><br>
      <h2>Mail:</h2>
      <input v-model="fname">
      <h2>Password:</h2>
      <input v-model="pass">
      <br><br>
      <button @click="login">Login</button>
      <!-- *please enter your full name*<br><br><input v-model="fname"> -->
  </div>
</template>

<script>
import firebaseApp from "../main";
import "firebase/auth";
export default {
  data: function() {
    return {
      fname: '',
      pass: '',
      image: "fish"
    };
  },
  methods: {
    async login() {
      try{
        const val = await firebaseApp.auth().signInWithEmailAndPassword(this.fname, this.pass);
        console.log(val);
        this.$router.push(`./quiz/${this.fname}/${this.image}`);
      }
      catch(err){
        console.log(err);
        alert('Alert or Password not correct');
      }
    }
  }
}
</script>

<style>

</style>