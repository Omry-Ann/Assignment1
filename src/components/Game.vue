<template>
    <div >
        <div class="game" >
            <h3>Question Number: <br><br>{{currentQuestionIndex +1}}</h3>
            <br>
            {{currentQuestion}}
            <input type="text" v-model="ans"><br><br>
            <button @click="$emit('answer', ans == questions[currentQuestionIndex].ans, currentQuestionIndex); next()">SUBMIT</button>
        </div>
        <br><br>
        <button @click="prev()">PREV</button>
        <button @click="next()">NEXT</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            questions: [
                {question: '1+2 =' , ans:'3'},
                {question: '8-4 =' , ans:'4'},
                {question: '9+8 =' , ans:'17'},
                {question: '6+6 =' , ans:'12'},
                {question: '16-9 =' , ans:'7'},
                {question: '10+15 =' , ans:'25'},
                {question: '8+0 =' , ans:'8'},
                {question: '5+5 =' , ans:'10'}
                ],
            currentQuestionIndex: 0,
            currScore:0,
            ans:'',
            gameOver: false
        };
    },
    computed: {
        currentQuestion() {
            return this.questions[this.currentQuestionIndex].question;
        }
    },
    methods: {
        prev() {
            if (this.currentQuestionIndex > 0) 
                this.currentQuestionIndex--;
        },
        next() {
            this.ans == this.questions[this.currentQuestionIndex].ans? this.currScore++ : 1;
            this.currentQuestionIndex < this.questions.length-1? this.currentQuestionIndex++ : this.gameOver = true;
        }
    }
}
</script>

<style>
    .game{
        width:300px;
        height: 300px;
        border:1px solid black;
        margin: auto;
    }
</style>