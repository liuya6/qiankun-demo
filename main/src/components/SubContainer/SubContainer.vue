<script lang="tsx">
import { defineComponent, onMounted } from 'vue'
import { start } from 'qiankun'

import { registerApps } from '@/utils/qiankun'

export default defineComponent({
  setup() {
    onMounted(() => {
      if (!window.qiankunStarted) {
        window.qiankunStarted = true
        registerApps()
        start({
          sandbox: {
            experimentalStyleIsolation: true // 样式隔离
          }
        })
      }
    })

    return () => <div id="container">123123</div>
  }
})
</script>

<style scoped></style>
