<template>
<Product />
</template>

<script>
import Product from './components/Product.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Product
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
