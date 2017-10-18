<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'foo' }">Foo</router-link>
    <router-link :to="{ name: 'bar' }">Bar</router-link>
    <router-link :to="{ name: 'posts', params: { id: '123' } }">Posts</router-link>
    <router-link :to="{ name: 'inbox' }">Inbox</router-link>
    <router-link :to="{ name: 'settings' }">Settings</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
