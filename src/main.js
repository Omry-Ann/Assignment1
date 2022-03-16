import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './router.js';
import axios from "axios";
import firebase from "firebase/app";
/* <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase-firestore.js"></script> */
Vue.prototype.$axios = axios;
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.config.devtools = true;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpUDu4tanKI6tyfosXLVXUneaUUIlp7g4",
  authDomain: "vueauthentication-3e0b7.firebaseapp.com",
  projectId: "vueauthentication-3e0b7",
  storageBucket: "vueauthentication-3e0b7.appspot.com",
  messagingSenderId: "749606114438",
  appId: "1:749606114438:web:fd040a1e61ecc1edd96d07"
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// export default firebase;
const router = new VueRouter({ routes: Routes});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
