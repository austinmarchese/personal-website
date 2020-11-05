<template>
<div>
  <b-navbar  fixed='top' toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#profile">Profile</b-nav-item>
        <b-nav-item href="#profile">Experiences</b-nav-item>
        <b-nav-item href="#profile">Abilities</b-nav-item>
        <b-nav-item href="#profile">Projects</b-nav-item>
        <b-nav-item href="#profile">Contacts</b-nav-item>
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
    </b-collapse>
          <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" disabled>BTC</b-nav-item>
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  </b-navbar>
</div>
</template>

<script>

export default {
  name: 'NavBar',
  components: {
  },
  computed: {
  },
};
</script>
<style>
.banter-nav-bar {
  flex-grow: 0;
}

.desktop-nav {
    z-index: 2;
    background: white;
    position: relative;
}
</style>
