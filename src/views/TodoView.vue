<template>
  <div class="bg-blue-500">
    <AddTodo @add-todo="addTodo" />
    <Todos :todos="currentList.todos" @delete-todo="deleteTodo" @todo-clicked="saveTodos" />
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";
export default {
  name: "TodoView",
  components: {
    AddTodo,
    Todos
  },
  data() {
    return {
      todoLists: [],
      currentList: {},
      currentId: ""
    }
  },
  mounted() {
    this.currentId = this.$route.params.id;
    console.log("currentId: ", this.currentId);
  
    if(localStorage.getItem("todoLists")) {
      try {
        this.todoLists = JSON.parse(localStorage.getItem("todoLists"));
        console.log("todoLists: ", this.todoLists);
        //this.findCurrentListById();
        findCurrentListById();
      } catch(e) {
        localStorage.removeItem("todoLists");
      }
    }

    console.log(this.currentList);
  },
  computed: {
    
    findCurrentListById() {
      this.currentList = this.todoLists.filter(list => list.id == this.currentId)[0];
    },
  },
  methods: {
    addTodo(newTodo) {
      if(newTodo.title) {
        this.currentList.todos.push(newTodo);
        this.saveTodos();
      }
    },
    saveTodos(completedTodo) {
      if(completedTodo !== undefined) {
        let i = this.currentList.todos.findIndex(todo => todo.id == completedTodo.id);
        this.currentList.todos[i] = completedTodo;
      }
      const parsed = JSON.stringify(this.todoLists);
      localStorage.setItem("todoLists", parsed);
    },
    deleteTodo(todoId) {
      this.currentList.todos = this.currentList.todos.filter(todo => todo.id != todoId);
      this.saveTodos();
    }
  }
};
</script>

<style></style>