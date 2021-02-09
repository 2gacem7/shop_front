<template>
    <div class="row">
        <div class="q-pa-md">
            <div class="col-md-6 col-xs-12">
                <q-input v-model="myName" type="text" hint="Name" />
                <q-input v-model="myPrice" type="number" hint="price" />
                <q-input v-model="myDescription" filled clearable type="textarea" shadow-text />
                <q-input v-model="myImg" @input="val => { file = val[0] }" filled type="file" hint="jpg, jpeg, png"/>
                <q-btn @click.prevent="onSubmit()" class="q-mt-4" color="black" label="Add" />
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
            myName : '',
            myPrice: '',
            myDescription: '',
            myImg:''
        }
    },
    methods: {
        onSubmit(){
            this.$store.commit('addNewCard', {myName : this.myName, myPrice : this.myPrice, myDescription: this.myDescription,
            myImg : this.myImg} )
        }
    }
};
</script>