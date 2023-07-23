<script lang="tsx">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import { FormItem } from 'ant-design-vue'

import type { AntFormItem } from '../types'
import { allCom } from '../allCom'

function isFunction(fn): fn is Function {
  return Object.prototype.toString.call(fn) === '[object Function]'
}

export default defineComponent({
  name: 'AntFormItem',
  props: {
    schema: Object as PropType<AntFormItem>,
    formModel: Object,
    setFormModel: Function as PropType<(key: string, value: any) => void>
  },
  setup(props, { attrs }) {
    const renderItem = () => {
      if (!props.schema in allCom) {
        console.warn('未注册组件')
        return ''
      }

      if (props.schema?.component === 'Render') {
        if (isFunction(props.schema.customRender)) {
          return props.schema.customRender({
            formModel: props.formModel,
            field: props.schema.field,
            setFormModel: props.setFormModel
          })
        }
      }

      const value = props.formModel?.[props.schema?.field]
      const getComponentProps = () => {
        let componentProps = props.schema?.componentProps
        if (isFunction(componentProps)) {
          componentProps = componentProps({
            formModel: props.formModel,
            field: props.schema.field,
            setFormModel: props.setFormModel
          })
        }
        return componentProps
      }

      const eventKey = 'onChange'

      const onEvent = {
        [eventKey]: (val) => {
          if (getComponentProps()[eventKey]) {
            getComponentProps()[eventKey](val)
          }
          let valueTarget = val
          if (props.schema?.component === 'Input') {
            valueTarget = val.target.value
          }
          props.setFormModel?.(props.schema?.field as string, valueTarget)
        }
      }

      const getProps = {
        value,
        ...getComponentProps(),
        ...onEvent
      }
      let componentTarget = allCom[props.schema?.component]
      return <componentTarget {...getProps} />
    }

    return () => {
      return (
        <FormItem name={props.schema?.field} {...props.schema} {...attrs}>
          {renderItem()}
        </FormItem>
      )
    }
  }
})
</script>

<style scoped></style>
