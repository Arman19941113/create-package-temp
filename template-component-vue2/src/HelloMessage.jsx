const HelloMessage = {
  props: {
    message: {
      type: String,
      default: 'Hello World',
    },
  },
  render () {
    return <div style="color: cyan;">{this.message}</div>
  },
}

export default HelloMessage
