<template>
    <div class="row">
        <div class="q-pa-md">
            <div class="col-md-6 col-xs-12">
                <q-input q-model="myName" type="text" hint="Name" />
                <q-input q-model="myPrice" type="number" hint="price" />
                <q-input q-model="myDescription" filled clearable type="textarea" :shadow-text="textareaShadowText" 
                    @keydown="processTextareaFill" @focus="processTextareaFill"/>
                <q-input q-model="myImg" @input="val => { file = val[0] }" filled type="file" hint="jpg, jpeg, png"/>
                <q-btn @click.prevent="onSubmit()" class="q-mt-4" color="black" label="Add" />
            </div>
        </div>
    </div>
</template>
 

<script>
export default {
    props: ['product'],
    methods: {
        onSubmit(){
            this.$emit('submit', this.product)
        }
    }
   
    
};
</script>