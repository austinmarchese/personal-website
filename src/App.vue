<template>

  <div :style="{ 
    backgroundImage: 'url(' + require('@/assets/SanDiego.jpg') + ')' }" id="app">
    <NavBar/>
    <WebsiteHeader/>
    <Profile  style="padding-top:200px" class="content" id="profile"/>
    <Profile id="experiences"/>
    
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
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    /* height: 90vh; */
}
.content {
  padding-top:40px;
  padding-bottom:40px;
}
</style>
