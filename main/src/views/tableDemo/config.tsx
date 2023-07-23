import { AntFormItem } from '@/components/AntForm'

const tableTitle = [
  {
    title: '姓名',
    dataIndex: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age'
  },
  {
    title: '性别',
    dataIndex: 'gender'
  },
  {
    title: '职业',
    dataIndex: 'careerName'
  },
  {
    title: '身高',
    dataIndex: 'height'
  },
  {
    title: '操作',
    dataIndex: 'option'
  }
]

const tableData = [
  {
    name: '张三',
    age: 18,
    height: '1米7',
    gender: '男',
    career: 1,
    careerName: '前端'
  },
  {
    name: '张四',
    age: 19,
    height: '1米8',
    gender: '男',
    career: 2,
    careerName: '后端'
  }
]

const getTableDemoData = (params) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const targetArr = tableData
          .filter((item) => {
            if (params.career) {
              return item.career === params.career
            }
            return true
          })
          .filter((item) => {
            if (params.name) {
              return item.name === params.name
            }
            return true
          })
        resolve(targetArr)
      }, 1000)
    } catch (e) {
      reject(e)
    }
  })
}

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

export { tableTitle, getTableDemoData, schema }
