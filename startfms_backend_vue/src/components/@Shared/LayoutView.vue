<template>
  <div class="wrapper">
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
</template>
  
<script>
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
    }
  }
</script>
  
<style>
/* FontAwesomeKit */
/*
@import '../../assets/css/free-v4-font-face.min.css';
@import '../../assets/css/free-v4-shims.min.css';
@import '../../assets/css/free.min.css';
*/

/*Google Font: Source Sans Pro*/
@import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback';
@import 'https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+TC&display=swap" rel="stylesheet';
/* Ionicons */
@import 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css';

@import '../../assets/lib/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
@import '../../assets/lib/icheck-bootstrap/icheck-bootstrap.min.css';
@import '../../assets/lib/jqvmap/jqvmap.min.css';
@import '../../assets/lib/adminlte/css/adminlte.min.css';
@import '../../assets/lib/overlayScrollbars/css/OverlayScrollbars.min.css';
@import '../../assets/lib/daterangepicker/daterangepicker.css';
@import '../../assets/lib/summernote/summernote-bs4.min.css';
@import '../../assets/lib/sweetalert2/sweetalert2.min.css';

/* Select2 */
@import '../../assets/lib/select2/css/select2.min.css';
@import '../../assets/lib/select2-bootstrap4-theme/select2-bootstrap4.min.css';

/* table - UI */
@import '../../assets/lib/bootstrap-table/dist/bootstrap-table.min.css';
@import '../../assets/lib/datatables-bs4/css/dataTables.bootstrap4.min.css';
@import '../../assets/lib/datatables-responsive/css/responsive.bootstrap4.min.css';
@import '../../assets/lib/datatables-buttons/css/buttons.bootstrap4.min.css';


/*----- Script ------
@import '../../assets/lib/bootstrap/dist/js/bootstrap.bundle.min.js';
@import '../../assets/lib/bootstrap-select-1.13.14/dist/js/bootstrap-select.min.js';
@import '../../assets/lib/bootstrap-table/dist/bootstrap-table.min.js';
@import '../../assets/lib/bootstrap-table/dist/bootstrap-table-locale-all.min.js';
@import '../../assets/lib/bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile.min.js';
@import '../../assets/lib/bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js';
@import '../../assets/lib/bootstrap-table/dist/extensions/filter-control/bootstrap-table-filter-control.min.js';
@import '../../assets/lib/bootstrap-table/dist/extensions/resizable/bootstrap-table-resizable.min.js';
@import '../../assets/js/jspdf.min.js';
@import '../../assets/js/tableExport.min.js';
@import '../../assets/js/jspdf.plugin.autotable.js';
@import '../../assets/js/jquery.resizableColumns.min.js';

@import '../../assets/js/Tabullet.js';
@import '../../assets/lib/jQuery-BlockUI/jquery.blockUI.js';
@import '../../assets/lib/sweetalert/sweetalert.min.js';
*/





</style>
