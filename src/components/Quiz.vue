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
    isPoped: true,
    currScore:0,
    highScore:0,
    fname:this.$route.params.fname,
    image: this.$route.params.image,
    icons:[
        {val:''},
        {val:''},
        {val:''},
        {val:''},
        {val:''},
        {val:''},
        {val:''},
        {val:''},
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
    addAnswer: function(isEqual, index){
      this.icons[index].val = isEqual? '1':'0';
      this.currScore+= isEqual? 1:0;
    },
    updateScores: function(high, curr){
      this.highScore = curr>high? curr : high;
      this.currScore = 0;
      this.icons.map((x)=>x.val='');
    }
  }
}
</script>

<style>

</style>