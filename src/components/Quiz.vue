<template>
  <div class="quiz">
    <topbar :fname="fname" :image="image" :currScore="currScore" :highScore="highScore" />
    <br><br>
    <game :currScore="currScore" @answer="addAnswer"/>
    <br><br>
    <bottombar :icons="icons"/>
    <br>
  </div>
</template>

<script>

import topbar from '../components/Topbar.vue'
import bottombar from '../components/Bottombar.vue'
import game from '../components/Game.vue'
export default {
  components: {topbar, bottombar, game},
  data(){
  return{
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
    }
    
  }
}
</script>

<style>

</style>