<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores/counter'
import { event } from 'vue-gtag'
import { toast } from 'vue3-toastify'
export default {
  name: 'ProductDetail',
  computed: {
    ...mapState(useMainStore, ['productDetail'])
  },
  methods: {
    ...mapActions(useMainStore, ['getProductById']),
    handleGoBack() {
      this.$router.go(-1)
    },
    handleBuy() {
      event('buy-product', {
        'event-label': 'user-buy-product',
        value: this.$route.params.id
      })
      toast("You've bought this product!", {
        type: 'success'
      })
    }
  },
  created() {
    this.getProductById(this.$route.params.id)
  }
}
</script>

<template>
  <div class="flex flex-col space-y-3 p-4 flex-1 justify-center items-center relative">
    <span class="text-xl font-bold">Product Detail</span>
    <span class="absolute top-2 left-3" @click="handleGoBack">{{ `<-` }}</span>
    <div class="flex flex-col p-4 border border-sky-300 shadow-lg rounded-lg space-y-2">
      <span>{{ productDetail.title }}</span>
      <span>{{ productDetail.description }}</span>
      <span>{{ productDetail.price }}</span>
      <button class="px-2 py-1.5 bg-sky-300 text-black rounded-lg shadow-lg" @click="handleBuy">
        Buy
      </button>
    </div>
  </div>
</template>

<style></style>
