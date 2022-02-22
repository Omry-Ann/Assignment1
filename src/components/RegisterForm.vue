<template>
  <div class="form" v-cloak >
    <h1>{{ msg}}</h1>
    <!-- horizintal line in the form -->
    <hr size="3" noshade><br>
    <h2>Full Name:</h2>
    <div v-if="fnameValidation" > <input v-model="fname" class="Valid"></div>
    <div v-else>*name is not valid*<br><input v-model="fname" class="NoValid"></div>
    <h2>Mail:</h2>
    <div v-if="emailValidation" > <input v-model="mail" class="Valid"></div>
    <div v-else>*email is not valid*<br><input v-model="mail" class="NoValid"></div>
    <h2>Phone Number:</h2>
    <div v-if="phonenumValidation"> <input v-model="phonenum" class="Valid"></div>
    <div v-else>*number is not valid*<br><input v-model="phonenum" class="NoValid"></div>
    <h2>Gender:</h2>
    <div v-if="genderValidation">
    <select v-model="gender" class="Valid">
      <option disabled value=""></option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Both">Both</option>
    </select></div>
    <div v-else>*gender has to be selected*<br>
    <select v-model="gender" class="NoValid">
      <option disabled value=""></option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Both">Both</option>
    </select></div>
    <h2>Your Avatar:</h2>
    <label v-if="imgNoValidation">*please select an Avatar*<br></label>
    <!-- @TODO : v-for -->
    <label v-for="img in imgs" :key="img.src">
      <input type="radio" v-model="image" :value="img.value">
      <img :src="img.src" alt="avatar" /></label>
    
   <span>{{image}}</span>
    <!-- <label for="image">
      <label><input type="radio"  disabled value="" v-model="image"></label>
      <label><input type="radio"  name="image" value="dog" v-model="image">
      <img src="./icons/dog.png" alt="dog"></label>
      <label><input type="radio"  name="image" value="fish" v-model="image">
      <img src="./icons/fish.png" alt="fish"></label>
      <label><input type="radio"  name="image" value="owl" v-model="image">
      <img src="./icons/owl.png" alt="owl"></label> -->
    <!-- </label> <br><br> -->
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
        {src: "/icons/owl.png" , value:"dog"},
        {src: "./icons/dog.png", value:"fish"},
        {src: "./icons/fish.png", value:"owl"}
      ]
    };
  },
  methods: {
    submit: function(){
      if(this.emailValidation && this.phonenumValidation&&
         this.fnameValidation && this.genderValidation&&
         !this.imgNoValidation
      ){
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
    fnameCaps: function() {
      return this.fname.toUpperCase();
    },
    mailCaps: function(){
      return this.mail.toUpperCase();
    },
    fnameValidation: function(){
      if(this.fname.length > 0)
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
/* note for myself: it prevents seeing all the rendered things when refresh.
v-clock will hide everything from rendering until the whole app is ready.  */
[v-clock]{
  display: none;
}
</style>
