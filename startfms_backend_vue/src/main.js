import { createApp } from 'vue'
// import App from './App.vue'
import Layout from './components/@Shared/LayoutView.vue'

var app = createApp(Layout);
document.body.classList.add('hold-transition');
document.body.classList.add('sidebar-mini');
document.body.classList.add('layout-fixed');

app.mount('#app')
