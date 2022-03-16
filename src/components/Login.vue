<template>
  <div class="=login">
      <h1>Login Page</h1><br>
      <h2>Mail:</h2>
      <input v-model="fname">
      <h2>Password:</h2>
      <input v-model="pass">
      <br><br>
      <button @click="login">Login</button> or
      <button @click="googleLogin">Login with Google</button>
      <!-- *please enter your full name*<br><br><input v-model="fname"> -->
  </div>
</template>

<script>
// import firebaseApp from "../main";
import firebase from 'firebase';
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
        const val = await firebase.auth().signInWithEmailAndPassword(this.fname, this.pass);
        console.log(val);
        this.$router.push(`./quiz/${this.fname}/${this.image}`);
      }
      catch(err){
        console.log(err);
        alert('Alert or Password not correct');
      }
    },
    googleLogin(){
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then((data) => {
        console.log(data.user.email);
        this.$router.push(`./quiz/${data.user.email}/${this.image}`);
        })
      .catch((err)=>console.log(err));
    }
  }
}
</script>

<style>

</style>