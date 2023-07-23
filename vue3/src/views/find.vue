<template>
  <div :class="style.find">find</div>
</template>

<script lang="ts" setup>
import { useCssModule } from 'vue'
const style = useCssModule('finds')
</script>

<style scoped module="find">
.find {
  color: blue;
}
</style>
<style scoped module="finds">
.find {
  color: green;
}
</style>
