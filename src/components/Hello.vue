<template>
  <div id="hello">   
    <h1>{{ msg }}</h1>
    <h3>{{ msg }}</h3>
    <h2>Essential Links</h2>
    <slot name="d">defecto</slot>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>