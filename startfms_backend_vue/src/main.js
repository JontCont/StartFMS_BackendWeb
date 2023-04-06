import { createApp } from 'vue';
import router from './router/router'
import BootstrapVue from 'bootstrap-vue';



var app = createApp(()=>import('./components/@Shared/LayoutView.vue'));
app.use(router);
app.use(BootstrapVue);
app.mount('body');