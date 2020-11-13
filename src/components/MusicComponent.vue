<template>
<div class="music-container">
    <b-card no-body bg-variant="dark" text-variant="white" class="overflow-hidden">
        <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/AbV-Q6tz4B8?start=5"
  ></b-embed>
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



.music-container {
    width:40%;
    margin:auto;
    /* padding-top: 110px; */
    padding-bottom: 100px;
    /* margin:20px; */
}

@media (max-width: 800px)  {
.music-container{
  width:85%;
    margin:auto;
}
}

</style>
