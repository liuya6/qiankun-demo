import type { PropType, VNode } from 'vue'

import { allCom } from './allCom'

interface AntFormItem {
  label: string
  field: string
  component: keyof typeof allCom
  componentProps?: any
  defaultValue?: any
  rules?: any
  customRender?: (params: {
    field: string
    formModel: Object
    setFormModel: ((key: string, value: any) => void) | undefined
  }) => VNode | VNode[] | JSX.Element
}

interface AntFormProps {
  schema: AntFormItem[]
  okBtn?: string
  cancelBtn?: string
}

const formProps = {
  schema: Array as PropType<AntFormItem[]>,
  okBtn: {
    type: String,
    default: '创建'
  },
  cancelBtn: {
    type: String,
    default: '取消'
  }
}

export { formProps, AntFormItem, AntFormProps }
