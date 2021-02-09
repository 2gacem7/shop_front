<template>
    <div>
        <div v-for="card in product" :key="card">
         <p> {{ card.myName }} coucou</p>
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