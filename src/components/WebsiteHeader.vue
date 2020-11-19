<template>
<div class="header-container">
  <h1 class="display-4">Welcome...</h1>
  <p class="lead">People of Action are Favored by the Goddess of Good Luck</p>
  <hr class="my-4">
  <p class="lead">
    <b-button variant="secondary" href="#profile">Explore</b-button>
  </p>
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
    padding-top: 110px;
    /* padding-bottom: 500px; */
    margin:20px;
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
