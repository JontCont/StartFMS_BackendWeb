import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Layout from './components/@Shared/LayoutView.vue'
import Home from './components/Home/HelloWorld.vue';
import Test from './components/Test/TestPage.vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


// 創建路由實例
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/Test',
        name: 'Test',
        component: Test,
      },
    ],
  });
  
  // 創建 Vue 實例
  const app = createApp(Layout);
    // 安裝 Vue Router
  app.use(router);
  app.use(BootstrapVue);
  // 將類名添加到 body 元素
  document.body.classList.add('hold-transition', 'sidebar-mini', 'layout-fixed');
  
  // 掛載 Vue 實例
  app.mount('#app');