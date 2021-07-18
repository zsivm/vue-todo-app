<template>
    <NoLists v-if="isNoListsVisible" @open-modal="isModalOpen = true"/>
    <AddList v-if="isModalOpen" @add-list="addList" @close-add-modal="isModalOpen = false"/>
    <TodoLists @open-modal="isModalOpen = true" :todoLists="todoLists" v-if="!isListsEmpty()"/>
</template>

<script>
import NoLists from "../components/NoLists";
import AddList from "../components/AddList";
import TodoLists from "../components/TodoLists";
import { v4 as uuidv4 } from 'uuid';
import { db } from "../firebase";

export default {
  name: "App",
  data() {
    return {
      todoLists: [],
      isModalOpen: false,
      isNoListsVisible: false,
    }
  },
  components: {
    NoLists,
    AddList,
    TodoLists
  },
  mounted() {
    db.collection("todoLists").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
          const data = {
          //'id': doc.id,
          'id': doc.data().id,
          'name': doc.data().name,
          'todos': doc.data().todos
          }
          this.todoLists.push(data);
      });

      this.isNoListsVisible = this.todoLists.length ? false : true;

    }).catch(error => {
      console.log("Error getting document", error);
    });
  },
  methods: {
    addList(listName) {
      if(listName) {

        let list = {
          id: uuidv4(),
          name: listName,
          todos: []
        };

        db.collection("todoLists").add(list);
        this.todoLists.push(list);

        this.isModalOpen = false;
      }
    },
    isListsEmpty() {
      return this.todoLists.length == 0;
    }
  }
};
</script>

<style>
  body {
    background-color: #354567;
  }
</style>
