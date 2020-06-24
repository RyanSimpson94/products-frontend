<template>
  <main id="app">
    <label for="group" class="block">
      <span class="text-sm">Group by type</span>
      <input id="group" class="ml-2" type="checkbox" v-model="groupByType" />
    </label>
    <product-table :data="products" is-sortable v-if="!groupByType && products" @sort="toggleSort"></product-table>
    <section v-else>
      <div v-for="(group, index) in products" :key="index" class="my-6">
        <h2 class="font-bold my-2">{{ group[0] }}</h2>
        <product-table :data="group[1]" :show-type="false" v-if="group[1]"></product-table>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SortDirection from './constants/sorting';

export default {
  name: "App",
  components: {
    "product-table": () => import("./components/productTable")
  },
  data() {
    return {
      groupByType: false
    };
  },
  computed: {
    ...mapGetters(["products"])
  },
  methods: {
    ...mapActions(["getProducts"]),
    toggleSort(sortDir) {
      this.loadProducts(sortDir);
    },
    loadProducts(sortDir) {
      this.getProducts({ sort: sortDir, group: this.groupByType });
    }
  },
  watch: {
    groupByType() {
      this.loadProducts();
    }
  },
  mounted() {
    this.loadProducts(SortDirection.Ascending);
  }
};
</script>

<style scoped>
#app {
  margin: 2em;
}
</style>