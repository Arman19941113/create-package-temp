<script lang="ts">
import 'package/styles/variable.css'

export default {
  name: 'App',
}
</script>

<script setup lang="ts">
import image from '@/assets/girl.jpg'
import { HelloButton, HelloMessage } from 'package/index'
</script>

<template>
  <h1>Example</h1>
  <img :src="image" alt="" width="500">

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
</template>

<style src="/src/styles/app.css"></style>
