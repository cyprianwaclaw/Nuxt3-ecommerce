<template>
    <div>
        <div v-if="productStore.loading">
            <P>Ładowanie...</P>
        </div>
        <div v-for="product in productStore.products" :key="product.id">
            {{product.images[1]}}
        </div>
    </div>
</template>

<script setup lang="ts">

import {useProductStore} from "@/store/products"
const productStore = useProductStore()
productStore.getProducts()

</script>

<style scoped>

</style>