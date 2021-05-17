<template>
    <NoLists v-if="isListsEmpty()" @open-modal="isModalOpen = true"/>
    <Modal v-if="isModalOpen" @close-add-modal="isModalOpen = false">
      <template #title>
        Add a list
      </template>
      <template #body>
        <form @submit.prevent class="inline-block text-center">
          <input v-model="listName" class="border" type="text" placeholder="Type name for list...">
          <button class="border rounded p-1 bg-blue-500 text-white mt-3" @click="addList">Add List</button>
        </form> 
      </template>
    </Modal>
    <TodoLists @open-modal="isModalOpen = true" :todoLists="todoLists" v-if="!isListsEmpty()"/>
</template>

<script>
import NoLists from "../components/NoLists";
import Modal from "../components/Modal";
import TodoLists from "../components/TodoLists";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "App",
  data() {
    return {
      todoLists: [],
      isModalOpen: false,
      listName: "",
    }
  },
  components: {
    NoLists,
    Modal,
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
    addList() {
      if(this.listName) {
        this.todoLists.push(
          {
            id: uuidv4(),
            name: this.listName,
            todos: []
          }
        );

        const parsed = JSON.stringify(this.todoLists);
        localStorage.setItem("todoLists", parsed);

        this.isModalOpen = false;
        this.listName = "";
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
