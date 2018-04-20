<template>
<div>
  <h1>Register</h1>
  <input
    type="email"
    name="email"
    v-model="email"
    placeholder="email"/>
  <br>
  <input
    type="password"
    name="password"
    v-model="password"
    placeholder="password"/>
  <br>
  <button>Register</button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  }
}
</script>
<style>

</style>
