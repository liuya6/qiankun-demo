<script lang="tsx">
import { defineComponent, unref, computed, ref } from 'vue'

import { Table } from 'ant-design-vue'
import { AntForm } from '@/components/AntForm'

import { useForm } from '@/components/AntForm/hook/useForm'
import { AntTableProps } from '../types'
import { useTableDataSource } from '../hook/useTableDataSource'

export default defineComponent({
  props: AntTableProps,
  components: {
    Table,
    AntForm
  },
  setup(props, { emit, attrs }) {
    const tableRef = ref()
    let initProps = ref({})

    const getProps = computed(() => {
      return { ...attrs, ...props, ...initProps.value }
    })

    const getFormProps = computed(() => {
      return { ...props.antFormProps, ...initProps.value.antFormProps }
    })

    const tableAction = {
      tableRef,
      setProps
    }

    emit('register', tableAction)

    const [registerForm, { formAction }] = useForm({
      ...unref(getFormProps)
    })

    const { getDataSource, submit, loading } = useTableDataSource({
      ...unref(getProps),
      formAction
    })

    const getBindValue = computed(() => {
      const dataSource = unref(getDataSource)
      return { ...unref(getProps), dataSource, loading: loading.value }
    })

    return () => {
      console.log(getBindValue.value, 'getBindValue')
      return (
        <div class="antTable">
          <div class="formContainer">
            <AntForm onRegister={registerForm} onSubmit={submit} />
          </div>
          <Table ref={tableRef} {...unref(getBindValue)} />
        </div>
      )
    }

    function setProps(props) {
      initProps.value = props
    }
  }
})
</script>

<style scoped lang="scss">
.antTable {
  .formContainer {
    margin: 10px 5px;
  }
}
</style>
