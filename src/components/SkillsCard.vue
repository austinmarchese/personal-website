<template>
    <div>
        <CardFormat header="Abilities" 
        quote="Do Your Best and Forget the Rest"
        author="Tony Horton">
                <b-row no-gutters>
                    <b-col md="4">
                        <b-card-body sub-title="Languages">
                            <b-card-text>
                                <Skills :skills="skills.languages" />
                            </b-card-text>
                        </b-card-body>

                    </b-col>
                    <b-col md="4">
                        <b-card-body sub-title="Frameworks">
                            <b-card-text>
                                <Skills :skills="skills.frameworks" />
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    <b-col md="4">
                        <b-card-body sub-title="Other">
                            <b-card-text>
                                <Skills :skills="skills.other" />
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
        </CardFormat>
    </div>
</template>

<script>

  import CardFormat from './CardFormat.vue';
  import Skills from './Skills.vue';
  import PERSONAL_INFO from '../assets/index'

  export default {
    name: 'Profile',
    components: {
      CardFormat,
      Skills,
    },
    
        data() {
            return {
                skills: PERSONAL_INFO.Skills            }
        },
    computed: {},
  };
</script>
<style>
  .content-container {}
</style>