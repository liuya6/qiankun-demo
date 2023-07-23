<template>
  <div :class="style.about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup lang="ts">
import { useCssModule } from 'vue'

const style = useCssModule('about')
</script>

<style module="about">
.about {
  color: red;
}
</style>
