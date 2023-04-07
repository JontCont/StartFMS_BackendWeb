<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <router-link class="brand-link" :to="{ name: 'Home' }">
            <img src="../../../assets/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                style="opacity: .8">
            <span class="brand-text font-weight-light">Start Five Minutes</span>
        </router-link>
        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex justify-content-between">
                <div class="image">
                    <a class="nav-link text-dark " asp-area="Identity" asp-page="/Account/Login">
                        <img src="" class="img-circle elevation-2" alt="User Image">
                    </a>
                </div>
                <div class="info">
                    <a class="d-block" asp-area="Identity" asp-page="/Account/Login">尚未登入</a>
                </div>
            </div>

            <!-- SidebarSearch Form -->
            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                            <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li :class="{'nav-item': true, 'menu-is-opening menu-open': true }" v-for="menu in menus" :key="menu.id">
                        <a :href="menu.url? menu.url :'javascript:void(0)'" class="nav-link">
                            <i class="nav-icon {{ menu.icon }}"></i>
                            <p>
                                {{ menu.menuName }}
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item" v-for="child in menu.children" :key="child.id">
                                <router-link :class="{'nav-link': true, 'active': '/'+$route.name === child.url }" :to="{name: child.url}">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>{{ child.menuName }}</p>
                                </router-link> 
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      menus: [],
    };
  },
  created() {
    this.loadMenus();
  },
  methods: {
    async loadMenus() {
      try {
        const response = await axios.get(
          "https://startfms-backendapi.azurewebsites.net/api/user/menus"
        );
        this.menus = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>