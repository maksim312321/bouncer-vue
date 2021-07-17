<template>
  <button class="btn">
      <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style>
.btn{
    padding: 5px;
    background:none;
    color: gray;
    border: 1px solid grey;
    border-radius: 12px;
}
</style>