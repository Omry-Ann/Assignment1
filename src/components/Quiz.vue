<template>
  <div class="quiz">
    <h1>xxx</h1>
    <h2>{{id}}</h2>
  </div>
</template>

<script>
export default {
  data(){
  return{
    id:this.$route.params.id
  }
  }
}
</script>

<style>

</style>