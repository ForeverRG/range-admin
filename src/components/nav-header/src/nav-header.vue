<template>
  <div class="nav-header">
    <div class="content">
      <div class="left-content">
        <i
          class="fold-menu"
          :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          @click="handleFoldClick"
        />
        <range-breadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div class="right-content">
        <el-avatar
          class="right-avatar"
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { userRangeStore } from '@/store'
import RangeBreadcrumb from '@/base-ui/breadcrumb/index'
import UserInfo from './user-info.vue'
import { pathMapToBreadcrumb } from '@/utils/menu/map-menu'

export default defineComponent({
  components: {
    RangeBreadcrumb,
    UserInfo
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    // 菜单栏打开和关闭
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑
    const breadcrumbs = computed(() => {
      // 获取路由路径
      const route = useRoute()
      const routePath = route.path
      // 获取菜单
      const store = userRangeStore()
      const userMenus = store.state.loginModule.userMenus
      // 根据路径和菜单匹配面包屑
      return pathMapToBreadcrumb(userMenus, routePath)
    })

    return { isFold, handleFoldClick, breadcrumbs }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  justify-content: space-between;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 10px;

    .left-content {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }

    .right-content {
      display: flex;
      flex-flow: row nowrap;
    }

    .right-avatar {
      margin-right: 10px;
    }
  }

  .breadcrumb {
    padding: 0 0 0 10px;
  }
}
</style>
