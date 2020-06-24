import Vue from 'vue'
import App from './App.vue'
import Store from './store';

import '@fortawesome/fontawesome-free/css/all.css';
import './assets/css/index.css';

Vue.config.productionTip = false

import { getCurrencySymbol } from './constants/currency';
Vue.filter('currency', (price) => {
  const symbol = getCurrencySymbol(price.currency);
  return `${symbol}${parseFloat(price.value).toFixed(2)}`;
});

new Vue({
  store: Store,
  render: h => h(App)
}).$mount('#app')
