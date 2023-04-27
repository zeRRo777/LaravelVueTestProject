
import './bootstrap';
import { createApp } from 'vue';
import store from './store/index';
import router from './router';
import App from "./components/App.vue";


const app = createApp({
    components:{
        'app' : App
    }
});


app.use(router)
    .use(store)
    .mount('#app');

