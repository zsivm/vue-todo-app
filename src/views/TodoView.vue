<template>
  <div class="bg-indigo-500 w-3/4 m-auto rounded-md px-4 pb-4 mt-8">
    <h2 class="text-2xl text-shadow text-white py-3">List: {{ currentList.title }}</h2>
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
import { db } from "../firebase";
export default {
  name: "TodoView",
  components: {
    AddTodo,
    Todos
  },
  data() {
    return {
      documentId: "",
      currentList: {
        id: "",
        title: "",
        todos: []
      },
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('todoLists')
    .where('id', '==', to.params.id)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
          vm.documentId = doc.id
          vm.currentList.id = doc.data().id
          vm.currentList.title = doc.data().name
          vm.currentList.todos = doc.data().todos
        })
      })
    })
  },
  // watch: {
  //   '$route': 'fetchData'
  // },
  methods: {
    // fetchData() {
    //   db.collection("todoLists")
    //   .where('id', '==', this.$route.params.id)
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       this.documentId = doc.id
    //       this.currentList.id = doc.data().id
    //       this.currentList.title = doc.data().name
    //       this.currentList.todos = doc.data().todos
    //     })
    //   })
    // },
    addTodo(newTodo) {
      if(newTodo.title) {
        this.currentList.todos.push(newTodo);
        this.saveTodos();
      }
    },
    async saveTodos(completedTodo) {
      if(completedTodo !== undefined) {
        let i = this.currentList.todos.findIndex(todo => todo.id == completedTodo.id);
        this.currentList.todos[i] = completedTodo;
      }

      try {
        await db.collection("todoLists").doc(this.documentId).update({
          todos: this.currentList.todos
        });

        console.log("Document successfully updated");
      } 
      catch (error) {
        console.error("Error updating document: ", error);
      }
      
    },
    deleteTodo(todoId) {
      this.currentList.todos = this.currentList.todos.filter(todo => todo.id != todoId);
      this.saveTodos();
    }
  }
};
</script>

<style>
</style>