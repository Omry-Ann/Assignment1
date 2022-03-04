<template>
    <div >
        <br><br>
        <div v-if="countDown ==0">
            <div class="nogame">
                <h1>Game Over</h1>
                Your Score: {{currScore}}
                <!-- <button @click="(function(){started =1 })(); countDownTimer()">Start Game</button> -->
            </div>
        </div>
        <div v-else-if="started == 0"> 
            <div class="nogame">
                <button @click="(function(){started =1 })(); countDownTimer()">Start Game</button>
            </div>
        </div>
        <div v-else-if="started == 1">
            <div class="game" >
            Time: {{countDown}} <br> 
            <h3>Question Number: <br><br>{{currentQuestionIndex +1}}</h3>
            <h1>{{currentQuestion}}</h1> 
            <input type="text" v-model="ans"><br><br>
            <button @click="$emit('answer', ans == questions[currentQuestionIndex].ans,
             currentQuestionIndex);(function(){ans = ''})(); next()">SUBMIT</button> </div>
        </div>
        <br><br>
        <!-- <button @click="prev()">PREV</button>
        <button @click="next()">NEXT</button> -->
    </div>
</template>

<script>
export default {
    props:{
        currScore:{
            Type: Number
        }
    },
    data(){
        return{
            questions: [
                {question: '1+2 = ?' , ans:'3'},
                {question: '8-4 = ?' , ans:'4'},
                {question: '9+8 = ?' , ans:'17'},
                {question: '6+6 = ?' , ans:'12'},
                {question: '16-9 = ?' , ans:'7'},
                {question: '10+15 = ?' , ans:'25'},
                {question: '8+0 = ?' , ans:'8'},
                {question: '5+5 = ?' , ans:'10'}
                ],
            currentQuestionIndex: 0,
            ans:'',
            gameOver: false,
            countDown:10,
            started:0
        };
    },
    computed: {
        currentQuestion() {
            return this.questions[this.currentQuestionIndex].question;
        }
    },
    methods: {
        countDownTimer(){
            if(this.countDown > 0){
                setTimeout(
                    () => {
                        this.countDown -=1;
                        this.countDownTimer()
                    }, 1000
                )
            }
        },
        prev() {
            if (this.currentQuestionIndex > 0) 
                this.currentQuestionIndex--;
        },
        next() {
            this.ans == this.questions[this.currentQuestionIndex].ans? this.currScore++ : 1;
            this.currentQuestionIndex < this.questions.length-1? this.currentQuestionIndex++ : this.gameOver = true;
        }
    },
//       mounted(){
//         this.countDownTimer();
//   }
}
</script>

<style>
    .game{
        width:300px;
        height: 300px;
        border:1px solid black;
        margin: auto;
    }
    .nogame button{
        border:double;
        font-size:larger;
        color: purple;
        background: transparent;
    }
</style>