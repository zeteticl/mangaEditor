import Vue from 'vue';
import VueKonva from 'vue-konva';
import vClickOutside from 'v-click-outside';
import loadFA from '@/scripts/fontawesome';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueKonva);
Vue.use(vClickOutside);
loadFA();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});