<template>

  <div>
    <h1>Register Here</h1>
    <hr size="3" noshade><br>

    <label v-for="dataInput in dataInputs.slice(0,3)" :key="dataInput.name">
      <h2>{{dataInput.name}}</h2>
      <div v-if="dataInput.value===''">Enter {{dataInput.name}} <br><br></div>
      <div v-else-if="validity(dataInput.name, dataInput.value)"> 
        {{dataInput.name}} Valid :)<br><br> </div>
      <div v-else> <p>{{dataInput.name}} Invalid :(</p></div>
      <div><input v-model="dataInput.value" 
      :class="getClass(dataInput.name, dataInput.value)" ></div>   
    </label>
   
    <h2>Gender:</h2>
    <div v-if="dataInputs[3].value == ''">Select Gender</div>
    <div v-else>Valid</div><br>
    <div><select v-model="dataInputs[3].value" 
    :class="getClass(dataInputs[3].name, dataInputs[3].value)">
      <option value="M">Male</option>
      <option value="F">Female</option>
      <option value="B">Both</option>
    </select></div>

    <h2>Your Avatar:</h2>
    <label v-if="dataInputs[4].value ===''">please select an Avatar</label>
    <br><br><label v-for="img in imgs" :key="img.src">
      <input type="radio" v-model="dataInputs[4].value" :value="img.value">
      <img :src="img.src" :alt="img.value" /></label><br><br>

    <button @click="submit"> Submit</button> <br><br> 
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
        {name:"Phone Number",value:''},
        {name:"Gender",value:''},
        {name:"Avatar",value:''}
      ],
      imgs:[
        {src: require("../assets/icons/dog.png") , value:"dog"},
        {src: require("../assets/icons/fish.png"), value:"fish"},
        {src: require("../assets/icons/owl.png"), value:"owl"}
      ]
    };
  },
  methods: {
    getClass: function(name,value){
      return value==''? '': this.validity(name,value)? 'valid':'no-valid';
    },
    validity: function(name,value){
      if(name === 'Full Name')
        return value.match(/^([a-zA-Z]{1,}\s)([a-zA-Z]{1,})$/)? true :false;
      else if(name === 'Mail')
        return value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)?  true : false;
      else if(name === 'Phone Number')
        return value.match(/^\d{10}$/)? true : false;
      else
        return value != '';
    },
    submit: function(){
      let allvalid = this.dataInputs.reduce(
        (acc,curr)=> acc && this.validity(curr.name, curr.value), true);
      if(allvalid)
      {
        alert('submitted');
        this.dataInputs.forEach(input=>
        console.log(input.name+": "+input.value));
        this.dataInputs.forEach(input => {input.value=''});
      }
      else{
        alert('Some of the fields are invalid or incompleted');
      }
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

.valid {
  border-color:rgb(3, 245, 3);
}

.no-valid {
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
