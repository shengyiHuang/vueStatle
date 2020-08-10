import Vue from 'vue'
import App from './App.vue'
import Vant, { Lazyload } from 'vant';
import router from './router/index'
import 'vant/lib/index.css';

import store from './store'

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Lazyload, {
  lazyComponent: true,
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
