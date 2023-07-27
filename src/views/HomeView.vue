<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores/counter'
export default {
  computed: {
    ...mapState(useMainStore, ['products'])
  },
  methods: {
    ...mapActions(useMainStore, ['getProducts']),
    handleNavigateProductDetail(id) {
      this.$router.push({ name: 'product', params: { id } })
    }
  },
  created() {
    this.getProducts()
  }
}
</script>

<template>
  <div class="flex flex-row flex-1 justify-around p-10 space-x-2">
    <div
      @click="handleNavigateProductDetail(product.id)"
      v-for="product in products"
      :key="product.id"
      class="p-4 border border-sky-300 shadow-lg flex flex-col items-center space-y-2 rounded-lg"
    >
      <img :src="product.imgUrl" />
      <span>{{ product.title }}</span>
    </div>
  </div>
</template>
