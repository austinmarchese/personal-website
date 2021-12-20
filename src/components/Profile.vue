<template>
  <div>
    <CardFormat header="Profile" quote="You gotta risk it to get the biscuit." author="Anonymous">
      <b-row no-gutters>
        <b-col md="4">
          <b-card-body style="font-size: 28px;" sub-title="About Me">
            <b-card-text>
              A true leader is someone that can inspire and empower others, and that is something I strive to do every day. My goal is to help change the world for the better.
              Steve Jobs once said, “Everything around you that you call life, was made up by people that were no smarter than you.”
            </b-card-text>
          </b-card-body>
          <b-card-body>
            <b-card-text>
              <b-button-group vertical>
                <b-button-group>
                  <b-button onclick=" window.open('https://github.com/austinmarchese','_blank')">
                    <b-img v-bind="mainProps" 
                     thumbnail :src="require('../assets/github_black.svg')" alt="Image 2">
                    </b-img>
                    Github
                  </b-button>
                  <b-button onclick=" window.open('https://www.linkedin.com/in/austin-robert-marchese/','_blank')">
                    <b-img v-bind="mainProps" thumbnail :src="require('../assets/linkedin_black.svg')" alt="Image 2">
                    </b-img>
                    LinkedIn
                  </b-button>
                </b-button-group>
                <b-button-group>
                  <b-button onclick=" window.open('https://austinmarchese.medium.com/','_blank')">
                    <b-img v-bind="mainProps" thumbnail :src="require('../assets/medium_black.svg')" alt="Image 2">
                    </b-img>
                    Medium
                  </b-button>
                  <b-button onclick=" window.open('https://twitter.com/MacNCheeasy','_blank')">
                    <b-img v-bind="mainProps" thumbnail :src="require('../assets/twitter_black.svg')" alt="Image 2">
                    </b-img>
                    Twitter
                  </b-button>
                </b-button-group>
                <b-button-group>
                  <!--JamesThomson ANswer  https://forum.vuejs.org/t/how-to-download-a-file-stored-in-local-directory-using-vue-js/75973/5 -->
                <b-button  onclick=" window.open('/assets/Austin Marchese Resume.pdf','_blank')" >
                    Resume
                  </b-button>
                  </b-button-group>
              </b-button-group>
              <!-- <b-img thumbnail rounded="circle"  alt="Image 2"></b-img>                 -->
            </b-card-text>
          </b-card-body>
        </b-col>
        <b-col md="4" style="margin:auto">
          <b-img thumbnail rounded="circle"  v-bind="headshot" :src="require('../assets/twitterIcon.png')" alt="Image 2"></b-img>
        </b-col>
        <b-col md="4">
          <b-card-body>
            <b-card-text>
              <b-card-body sub-title="Name">
                <b-card-text>
                  Austin Marchese
                </b-card-text>
              </b-card-body>
              <b-card-body sub-title="Age">
                <b-card-text>
                  A young 25
                </b-card-text>
              </b-card-body>
              <b-card-body sub-title="Location">
                <b-card-text>
                  San Diego, California....For now
                </b-card-text>

              </b-card-body>

            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
      <!-- <b-row no-gutters>
             <world-map :countryData="{
  US: 100,
  CA: 120,
  UK: 400,
}" />
      </b-row> -->
    </CardFormat>
  </div>
</template>

<script>

  // import WorldMap from 'vue-world-map'
  import CardFormat from './CardFormat.vue';

  export default {
    name: 'Profile',
    components: {
      CardFormat,
      // WorldMap,
    },
        data() {
      return {
        headshot:{ width: 260, height: 260, class: 'm1' },
        mainProps: { width: 30, height: 30, class: 'm1' }
      }
    },
    computed: {},
  };
</script>
<style >


  .content-container {}

.header-text {
  font-size:50px;
}


</style>