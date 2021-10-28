<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.path">
        <el-breadcrumb-item :to="breadcrumb.path">{{ breadcrumb.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from './type'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
