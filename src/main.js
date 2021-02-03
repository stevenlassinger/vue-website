import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './main.css'
import BootstrapVue from 'bootstrap-vue';
import router from './router'

const VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -200,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  components: { App },

  render: h => h(App)

}).$mount('#app')