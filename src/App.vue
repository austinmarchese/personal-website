<template>
  <div id="app">
    <NavBar/>
    <WebsiteHeader/>
    <Profile/>
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import WebsiteHeader from './components/WebsiteHeader.vue';
import Profile from './components/Profile.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    WebsiteHeader,
    Profile,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
