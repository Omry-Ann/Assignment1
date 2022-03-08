<template>
  <div class="quiz">
    <div v-if="isPoped"> 
      <popup @closePopUp="(function(){isPoped = false})()"/> 
    </div>
    <div v-else>
      <topbar :fname="fname" :image="image" :currScore="currScore" :highScore="highScore" />
      <br><br>
      <game :currScore="currScore" :highScore="highScore" @answer="addAnswer" @update="updateScores"/>
      <br><br>
      <bottombar :icons="icons"/>
      <br>
    </div>
  </div>
</template>

<script>

import topbar from '../components/Topbar.vue'
import bottombar from '../components/Bottombar.vue'
import game from '../components/Game.vue'
import popup from '../components/PopUp.vue'
export default {
  components: {topbar, bottombar, game, popup},
  data(){
  return{
    numOfQuestions:8,
    isPoped: true,
    currScore:0,
    highScore:0,
    fname:this.$route.params.fname,
    image: this.$route.params.image,
    icons:[
        {val : '',time : 0},
        {val : '',time : 0},
        {val : '',time : 0},
        {val : '',time : 0},
        {val : '',time : 0},
        {val : '',time : 0},
        {val : '',time : 0},
        {val : '',time : 0}
    ]   
  };
  },
  computed: {
    userAvatar: function(){
      if(this.image =='dog')
        return require("../assets/icons/dog.png");
      else if(this.image =='fish')
        return require("../assets/icons/fish.png");
      else
        return require("../assets/icons/owl.png");
    }
  
  },
  methods: {
    addAnswer: function(isEqual, index, time){
      this.icons[index].val = isEqual? '1':'0';
      let sums = this.icons.reduce((acc,curr)=> acc + curr.time, 0) + time;
      this.icons[index].time = 59 - sums;
      this.currScore+= isEqual? 1:0;
    },
    updateScores: function(high, curr){
      this.highScore = curr>high? curr : high;
      this.currScore = 0;
      this.icons.map((x)=>{x.val = '' ; x.time = 0});
    }
  }
}
</script>

<style>

</style>