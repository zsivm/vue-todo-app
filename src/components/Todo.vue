<template>
  <div class="todo-row">
    <p :class="{ 'completed': isCompleted }" @click="markComplete">{{ todo.title }}</p>
    <button @click="$emit('delete-todo', todo.id)">X</button>
  </div>
</template>

<script>
export default {
  name: 'Todo',
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
  .todo-row {
    display: flex;
    justify-content: space-between;
    background-color: #eee;
    border-radius: 10px;
    margin-top: 10px;
  }
  p {
    margin-left: 10px;
    font-size: 18px;
  }
  button {
    width: 35px;
    height: 35px;
    margin: 10px;
    border-radius: 10px;
    background-color: #fff;
  }
</style>