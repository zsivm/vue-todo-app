<template>
    <Modal @close-add-modal="$emit('close-add-modal')">
        <template #title>
            Add a list
        </template>
        <template #body>
        <form @submit.prevent class="inline-block text-center">
            <input v-model="listName" class="border px-2" type="text" placeholder="Type name for list...">
            <button class="border rounded p-1 bg-indigo-600 hover:bg-indigo-700 text-white mt-3" @click="addList">Add List</button>
        </form> 
        </template>
    </Modal>
</template>

<script>
import Modal from "./Modal";
export default {
    components: {
        Modal
    },
    data() {
        return {
            listName: ""
        }
    },
    methods: {
        addList() {
            this.$emit("add-list", this.listName);
            console.log("listName: ", this.listName);
        }
    }
}
</script>

<style>

</style>