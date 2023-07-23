<script lang="tsx">
import { defineComponent } from 'vue'

import { AntTable } from '@/components/AntTable'
import { tableTitle, schema, getTableDemoData } from './config'
import { useTable } from '@/components/AntTable/hook/useTable'

export default defineComponent({
  setup() {
    const [register] = useTable({
      antFormProps: {
        schema,
        okBtn: '搜索',
        cancelBtn: '重置',
        layout: 'inline'
      },
      columns: tableTitle,
      api: getTableDemoData
    })

    return () => (
      <div>
        <AntTable onRegister={register} api={getTableDemoData} />
      </div>
    )
  }
})
</script>

<style scoped></style>
