<template>
  <main>
    <TheWelcome />
    <div :class="style.home">
      <a-button :class="style['home-ant']" @click="mClick">model</a-button>
      <div :class="style['home-cs']">213</div>
    </div>
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { Modal } from 'ant-design-vue'
import { useCssModule } from 'vue'

const style = useCssModule('home')

function mClick() {
  Modal.confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
      }).catch(() => console.log('Oops errors!'))
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCancel() {}
  })
}
</script>

<style module="home" lang="scss">
.home {
  &-ant {
    color: red;
  }
  &-cs {
    color: blue;
  }
}
</style>
