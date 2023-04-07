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
        meta:{
          requiresAuth: true
        }
      },
      {
        path: '/Test',
        name: 'Test',
        component: ()=> import('../components/Test/TestPage.vue'),
        meta:{
          requiresAuth: true
        }
      },
      {
        path: '/:catchAll(.*)', // 捕獲所有路由
        name: 'NotFound',
        component: () => import('../components/Login/LoginPage.vue'),
        meta:{
            noLayout: true
        }
      }
    ],
  });
  
  router.beforeEach(async(to, from, next) => {
    next(); // 測試用 ，暫時不卡任何東西

    // if (to.meta.requiresAuth) {
    //   // 如果訪問的頁面需要登入，但是使用者尚未登入，則導向登入頁面
    //   next('/');
    // } else {
    //   // 其他情況下，都允許使用者自由訪問
    //   next();
    // }

    console.log(to, from)
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

  // function isLoggedIn() {
  //   // 檢查使用者是否已登入，可以透過您的身份驗證機制來判斷
  //   // 如果已登入，返回true；如果未登入，返回false
  // }

export default router
