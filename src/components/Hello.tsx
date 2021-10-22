import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    age: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    // const count = ref(0)

    return () => (
      <div>
        <div>{props.age}</div>
      </div>
    )
  }
})
