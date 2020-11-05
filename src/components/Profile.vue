<template>
<div>
<CardFormat>
      <b-card no-body class="overflow-hidden" >
        <b-row no-gutters>
              <b-col md="4">
        <b-card-body title="About Me">
          <b-card-text>
            I Like to Party
          </b-card-text>
        </b-card-body>
      </b-col>
      <b-col md="4">
        <b-img thumbnail small rounded="circle" :src="require('../assets/github_beerhall.jpg')" alt="Image 2"></b-img>
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
            Anywhere
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

import CardFormat from './CardFormat.vue';

export default {
  name: 'Profile',
  components: {
      CardFormat,
  },
  computed: {
  },
};
</script>
<style>
.content-container {
}

</style>
