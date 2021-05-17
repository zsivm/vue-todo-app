<template>
    <router-link to="/">
        <h1 class="text-shadow flex justify-center mt-4 text-4xl text-white">
                Vue Todo App
        </h1>
    </router-link>
    <router-view/>
</template>

<script>
export default {

}
</script>

<style>
  .box-shadow, input {
    box-shadow: 2px 2px rgba(0, 0, 0, 0.25);
  }
  .text-shadow {
    text-shadow: 2px 2px #333;
  }
</style>