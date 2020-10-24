import {createApp} from 'vue';
import App from './App.vue';

// this will be transformed
const testOp = arg => arg ?? 'fallback';
console.log(testOp());

createApp(App).mount('#app');
