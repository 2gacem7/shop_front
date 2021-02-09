<template>
    <div class="q-pa-md row items-start q-gutter-md justify-center">
        <div v-for="card in product" :key="card">
            <q-card class="my-card col-md-6 col-xs-12">
                <img :src= card.myImg class="responsive"
                style="max-width: 400px; height: 270px;"
                contain
                >
                <q-card-section>
                    <div class="text-h6">{{ card.myName }}</div>
                    <div class="text-subtitle2">{{ card.myPrice }} €</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                    {{ card.myDescription }}
                </q-card-section>
            </q-card>
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

<style lang="sass" scoped>
.my-card 
  width: 100%;
  height: 100%;
  max-width: 250px;
  height: 550px;
</style>
