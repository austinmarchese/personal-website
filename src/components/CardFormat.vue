<template>
<div>
<b-container class="content-container">
  <b-row class="text-center">
    <b-col></b-col>
    <b-col cols="12">
        <slot></slot>
        </b-col>
    <b-col></b-col>
  </b-row>
</b-container>
</div>
</template>

<script>

export default {
  name: 'CardFormat',
  components: {
  },
  computed: {
  },
};
</script>
<style>
.content-container {
}

</style>
