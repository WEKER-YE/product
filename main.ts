import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';  // 引入 Vue Router
import store from './store';    // 引入 Vuex
import VueLazyload from 'vue3-lazyload';

// 創建 Vue 應用實例
const app = createApp(App);

// 使用 Vuex 狀態管理
app.use(store);

// 使用 Vue Router
app.use(router);

app.use(VueLazyload, {
    loading: require('@/assets/vue.svg'), // 加載中佔位圖
    error: require('@/assets/vue.svg'), // 加載失敗顯示的圖片
  });

// 掛載到 DOM 中的 '#app' 元素
app.mount('#app');
