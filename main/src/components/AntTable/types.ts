import type { AntFormProps } from '@/components/AntForm/types'

interface AntTable {
  antFormProps?: AntFormProps
  columns: any[]
  api: (params?: any) => Promise<unknown>
  pagination?: Boolean
  [key: string]: any
}

import type { PropType } from 'vue'

const AntTableProps = {
  antFormProps: Object as PropType<AntFormProps>,
  columns: Array as PropType<any[]>,
  api: Function as PropType<() => Promise<any[]>>,
  pagination: {
    type: Boolean,
    default: false
  }
}

export { AntTableProps, AntTable }
