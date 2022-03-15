import Registerform from './components/RegisterForm.vue';
import Quiz from './components/Quiz.vue';
import Login from './components/Login.vue';

 export default [
     {
        path: '/',
        name:'registerform',
        component: Registerform,
        props:true
    },
    {
        path: '/quiz/:fname/:image',
        name:'quiz', 
        component: Quiz, 
        props:true
    },
    {
        path: '/login/',
        name:'login', 
        component: Login, 
        props:true
    }
 ];