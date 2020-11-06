<template>
  <div>
    <CardFormat>
      <b-card no-body class="overflow-hidden">
                <div v-for="event in events" :key="event.eventTitle" >
                  <!-- {{event}} -->
                  {{event.eventColor}}
                                <vue-timeline-update
    :date="new Date(event.eventDate)"
    :title="event.eventTitle"
    :description="event.eventDescription"
    :category="event.eventCategory"
    :thumbnail="require('../assets/SanDiego.jpg')"
    icon="code"
    :color="event.eventColor"
  />      
                </div>
      </b-card>
    </CardFormat>
  </div>
</template>

<script>
  import CardFormat from './CardFormat.vue';

  export default {
    name: 'Timeline',
    components: {
      CardFormat,
    },
  data() {
    return {
        events: [ {
          eventTitle:"A ",
          eventDescription:"A",
          eventCategory:"A",
          eventColor: "blue",
          eventThumbnail:"",
          eventDate:'2017-02-26'
        },
                {
          eventTitle:"B",
          eventDescription:"B",
          eventCategory:"B",
          eventColor: "red",
          eventThumbnail:"",
          eventDate:'2017-02-29'
        }
        ],

      history: 
        {
          eventTitle:"Event Title",
          eventDescription:"ABCD",
          eventCategory:"Event Category",
          eventColor: "blue",
          eventThumbnail:"",
          eventDate:'2017-02-26'
        }
    }
  },
    computed: {},
  };
</script>
<style>
  .content-container {}

 .gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__description {
  color: red; 
 }

/* .gb-vue-timeline-update__title {
  color: gray;
}

.timeline-update__right .gb-vue-timeline-update__description {
    color: gray;
}

.gb-vue-timeline-update__description {
  color: gray;
} */

</style>