<template>

<!-- Optimizing background image performance -->
<!-- https://medium.com/vehikl-news/fixed-background-image-performance-issue-6b7d9e2dbc55 -->
<div id="app"
:style="{ 
    backgroundImage: 'url(' + require('@/assets/Altered_SD_small.png') + ')' }" 
     class="hero">
    <NavBar/>

    <WebsiteHeader/>
    <MusicComponent/>
    <Profile  style="padding-top:200px" class="content" id="profile"/>
    <SkillsCard style="padding-top:100px" id="abilities"/>
    <Timeline style="padding-top:100px"  id="timeline" class="content"/>

    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import WebsiteHeader from './components/WebsiteHeader.vue';
import Profile from './components/Profile.vue';
import Timeline from './components/Timeline.vue';
import SkillsCard from './components/SkillsCard.vue';
import MusicComponent from './components/MusicComponent.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    WebsiteHeader,
    Profile,
    Timeline,
    SkillsCard,
    MusicComponent,
  },
    data() {
    return {
      // eslint-disable-next-line global-require
      logo: window.location.origin + require('./assets/Altered_SD_small.png'),
    };
  },

  metaInfo() {
    return {

// In your Netlify account, go to Site settings -> Build & Deploy -> Prerendering ...This will allow you to pre render on twitter!
// Potentially may have to go on Netlify and deploy---> click clear cache --> deploy site
      title: 'Welcome to My Webpage!',
      meta: [
        // Twitter Card
        { name: 'twitter:card', content: 'Austin Marchese' },
        { name: 'twitter:title', content: 'Welcome to my Website!' },
        { name: 'twitter:description', content: 'The World is Changing. And so should your Resume.' },
        // image must be an absolute path
        { name: 'twitter:image', content: this.logo },
        // Facebook OpenGraph
        { name:"title", property: 'og:title', content: 'Welcome to my Website!' },
        {  property: 'og:site_name', content: 'My Personal Website' },
        {  property: 'og:type', content: 'website' },
        { name:"image", property: 'og:image', content: this.logo },
        { name:"description", property: 'og:description', content: 'The World is Changing. And so should your Resume' },
      ],
    };
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
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    
}
.navbar .nav > li a {
    display: block;
    height: 80px;
    text-align: center;
    padding-top: 30px;
    font-weight: 600;
    color: #FFFFFF;
}
.bg-light {
    background-color: black !important;
}
html, body {
    color: #434242;
    font-family: 'Open Sans', sans-serif !important;
    height: 100%;
}
.content {
  padding-top:40px;
  padding-bottom:40px;
}

h4, h3 {
    font-weight: 300;
    color: #22A39F;
}

h4 {
    font-size: 54px;
    text-align: center;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, strong, b {
    font-family: 'Open Sans', sans-serif !important;
    margin-bottom: 20px;
}

html, body {
    color: #434242;
    font-family: 'Open Sans', sans-serif !important;
}
</style>
