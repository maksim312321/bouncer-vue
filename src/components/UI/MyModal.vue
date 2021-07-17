<template>
  <div class="modal" v-if="show" @click = "hideModal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-modal",
    props:{
      show: {
        type: Boolean,
        default: false,  
      }
    },
    methods: {
    hideModal(){
      this.$emit('update:show', false)
    }
    }
}
</script>

<style>
.modal{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
}
.modal__content{
    padding: 20px;
    margin: 100px auto auto auto;
    background: white;
    border-radius: 12px;
    min-height: 10px;
    min-width: 100px;
}
</style>