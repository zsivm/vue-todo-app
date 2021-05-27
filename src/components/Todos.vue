<template>
  <div>
    <ul>
      <li :key="todo.id" v-for="todo in todos">
        <Todo :todo="todo" @delete-todo="$emit('delete-todo', todo.id)" @todo-clicked="$emit('todo-clicked', $event)" />
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo';
export default {
  name: 'Todos',
  emits: ["delete-todo", "todo-clicked"],
  components: {
    Todo
  },
  props: [
    "todos"
  ]
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }
</style>