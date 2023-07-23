<script lang="tsx">
import { computed, defineComponent, reactive, ref, unref } from 'vue'

import { Form, FormItem } from 'ant-design-vue'
import type { FormInstance } from 'ant-design-vue'
import AntFormItem from './AntFormItm.vue'

import { formProps } from '../types'

export default defineComponent({
  name: 'AntForm',
  props: formProps,
  components: {
    Form,
    AntFormItem
  },
  setup(props, { emit, attrs }) {
    const formRef = ref<FormInstance>()
    const formModel = reactive({})
    let initProps = ref()

    const formAction = {
      setProps,
      getFiledValue
    }
    emit('register', formAction)

    const getProps = computed(() => {
      return { ...attrs, ...props, ...unref(initProps) }
    })

    initFormModel()

    return () => {
      return (
        <Form {...getProps.value} model={formModel} ref={formRef}>
          {unref(getProps).schema?.map((schema) => {
            return <AntFormItem formModel={formModel} schema={schema} setFormModel={setFormModel} />
          })}
          {unref(getProps).schema?.length ? (
            <FormItem>
              <a-button type="primary" onClick={onSubmit}>
                {unref(getProps).okBtn}
              </a-button>
              <a-button style="margin-left: 10px">{unref(getProps).cancelBtn}</a-button>
            </FormItem>
          ) : null}
        </Form>
      )
    }

    function setProps(props) {
      initProps.value = props
    }

    function getFiledValue() {
      return formModel
    }

    function initFormModel() {
      unref(getProps).schema.forEach((item) => {
        if (!item.field in formModel) {
          formModel[item.field] = ''
        }
        if (item.defaultValue) {
          formModel[item.field] = item.defaultValue
        }
      })
    }

    function setFormModel(key, value) {
      formModel[key] = value
    }

    async function onSubmit() {
      ;(formRef.value as any).validate().then(() => {
        if (getProps.value.onSubmit) {
          getProps.value.onSubmit(formModel)
          return
        }
        emit('submit', formModel)
      })
    }
  }
})
</script>

<style scoped></style>
