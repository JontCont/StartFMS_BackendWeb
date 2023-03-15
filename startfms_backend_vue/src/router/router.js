import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'js-cookie'


// 創建路由實例
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'Login',
        component: () => import('../components/Login/LoginPage.vue'),
        meta:{
            noLayout: true
        }
      },
      {
        path: '/Home',
        name: 'Home',
        component: ()=> import('../components/Home/HelloWorld.vue'),
      },
      {
        path: '/Test',
        name: 'Test',
        component: ()=> import('../components/Test/TestPage.vue'),
      },
    ],
  });
  
  router.beforeEach(async(to, from, next) => {
    // console.log(to, from)
    if (to.meta.requireAuth) {
      const info = Cookies.get('login')
      const token = JSON.parse(info).token
      console.log(token)
      if (info) {
        if (token.length > 0 || token === undefined) {
          next()
        } else {
          next({ name: 'Login' })
        }
      } else {
        next({ name: 'Login' })
      }
    } else {
      next()
    }
  })


export default router
