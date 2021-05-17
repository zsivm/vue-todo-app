<template>
  <div>
    <form class="w-full flex items-center" @submit.prevent="addTodo">
      <input class="box-shadow w-3/4 text-base pl-3 rounded-md py-2 mr-2" placeholder="Do something..." type="text" v-model="title" name="title">
      <button class="box-shadow text-white text-xl bg-indigo-600 hover:bg-indigo-700 rounded-full px-4 py-2" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();

      const newTodoObj = {
        id: uuidv4(),
        title: this.title,
        completed: false
      }

      this.$emit('add-todo', newTodoObj);
      this.title = '';
    }
  }
}
</script>

<style scoped>
</style>