import { defineComponent, ref } from 'vue'
import img from './assets/logo.png'
import Hello from './components/Hello'

export default defineComponent({
  setup () {
    const count = ref(0)
    console.log(11)

    return () => (
      <div>
        <Hello age={11}></Hello>
        <div>{count.value}</div>
        <input type="text" v-model={count.value} />
        <img src={img} alt="" />
      </div>
    )
  }
})
