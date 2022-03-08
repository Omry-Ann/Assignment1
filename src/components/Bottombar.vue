<template>
  <div class="icons">
      <hr size="3" noshade><br>
      <span v-for="(icon,index) in icons" :key="index">
          {{index+1}} <br>
          <div v-if ="icon.val == ''"><img src = "../assets/icons/grey.png" alt="X"></div>
          <div v-else-if="icon.val =='1'"><img src = "../assets/icons/green.png" alt="X"></div>
          <div v-else><img src = "../assets/icons/red.png" alt="X"></div>
          <br> {{icon.time}}.sec
      </span>
  </div>
</template>

<script>
export default {
    props:{
        icons: {
            type: Array
        }
    }

}
</script>

<style>
    .icons img{
        height: 30px;
        width: 30px;
        margin: 15px;
    }
    .icons div{
        display: inline-block;
    }
    span{
        display: inline-block;
    }
</style>