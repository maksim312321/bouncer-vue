<template>
  <div>
    <my-modal
    v-model:show = "modalVisible">

    <my-input 
    v-model = "user_name"
    placeholder = "Ваше имя"
    ></my-input>

    <my-button 
    style="margin-left: 5px;"
    @click = "setUpName"
    >Поехали!
    </my-button>

    </my-modal>

  <div v-if="!modalVisible" class="content__wrapper">

      <div class = "main__title">

      <h1>Приветствую тебя, {{user_name}}</h1>

      <my-button class="nameRefresh" @click="nameRefresh">
        Это не я!
      </my-button>
      </div>

      <div class="todo">
        <todo-list> </todo-list>
      </div>
    
</div>
</div>
</template>

<script>
import TodoList from './components/todoList.vue';
export default {
  components: {
    TodoList,
  },
  data(){
    return{ 
      user_name: '',
      modalVisible: true,
      arrOfDays: [
        arrOfToDo:[
          // TodoItem: String,
        ]
      ]
    }
  },
  methods:{
    
    setUpName(){//фиксируем имя пользователяы
      this.modalVisible = false;
      localStorage.setItem("user_name", this.user_name);
    },

    nameRefresh(){
      this.modalVisible = true;
    }
  },


  beforeMount(){//ф-я срабатывающая до загрузки приложения
    if(localStorage.getItem("user_name")!=null){
      this.modalVisible = false;
      this.user_name = localStorage.getItem('user_name');
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
div{
  font-family: Roboto;
}
.todo__list{
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.main__title{
  display: flex;
 justify-content: center;
 align-items: center;
}
.nameRefresh{ 
  padding: 50px 50px;
  justify-self: end;
  margin-left: 20px;
}

</style>
