<template>

<!-- Optimizing background image performance -->
<!-- https://medium.com/vehikl-news/fixed-background-image-performance-issue-6b7d9e2dbc55 -->
<div id="app"
:style="{ 
    backgroundImage: 'url(' + require('@/assets/Altered_SD_new.png') + ')' }" 
     class="hero">
    <NavBar/>
    <WebsiteHeader/>
    <MusicComponent/>
    
    <EmailListForm/>
    <Profile  style="padding-top:200px" class="content" id="profile"/>
    <ImageCarousel style="padding-top:100px" class="content" id="explore"/>
    <!-- <SkillsCard style="padding-top:100px" id="abilities"/> -->
    <Timeline style="padding-top:100px"  id="timeline" class="content"/>

    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import WebsiteHeader from './components/WebsiteHeader.vue';
import Profile from './components/Profile.vue';
import Timeline from './components/Timeline.vue';
// import SkillsCard from './components/SkillsCard.vue';
import MusicComponent from './components/MusicComponent.vue';
import EmailListForm from './components/EmailListForm.vue';
import ImageCarousel from './components/ImageCarousel.vue';


export default {
  name: 'App',
  components: {
    NavBar,
    WebsiteHeader,
    Profile,
    Timeline,
    // SkillsCard,
    MusicComponent,
    EmailListForm,
    ImageCarousel,
  },
    data() {
    return {
      // eslint-disable-next-line global-require
      logo: window.location.origin + require('./assets/Prague.png'),
    };
  },

  metaInfo() {
    return {

// In your Netlify account, go to Site settings -> Build & Deploy -> Prerendering ...This will allow you to pre render on twitter!
// Potentially may have to go on Netlify and deploy---> click clear cache --> deploy site
// Twitter Validator: https://cards-dev.twitter.com/validator
// LinkedIn Validator: https://www.linkedin.com/post-inspector/inspect/https:%2F%2Faustinmarchese.co%2F
// Facebook Validator: https://developers.facebook.com/tools/debug/
      title: 'Welcome to My Webpage!',
      meta: [
          // Twitter Card
          {name: 'twitter:card', content: "Austin"},
          {name: 'twitter:title', content: 'My Personal Website'},
          {name: 'twitter:description', content: "As the world becomes more digital, your personal brand is everything. Having a personal website is a way to express yourself outside the confines of a traditoinal resume. Whether you're anything from an entrepreneur to a banker, a website allows you to show your potential employers, employees, clients or co-workers that you're more than just a resume."},
          // image must be an absolute path
          {name: 'twitter:image', content: this.logo},
          // Facebook OpenGraph
          {property: 'og:title', content: 'My Personal Website'},
          {property: 'og:site_name', content: 'My Personal Website'},
          {property: 'og:type', content: 'website'},
          {property: 'og:image', content:  this.logo},
          {property: 'og:description', content: "As the world becomes more digital, your personal brand is everything. Having a personal website is a way to express yourself outside the confines of a traditoinal resume. Whether you're anything from an entrepreneur to a banker, a website allows you to show your potential employers, employees, clients or co-workers that you're more than just a resume."},
      ]
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
