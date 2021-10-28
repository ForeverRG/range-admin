<template>
  <div class="user-info">
    <range-dropdown :items="dropdownItems" label="Range" @clickItem="handleClickItem" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RangeDropdown from '@/base-ui/dropdown/index'
import { dropdownItems } from './config/user-info'

export default defineComponent({
  components: {
    RangeDropdown
  },
  setup() {
    const handleClickItem = (command: string) => {
      console.log(command)
    }
    return { dropdownItems, handleClickItem }
  }
})
</script>

<style scoped>
.user-info {
  line-height: 28px;
}
</style>
