<script lang="tsx">
import { defineComponent } from 'vue'

// import { ArcoForm } from '@/components/ArcoForm'
import { AntForm } from '@/components/AntForm'
import { schema } from './formConfig'

import { useForm } from '@/components/AntForm/hook/useForm'

export default defineComponent({
  components: {
    // ArcoForm
  },
  setup() {
    const [register, { formAction }] = useForm({
      schema,
      onSubmit: submit
    })

    return () => (
      <div class="formDemo">
        <AntForm onRegister={register} />
      </div>
    )

    function submit(params) {
      console.log(params, formAction, 'formAction')
    }
  }
})
</script>

<style scoped></style>
