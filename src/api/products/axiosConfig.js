import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.baseURL = "https://floating-fortress-99330.herokuapp.com";
Vue.use(VueAxios, axios);

export default axios;
