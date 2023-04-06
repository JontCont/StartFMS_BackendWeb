<template>
  <div class="wrapper" v-if="!$route.meta.noLayout" >
    <!-- <PreloadPage></PreloadPage> -->
    <HeaderPage></HeaderPage>
    <MenuPage></MenuPage>
    <div class="content-wrapper">
			<!-- /.content-header -->
      <HeaderContentPage></HeaderContentPage>
			<!-- Main content -->
			<section class="content">
				<div class="container-fluid">
        <!-- Html Content -->
          
          <router-view></router-view>

				</div><!-- /.container-fluid -->
			</section>
			<!-- /.content -->
		</div>

    <!-- Control Sidebar -->
		<aside class="control-sidebar control-sidebar-dark">
			<!-- Control sidebar content goes here -->
		</aside>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>


</template>
  
<script>
  // 公用 Layout compoent
  import HeaderPage from './Header/HeaderPage.vue'
  import HeaderContentPage from './Header/HeaderContentPage.vue'
  import MenuPage from './Menu/MenuPage.vue'
  // import PreloadPage from './Preload/PreloadPage.vue'

  export default {
    name: 'LayoutView',
    components: {
      HeaderPage,
      MenuPage,
      HeaderContentPage
      // PreloadPage
    },
    created(){
      this.updateBodyClass();
    },
    methods: {
      updateBodyClass() {
        const list = document.body.classList;
        list.add("hold-transition");
        list.add("layout-fixed");
      },
    }

  }
</script>
  
<style>
/* FontAwesomeKit */
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css';

/*Google Font: Source Sans Pro*/
@import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback';
@import 'https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+TC&display=swap" rel="stylesheet';

/* adminlte */
@import '../../assets/lib/adminlte/css/adminlte.min.css';

</style>
