<template>
<div>
<CardFormat>
    <b-container fluid class="p-4 bg-dark">
  <b-row>
    <b-col>
        AA
    </b-col>
    <b-col>
      <b-img thumbnail rounded="circle" :src="require('../assets/github_beerhall.jpg')" alt="Image 2"></b-img>
    </b-col>
    <b-col>
        BB
    </b-col>
  </b-row>
</b-container>
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
