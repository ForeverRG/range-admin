<template>
  <div class="dropdown-menu">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{ label }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <template v-for="item in items" :key="item.command">
            <el-dropdown-item :command="item.command">{{ item.name }}</el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IDropdownItem } from './type'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    },
    items: {
      type: Array as PropType<IDropdownItem[]>,
      default: () => []
    }
  },
  emits: ['clickItem'],
  setup(props, { emit }) {
    // 处理命令,向父组件发送处理信号
    const handleCommand = (command: string) => {
      emit('clickItem', command)
    }

    return { handleCommand }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
</style>
