<template>
    <div>
        <CardFormat header="Explore" quote="The biggest adventure you can take is to live the life of your dreams." author="Oprah">
            <b-row no-gutters>
                <b-col md="8" offset-md="2">
                    <b-carousel id="carousel-1" v-model="slide" :interval="2000" controls indicators
                        style="text-shadow: 0px 0px 2px #000" fade img-width="1024" img-height="480"
                        @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                        <b-carousel-slide v-for="location in locations" :key="location.location"
                            :caption="location.location" :img-src="location.image"></b-carousel-slide>
                    </b-carousel>
                </b-col>
            </b-row>
            <b-row no-gutters style="padding:20px">
                <b-col md="6" offset-md="3">
                    <world-map :countryData="this.countryData" />
                </b-col>
            </b-row>
        </CardFormat>
    </div>
</template>

<script>
    import WorldMap from 'vue-world-map'
    import CardFormat from './CardFormat.vue';
    import PERSONAL_INFO from '../assets/index'
    export default {
        name: 'ImageCarousel',
        components: {
            CardFormat,
            WorldMap,
        },
        data() {
            return {
                locations: PERSONAL_INFO.Locations,
                countryData: {
                    EMPTY: 0,
                    US: 1,
                },
                mainProps: {
                    width: 30,
                    height: 30,
                    class: 'm1'
                }
            }
        },
        computed: {},
        methods: {
            onSlideStart(slide) {
                if (slide == 0) {
                    this.countryData = {
                        EMPTY: 0,
                    }
                }
                const countryCode = this.locations[slide].countryCode
                console.log(slide, countryCode)
                this.countryData[countryCode] = 1
                console.log(slide, countryCode, this.countryData)
                //   I think Package Requires a complete change in the object reference to create a new highlighting
                this.countryData = {
                    ...this.countryData
                }

            },
            onSlideEnd() {
                this.sliding = false
            }
        }
    };
</script>
<style>
    .content-container {}

    .header-text {
        font-size: 50px;
    }
</style>