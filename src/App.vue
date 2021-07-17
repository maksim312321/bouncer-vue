<template>
  <div>
    <my-modal
    v-model:show = "modalVisible"
    >
    <my-input 
    v-model = "user_name"
    placeholder = "Ваше имя"
    
    ></my-input>

    <my-button 
    style="margin-left: 5px;"
    @click = "setUpName"
    >Поехали!</my-button>
    </my-modal>

    <div class = "main__title">
      <h1>Приветсвую тебя, {{user_name}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user_name: "",
      modalVisible: true,
    }
  },
  methods:{
    setUpName(){
      this.modalVisible = false;


      
    }
  }
}
</script>

<style>
.main__title{

}
</style>
