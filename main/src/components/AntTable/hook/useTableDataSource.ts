import { onMounted, ref, unref } from 'vue'

function useTableDataSource(props) {
  const getDataSource = ref([])
  const loading = ref(true)

  const params = ref()

  async function fetch() {
    params.value = props.formAction.getFiledValue()
    loading.value = true
    const api = props.api
    getDataSource.value = await api(unref(params))
    loading.value = false
  }

  onMounted(async () => {
    await fetch()
  })

  async function submit(val) {
    console.log('submit')
    params.value = { ...params.value, ...val }
    await fetch()
  }

  return {
    getDataSource,
    submit,
    loading
  }
}

export { useTableDataSource }
