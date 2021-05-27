<template>
  <div class="box-shadow flex justify-between w-full bg-white mt-2 rounded-lg shadow-md">
    <span 
      class="ml-3 my-3 py-2"
      :class="{ 'completed': isCompleted }"
      @click="markComplete">
        {{ todo.title }}
    </span>
    <button
      class="mx-3 my-3 border rounded-md px-3 hover:bg-gray-100" 
      @click="$emit('delete-todo', todo.id)">
        X
    </button>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  emits: ["delete-todo", "todo-clicked"],
  props: [
    "todo"
  ],
  data() {
      return {
          isCompleted: this.todo.completed
      }
  },
  methods: {
    markComplete() {
      this.isCompleted = !this.isCompleted;
      this.$emit("todo-clicked", {id: this.todo.id, title: this.todo.title, completed: this.isCompleted});
    }
  }
}
</script>

<style scoped>
  .completed {
    text-decoration: line-through;
    text-decoration-color: red;
  }
</style>