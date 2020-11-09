<template>
  <div>
    <CardFormat header="Profile" quote="You gotta risk it to get the buscuit." author="Plato">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-body style="font-size: 28px;" sub-title="About Me">
              <b-card-text>
                I'm a passionate developer who knows how to establish a 
                collaborative and fun work environment that leads to 
                consistent high quality work. 
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="4">
            <b-img thumbnail rounded="circle" :src="require('../assets/image 11.png')" alt="Image 2"></b-img>
            <!-- <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img> -->
          </b-col>
          <b-col md="4">
            <b-card-body >
              <b-card-text>
                <b-card-body sub-title="Name">
                  <b-card-text>
                    Austin Marchese
                  </b-card-text>
                </b-card-body>
                <b-card-body sub-title="Age">
                  <b-card-text>
                    A young 24
                  </b-card-text>
                </b-card-body>
                <b-card-body sub-title="Location">
                  <b-card-text>
                    New York, New York
                    <!-- <div id="color-map" style="height: 300px;"></div> -->
<!-- <world-map :countryData="{
  US: 100,
  CA: 120,
  UK: 400,
}" /> -->
                  </b-card-text>

                </b-card-body>

              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
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
    computed: {},
  };
</script>
<style >


  .content-container {}

.header-text {
  font-size:50px;
}


</style>