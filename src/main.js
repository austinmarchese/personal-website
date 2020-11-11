import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import axios from 'axios';

Vue.prototype.$http = axios

// Install BootstrapVue
Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import VueTimeline from "@growthbunker/vuetimeline";

import VueWorldMap from 'vue-world-map';

import "../src/assets/styling.scss";

Vue.use(VueWorldMap);



import WorldMapVue from 'world-map-vue';

Vue.use(WorldMapVue);

import { EmbedPlugin } from 'bootstrap-vue'
Vue.use(EmbedPlugin)

Vue.use(VueTimeline, {
  // Specify the theme to use: dark or light (dark by default).
  theme: "dark",
});

import Meta from 'vue-meta';
Vue.use(Meta);
new Vue({
  render: h => h(App),
}).$mount('#app')