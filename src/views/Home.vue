<template>
    <NoLists v-if="isListsEmpty()" @open-modal="isModalOpen = true"/>
    <AddList v-if="isModalOpen" @add-list="addList" @close-add-modal="isModalOpen = false"/>
    <TodoLists @open-modal="isModalOpen = true" :todoLists="todoLists" v-if="!isListsEmpty()"/>
</template>

<script>
import NoLists from "../components/NoLists";
import AddList from "../components/AddList";
import TodoLists from "../components/TodoLists";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "App",
  data() {
    return {
      todoLists: [],
      isModalOpen: false,
    }
  },
  components: {
    NoLists,
    AddList,
    TodoLists
  },
  mounted() {
    if(localStorage.getItem("todoLists")) {
      try {
        this.todoLists = JSON.parse(localStorage.getItem("todoLists"));
      } catch(e) {
        localStorage.removeItem("todoLists");
      }
    }
  },
  methods: {
    addList(listName) {
      if(listName) {
        this.todoLists.push(
          {
            id: uuidv4(),
            name: listName,
            todos: []
          }
        );

        const parsed = JSON.stringify(this.todoLists);
        localStorage.setItem("todoLists", parsed);

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
