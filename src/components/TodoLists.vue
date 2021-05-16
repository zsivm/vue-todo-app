<template>
  <div class="text-white text-center mt-10 w-3/4 m-auto">
    <h1 class="bg-blue-600 mb-5 p-2 text-2xl rounded-full">Lists</h1>
    <ul class="rounded">
        <li
            class="text-left p-3"
            v-for="list in todoLists"
            :key="list.id"
        >   
            <router-link :to="'/todo/' + list.name">
                <div class="flex justify-between">
                    <span class="inline-block align-middle">{{ list.name }}</span>
                    <span class="inline-block align-middle">&#8250;</span>
                </div>
            </router-link>
        </li>
    </ul>
    <button @click="openModal" class="bg-blue-600 border rounded p-2 mt-10">
      Add New List
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

<style>
li:nth-child(odd) {
  background-color: rgb(96, 165, 250);
}

li:nth-child(even) {
  background-color: rgba(147, 197, 253);
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
