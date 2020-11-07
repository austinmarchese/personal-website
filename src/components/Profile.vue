<template>
  <div>
    <CardFormat>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-card-body title="Profile">
            <b-card-text>
              Software Engineer
            </b-card-text>
          </b-card-body>
        </b-row>
        <b-row no-gutters>
          <b-col md="4">
            <b-card-body title="About Me">
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
            <b-card-body title="Details">
              <b-card-text>
                <b-card-body title="Name">
                  <b-card-text>
                    Austin Marchese
                  </b-card-text>
                </b-card-body>
                <b-card-body title="Age">
                  <b-card-text>
                    A young 24
                  </b-card-text>
                </b-card-body>
                <b-card-body title="Location">
                  <b-card-text>
                    Anywhereeeeee
                    <div id="color-map" style="height: 300px;"></div>
                      <star-rating v-bind:increment="0.5"
             v-bind:max-rating="5"
             :rating="4"
             :read-only="true"
             inactive-color="#000"
             active-color="#f00"
             v-bind:star-size="20">
</star-rating>
<world-map :countryData="{
  US: 100,
  CA: 120,
  UK: 400,
}" />
                  </b-card-text>

                </b-card-body>

              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </CardFormat>
  </div>
</template>

<script>

  import StarRating from 'vue-star-rating'
  import WorldMap from 'vue-world-map'
  import CardFormat from './CardFormat.vue';

  export default {
    name: 'Profile',
    components: {
      CardFormat,
      StarRating,
      WorldMap
    },
    computed: {},
  };
</script>
<style>
  .content-container {}
</style>