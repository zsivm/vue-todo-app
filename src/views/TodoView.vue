<template>
  <div class="bg-indigo-500 w-3/4 m-auto rounded-md px-4 pb-4 mt-8">
    <h2 class="text-2xl text-shadow text-white py-3">List: {{ currentTitle }}</h2>
    <AddTodo
      @add-todo="addTodo"
    />
    <Todos
      :todos="currentList.todos"
      @delete-todo="deleteTodo"
      @todo-clicked="saveTodos"
    />
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
      currentId: "",
      currentTitle: ""
    }
  },
  mounted() {
    this.currentId = this.$route.params.id;
    this.currentTitle = this.$route.params.name;
  
    if(localStorage.getItem("todoLists")) {
      try {
        this.todoLists = JSON.parse(localStorage.getItem("todoLists"));
        this.findCurrentListById();
      } catch(e) {
        localStorage.removeItem("todoLists");
      }
    }
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
    },
     findCurrentListById() {
      this.currentList = this.todoLists.filter(list => list.id == this.currentId)[0];
    },
  }
};
</script>

<style>
</style>