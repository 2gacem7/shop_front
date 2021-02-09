<template>
<div>
<Product />
<Shop />
</div>
</template>

<script>
import Product from './components/Product.vue'
import Shop from './components/Shop.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Product,
    Shop
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
