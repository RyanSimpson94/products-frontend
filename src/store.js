import Vue from 'vue';
import Vuex from 'vuex';

import ProductsModule from './api/products/products.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: ProductsModule
  }
})
