<template>
  <!-- v-clock will hide everything from rendering until the whole app is ready -->
  <div class="form" v-cloak>
    <h1>{{msg}}</h1>
    <!-- horizintal line in the form -->
    <hr size="3" noshade><br>

    <h2>Full Name:</h2>
    <div v-if="emptyFname">*please enter your full name*<br><br><input v-model="fname"></div>
    <div v-else-if="fnameValidation" > <input v-model="fname" class="Valid"></div>
    <div v-else><p>*name is not valid*</p><input v-model="fname" class="NoValid"></div>

    <h2>Mail:</h2>
    <div v-if="emptyMail">*please enter your email*<br><br><input v-model="mail"></div>
    <div v-else-if="emailValidation" > <input v-model="mail" class="Valid"></div>
    <div v-else><p>*email is not valid*</p><input v-model="mail" class="NoValid"></div>

    <h2>Phone Number:</h2>
    <div v-if="emptyPhoneNumber">*please enter phone number*<br><br><input v-model="phonenum"></div>
    <div v-else-if="phonenumValidation"> <input v-model="phonenum" class="Valid"></div>
    <div v-else><p>*number is not valid*</p><input v-model="phonenum" class="NoValid"></div>
    
    <h2>Gender:</h2>
    <div v-if="genderValidation">
    <select v-model="gender" class="Valid">
      <option disabled value=""></option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Both">Both</option>
    </select></div>
    <div v-else>*gender has to be selected*<br><br>
    <select v-model="gender">
      <option disabled value=""></option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Both">Both</option>
    </select></div>

    <h2>Your Avatar:</h2>
    <label v-if="imgNoValidation">*please select an Avatar*<br><br></label>
    <label v-for="img in imgs" :key="img.src">
      <input type="radio" v-model="image" :value="img.value">
      <img :src="img.src" alt="avatar" /></label><br><br>

    <button @click.prevent="submit"> Submit</button> <br><br> 
    <hr size="3" noshade>
  
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      fname: '',
      mail: '',
      phonenum: '',
      gender: '',
      image: '',
      msg: 'Register Here',
      imgs:[
        {src: require("../assets/icons/dog.png") , value:"dog"},
        {src: require("../assets/icons/fish.png"), value:"fish"},
        {src: require("../assets/icons/owl.png"), value:"owl"}
      ]
    };
  },
  methods: {
    submit: function(){
      if(this.emailValidation && this.phonenumValidation&&
         this.fnameValidation && this.genderValidation&&
         !this.imgNoValidation)
      {
        alert('submitted');
        console.log(this.jsonOutput);
        this.cleanForm()
      }
      else{
        alert('oops');
      }
    },
    cleanForm: function(){
      this.fname = '';
      this.mail = '';
      this.phonenum = '';
      this.gender = '';
      this.image = '';
    }
  },
  computed: {
    // fnameCaps: function() {
    //   return this.fname.toUpperCase();
    fnameValidation: function(){
      if(this.fname.match(/^([a-zA-Z]{1,} )([a-zA-Z]{1,})$/))
        return true;
      else
        return false;
    },
    emailValidation: function () {
      if (this.mail.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        return true;
      }
      else{
       return false;
      }
    },
    phonenumValidation: function(){
      if (this.phonenum.match(/^\d{10}$/)) {
        return true;
      }
      return false;
    },
    genderValidation: function(){
      if(this.gender != '')
        return true;
      else
        return false;
    },
    imgNoValidation: function(){
      if(this.image == '')
        return true;
      else
        return false;
    },
    jsonOutput: function(){
      return [
        ['fname', this.fname],
        ['mail', this.mail],
        ['phonenum', this.phonenum],
        ['gender', this.gender],
        ['image', this.image]
      ];
    },
    emptyFname: function(){
      return this.fname == '';
    },
    emptyMail: function(){
      return this.mail == '';
    },
    emptyPhoneNumber: function(){
      return this.phonenum == '';
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-style: italic;
}

h1 {
  font-style: italic;
  text-decoration-line:underline;
  text-decoration-style:dotted;
}

.Valid {
  border-color:rgb(3, 245, 3);
}

.NoValid {
  border-color:red;
}
p{
  color: red;
}

[type=radio] {
  display: none;
}

[type=radio]+img {
  cursor: pointer;
}

[type=radio]:checked+img {
  outline: 2px solid rgb(8, 192, 24);
}

button {
  border:double;
  font-size:larger;
}

/* additional for the v-cloak at the beginning of the form */
[v-clock]{
  display: none;
}
</style>
