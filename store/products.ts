import { Product } from '@/types';
import {defineStore} from 'pinia'

export const useProductStore = defineStore('products',{

    state:()=>({
        products: [],
        loading: false
    }),

    actions:{
       async getProducts(){
            this.loading = true
            const res = await fetch('https://api.escuelajs.co/api/v1/products/')
            const data:Product[] = await res.json()
            this.products = data
            this.loading = false
        }
    }
})