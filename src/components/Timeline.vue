<template>
  <div>
    <CardFormat header="Timeline" 
    quote="And I ain't gonna wait for nothing
'Cause that just ain't my style..." author="Mac Miller">
        <div v-for="event in events" :key="event.eventTitle" class="timeline-wrapper">
          <vue-timeline-update v-if="event.eventThumbnail == ''" :date="new Date(event.eventDate)"
            :title="event.eventTitle" 
            :description="event.eventDescription" 
            :category="event.eventType.category" 
            :icon="event.eventType.icon"
            :color="event.eventType.color" />
          <vue-timeline-update v-else :date="new Date(event.eventDate)" :title="event.eventTitle"
            :description="event.eventDescription" 
            :thumbnail="event.eventThumbnail"
            :category="event.eventType.category" 
            :icon="event.eventType.icon"
            :color="event.eventType.color"/>
        </div>
    </CardFormat>
  </div>
</template>

<script>
import CardFormat from './CardFormat.vue';
import PERSONAL_INFO from '../assets/index'
export default {
  name: 'Timeline',
  components: {
    CardFormat,
  },

  data() {
    return {
      events: PERSONAL_INFO.Events.reverse()
    }
  },
  computed: {},
};
</script>
<style>
  .content-container {}

  .timeline-wrapper{
    margin-right: 50px;
  }

.gb-vue-timeline-update .gb-vue-timeline-update__right .gb-vue-timeline-update__thumbnail {
  max-width: 50% !important;
}
 /* .gb-vue-timeline-update--light .gb-vue-timeline-update__right .gb-vue-timeline-update__description {
  color: red; 
 } */

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