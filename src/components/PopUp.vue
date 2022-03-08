<template>
  <div class="popUp">
    <button @click="$emit('closePopUp')">X</button>
    <br><br>
    <img src = "../assets/icons/library.jpeg" alt="X">
    <br>
    <h1>Simple Math Quiz</h1>
    <h3>When pressing the "Start Game" Button, random Math questions will appear one by one. You must answer <br> 
    a question before moving forward to the next one. Pay attention there is a timer on the top. Try to<br>
    gain as many points as you can. You can try again by clicking the "Play Again" Button. Good Luck! <br> </h3>
  </div>
</template>

<script>
</script>

<style>
  .popUp{
    background: rgb(212, 203, 203);
    width:1000px;
      height: 600px;
      border:1px solid black;
      margin: auto;
  }
  .popUp img {
    height: 300px;
    width: 900px;
    margin: auto;
  }
  .popUp button{
    float: right;
    font-size: larger;
  }
</style>