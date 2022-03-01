<template>

  <div>
    <h1>{{msg}}</h1>
    <hr size="3" noshade><br>

    <label v-for="dataInput in dataInputs" :key="dataInput.name">
      <h2>{{dataInput.name}}</h2>
      <div v-if="dataInput.value===''">please enter your {{dataInput.name}} <br><br><input v-model="dataInput.value"></div>
      <div v-else-if="validity(dataInput.name, dataInput.value)"> <input v-model="dataInput.value" class="Valid"></div>
      <div v-else><p>{{dataInput.name}} is not valid</p> <input v-model="dataInput.value" class="Novalid"></div>
    </label>
   
    <h2>Gender:</h2>
    <div v-if="gender!= ''">
    <select v-model="gender" class="Valid">
      <option disabled value=""></option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Both">Both</option>
    </select></div>
    <div v-else>gender has to be selected<br><br>
    <select v-model="gender">
      <option disabled value=""></option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Both">Both</option>
    </select></div>

    <h2>Your Avatar:</h2>
    <label v-if="image ===''">please select an Avatar<br><br></label>
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
      dataInputs:[
        {name:"Full Name",value:''},
        {name:"Mail",value:''},
        {name:"Phone Number",value:''}
      ],
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
    validity: function(name,value){
      if(name === 'Full Name')
        return value.match(/^([a-zA-Z]{1,} )([a-zA-Z]{1,})$/)? true :false;
      else if(name === 'Mail')
        return value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)?  true : false;
      else
        return value.match(/^\d{10}$/)? true : false;
    },
    submit: function(){
      let allvalid = this.dataInputs.reduce(
        (acc,curr)=> acc && this.validity(curr.name, curr.value), true
      ) && this.gender != '' && this.image != '';
      if(allvalid)
      {
        alert('submitted');
        console.log(this.jsonOutput);
        this.cleanForm()
      }
      else{
        alert('please fill again');
      }
    },
    cleanForm: function(){
      this.dataInputs[0].value = '';
      this.dataInputs[1].value = '';
      this.dataInputs[2].value = '';
      this.gender = '';
      this.image = '';
    }
  },
  computed: {
    
    jsonOutput: function(){
      return [
        ['fname', this.dataInputs[0].value],
        ['mail', this.dataInputs[1].value],
        ['phonenum', this.dataInputs[2].value],
        ['gender', this.gender],
        ['image', this.image]
      ];
    }
  }
}
</script>

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

</style>