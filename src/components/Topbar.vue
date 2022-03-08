<template>
    <div class="topbar">
        <span class="left">Current Score: {{currScore}}</span>
        <span class="right">User: {{fname}}</span>
        <br>
        <span class="left"> <br> Highest Score: {{highScore}}</span>
        <span class="right"><img :src="userAvatar"></span>
        <br><br><br>
        <hr size="3" noshade>
    </div>
</template>

<script>
export default {
  props:{
      fname:{
          type:String
      },
      image:{
          type:String
      },
      currScore:{
          type:Number
      },
      highScore:{
          type:Number
      }
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
  } 
}
</script>

<style>

.left {
    float: left;
}
.right {
    float: right;
}
.topbar{
    font-style:italic;
}
.topbar img {
    width: 65x;
    height: 65px;
  }


</style>