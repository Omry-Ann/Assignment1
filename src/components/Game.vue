<template>
    <div >
        <div class="game" >
            <h3>Question Number: <br><br>{{currentQuestionIndex +1}}</h3>
            <br>
            {{currentQuestion}}
            <input type="text">
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
                {question: '5+5 =' , ans:'10'}
                ],
            currentQuestionIndex: 0
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
            if (this.currentQuestionIndex < this.questions.length-1) 
                this.currentQuestionIndex++;
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