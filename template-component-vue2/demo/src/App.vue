<script>
import { HelloButton, HelloMessage } from 'package/index'

export default {
  components: {
    HelloButton,
    HelloMessage,
  },
}
</script>

<template>
  <div id="app">
    <h1>Hello Button</h1>
    <div>
      <HelloButton>你好</HelloButton>
      <HelloButton theme="primary">你好</HelloButton>
      <HelloButton theme="success">你好</HelloButton>
      <HelloButton theme="warning">你好</HelloButton>
      <HelloButton theme="danger">你好</HelloButton>
    </div>

    <h1>Hello Message</h1>
    <HelloMessage />
  </div>
</template>

<style>
  @import "@/styles/mixins.css";

  #app {
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
    padding: 100px 0;
    overflow: auto;
    @mixin scrollbar-mixin;
  }
</style>
