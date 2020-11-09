<template>
    <div>
        <b-list-group>
            <b-list-group-item  variant="dark" v-for="skill in skills" :key="skill.skill"  class="d-flex justify-content-between align-items-center">
                <h7 class="skill-text">{{skill.skill}} </h7>
                    <star-rating v-bind:increment="0.5" v-bind:max-rating="5" :rating="skill.rating" :read-only="true"
                    inactive-color="#6c757d" 
                    active-color="#ff9900" 
                    :show-rating="false"
                    v-bind:star-size="20">
                </star-rating>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'
    export default {
        name: 'Timeline',
        components: {
            StarRating,
        },

          props: {
    skills: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
        computed: {},
    };
</script>
<style>
    .content-container {}


.skill-text {
    color: #6c757d !important;
}

    .timeline-wrapper {
        margin-right: 50px;
    }

.list-group-item-dark{
    background-color: #2c3e50;
}

.list-group-item {
background-color: transparent;
border-top: 1px solid #ddd;
border-radius: 0;
color: #fff;
}

</style>