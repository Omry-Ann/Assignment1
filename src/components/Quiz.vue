<template>
  <div class="quiz">
    <topbar/>
    <div class="toolbar">
      {{fname}} <br> <img :src="userAvatar">
    </div>
  </div>
</template>

<script>
import topbar from '../components/Topbar.vue'
export default {
  components: {topbar},
  data(){
  return{
    fname:this.$route.params.fname,
    image: this.$route.params.image,
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
  }
}
</script>

<style>
  img {
    width: 80px;
    height: 80px;
  }
</style>