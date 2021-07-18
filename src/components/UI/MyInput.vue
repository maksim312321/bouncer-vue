<template>
<input type="text" :value = "modelValue" @input="updateValue" class="input" >
</template>

<script>
export default {
    name: "my-input",
    props: {
        modelValue: String,
    },
    methods: {
        updateValue(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style> 
.input{
    padding: 5px;
    border-radius: 20px;
    border: 1px solid grey;
    outline: none;
    transition: 0.2s;
}
.input:focus{
    background-color: rgb(185, 185, 185);
}

</style>