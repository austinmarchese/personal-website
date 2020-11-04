<template>
<div class="header-container">
  <b-card
    overlay
    :img-src="require('../assets/SanDiego.jpg')"
    img-alt="Card Image"
    class="text-left"
    style="padding-top:10px"
    text-variant="white"
    title="Austin Marchese"
    sub-title="Software Engineer"
  >
    <b-card-text class="header-text">
      Life's too short to take seriously. Enjoy.
    </b-card-text>
  </b-card>
</div>
</template>

<script>

export default {
  name: 'WebsiteHeader',
  components: {
  },
  computed: {
  },
};
</script>
<style>
.header-container {
    padding-top: 50px;
}
.header-text {
    text-align: left;
}
.banter-nav-bar {
  flex-grow: 0;
}

.desktop-nav {
    z-index: 2;
    background: white;
    position: relative;
}
</style>
