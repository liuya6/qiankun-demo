import { ref, watch } from 'vue'

import type { AntTable } from '../types'

interface TableAction {
  setProps: (params: any) => void
}

function useTable(params: AntTable) {
  const mTableAction = ref()

  function register(tableAction: TableAction) {
    mTableAction.value = tableAction

    // console.log(mTableAction, 'mTableAction??')

    watch(
      () => params,
      () => {
        if (tableAction) {
          tableAction.setProps(params)
        }
      },
      {
        deep: true,
        immediate: true
      }
    )
  }

  return [
    register,
    {
      tableAction: mTableAction.value
    }
  ]
}

export { useTable }
