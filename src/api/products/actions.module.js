import axios from './axiosConfig';
import { genericErrorHandler } from './../errorHandlers';

const getProducts = ({ commit }, data) => {
  axios
    .get('/products/', {
      params: {
        sort: data.sort,
        group: data.group
      }
    })
    .then(response => commit('setProducts', response.data))
    .catch(error => genericErrorHandler(error));
};

export default {
  getProducts
};