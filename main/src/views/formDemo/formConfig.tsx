import type { AntFormItem } from '@/components/AntForm'
import { Textarea } from 'ant-design-vue'

const schema: AntFormItem[] = [
  {
    label: '姓名',
    component: 'Input',
    field: 'name',
    defaultValue: '张三',
    componentProps: ({ formModel }) => {
      return {
        onChange: (e) => {
          formModel.remark = e.target.value
          console.log('??????')
        }
      }
    }
    // rules: [
    //   { required: true, message: 'name is required' },
    //   { minLength: 5, message: 'must be greater than 5 characters' }
    // ]
  },
  {
    label: '职业',
    component: 'Select',
    field: 'career',
    componentProps: {
      placeholder: '请选择职业',
      options: [
        {
          label: '前端',
          value: 1
        },
        {
          label: '后端',
          value: 2
        }
      ]
    }
  },
  {
    label: '日期',
    field: 'date',
    component: 'DatePicker',
    componentProps: {
      showTime: true
    }
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Render',
    customRender: ({ formModel, field, setFormModel }) => {
      return (
        <Textarea
          value={formModel?.[field]}
          onChange={(e) => {
            setFormModel?.(field, e.target.value)
            console.log(e.target.value, 'e.target.value??')
            // formModel?.[field] = e.target.value
          }}
        />
      )
    }
  }
  // {
  //   label: 'inputNumber',
  //   field: 'InputNumber',
  //   component: 'InputNumber',
  //   defaultValue: 9,
  //   componentProps: ({ setFormModel }) => {
  //     return {
  //       onInput: (e: Event) => {
  //         setFormModel('name', e.target.value)
  //       }
  //     }
  //   }
  // },
]

export { schema }
