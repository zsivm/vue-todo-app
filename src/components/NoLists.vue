<template>
  <div class="bg-indigo-400 mx-auto rounded mt-10 grid justify-items-center w-1/3 text-white">
    <p class="text-lg mt-2">There are no todo lists available.</p>
    <p class="text-sm mt-2">Would you like to add one?</p>
    <button class="border box-shadow rounded py-1 px-2 my-2" @click="$emit('open-modal')">
      Add List
    </button>
  </div>
</template>

<script>
export default {
    name: "NoLists"
}
</script>

<style scoped>
</style>