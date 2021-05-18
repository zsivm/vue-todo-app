<template>
  <div class="text-white text-center mt-10 w-3/4 m-auto">
    <h1 class="bg-indigo-500 text-shadow w-1/2 m-auto mb-5 p-2 text-2xl rounded-full">Todo Lists</h1>
    <ul class="rounded">
        <li
            class="text-left p-3"
            v-for="list in todoLists"
            :key="list.id"
        >   
            <router-link :to="{ name: 'TodoView', params: { name: list.name, id: list.id }}">
                <div class="flex justify-between">
                    <span class="inline-block align-middle">{{ list.name }}</span>
                    <span class="inline-block align-middle">&#8250;</span>
                </div>
            </router-link>
        </li>
    </ul>
    <button 
      @click="openModal"
      class="bg-indigo-600 box-shadow hover:bg-indigo-700 border rounded p-2 mt-10">
        Add List
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoLists",
  props: ["todoLists"],
  methods: {
    openModal() {
      this.$emit("open-modal");
    }
  },
};
</script>

<style scoped>
li:nth-child(odd) {
  background-color: rgb(129, 140, 248);
}

li:nth-child(even) {
  background-color: rgba(79, 70, 229);
}

li:nth-child(1) {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

li:nth-last-child(1) {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

li:hover {
  filter: brightness(80%);
}
</style>
