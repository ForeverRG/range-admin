<template>
  <div class="nav-menu">
    <!-- logo start -->
    <div class="logo">
      <img class="logo-img" src="~@/assets/img/logo.png" alt="logo" />
      <span class="logo-title">Range Admin</span>
    </div>
    <!-- logo end -->

    <!-- menu start -->
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :collapse="isCollapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="menu in userMenus" :key="menu.id">
        <!-- 一级菜单 -->
        <template v-if="menu.type === 1">
          <el-sub-menu :index="menu.id">
            <template #title>
              <i class="el-icon-location"></i>
              <span>{{ menu.name }}</span>
            </template>
            <!-- 一级菜单中的二级菜单  -->
            <template v-for="childMenu in menu.children" :key="childMenu.id">
              <el-menu-item :index="childMenu.id">{{ childMenu.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 二级菜单  -->
        <template v-else-if="menu.type === 2">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <template #title>Navigator Two</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <!-- menu end -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { userRangeStore } from '@/store'

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // store
    const rangeStore = userRangeStore()
    const userMenus = computed(() => rangeStore.state.loginModule.userMenus)

    return {
      userMenus
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .logo-img {
      height: 100%;
      margin: 0 10px;
    }

    .logo-title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  :v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
