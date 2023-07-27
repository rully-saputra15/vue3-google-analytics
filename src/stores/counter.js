import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://192.168.4.144:3001'

export const useMainStore = defineStore('main', {
  state: () => ({
    products: [],
    productDetail: {}
  }),
  actions: {
    async getProducts() {
      const { data } = await axios({
        url: `${baseUrl}/products`
      })
      console.log(data)
      this.products = data
    },
    async getProductById(id) {
      const { data } = await axios({
        url: `${baseUrl}/products/${id}`
      })
      this.productDetail = data
    },
    async buyProduct(id) {}
  }
})
