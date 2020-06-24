<template>
  <table class="table-auto m-4 table--animated">
      <thead>
        <th class="px-4 py-2">Name</th>
        <th class="px-4 py-2">Department</th>
        <th class="px-4 py-2" v-if="showType">Type</th>
        <th class="px-4 py-2">
          <a href="javascript:" @click="sort" v-if="isSortable">
            Price
            <span v-if="sortDir" class="fas" :class="[ sortDir === directions.Ascending ? 'fa-caret-up' : 'fa-caret-down' ]"></span>
          </a>
          <span v-else>Price</span>
        </th>
      </thead>
      <tbody>
        <tr v-for="product in data" :key="product.id">
          <td class="border px-4 py-2">{{ product.name }}</td>
          <td class="border px-4 py-2">{{ product.department }}</td>
          <td class="border px-4 py-2" v-if="showType">{{ product.type }}</td>
          <td class="border px-4 py-2">
            <span v-if="product.price">
              {{ product.price | currency }}
            </span>
            <span v-else>-</span>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script type="text/javascript">
  import { SortDirection } from '../constants/sorting';

  export default {
    name: 'ProductTable',
    props: {
      data: {
        type: Array,
        required: true
      },
      showType: {
        type: Boolean,
        required: false,
        default: true
      },
      isSortable: {
        type: Boolean,
        required: false
      }
    },
    data() {
      return {
        sortDir: SortDirection.Ascending,
      }
    },
    computed: {
      directions: () => SortDirection
    },
    methods: {
      sort() {
        this.sortDir = this.sortDir === this.directions.Descending ? this.directions.Ascending : this.directions.Descending;
        this.$emit('sort', this.sortDir);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes slideInUp {
    0% {
      transform: translateY(100%);
      visibility: visible;
    }
    100% { transform: translateY(0); opacity: 1; }
  }

  .table--animated {
    @for $i from 0 through 15 {
      tr:nth-child(#{$i}) {
        animation: slideInUp 0.25s ease-in forwards;
        animation-delay: #{$i * 75ms};
        opacity: 0;
      }
    }
  }
</style>