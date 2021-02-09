<template>
    <div>
    <div v-for="card in product" :key="card">
    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img :src= card.myImg>
      <q-card-section>
        <div class="text-h6">{{ card.myName }}</div>
        <div class="text-subtitle2">{{ card.myPrice }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ card.myDescription }}
      </q-card-section>
    </q-card>
    </div>
    </div>
    </div>
    
</template>

<script>


export default {
    data () {
        return {
            product: this.$store.state.cards
        }
    }
}
</script>

<style>

</style>