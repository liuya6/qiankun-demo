import { ref, watch, unref } from 'vue'

function useForm(props) {
  let mFormAction = ref()

  function register(formAction) {
    // console.log(formAction, 'formAction-------')

    mFormAction.value = formAction

    watch(
      () => props,
      () => {
        if (formAction) {
          formAction.setProps(props)
        }
      },
      {
        deep: true,
        immediate: true
      }
    )
  }

  const formAction = {
    getFiledValue: () => {
      return unref(mFormAction).getFiledValue()
    }
  }

  return [
    register,
    {
      formAction
    }
  ]
}

export { useForm }
