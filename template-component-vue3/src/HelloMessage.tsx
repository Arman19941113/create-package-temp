import { defineComponent } from 'vue'

const HelloMessage = defineComponent({
  props: {
    message: {
      type: String,
      default: 'Hello World',
    },
  },
  render() {
    return <div style="color: cyan;">{this.message}</div>
  },
})

export default HelloMessage
