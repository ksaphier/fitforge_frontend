<template>
  <div>
    <nav
      class="fixed top-4 left-4 right-4 p-2 z-50 rounded-full flex justify-between border-2 border-neutral-500"
    >
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/">Exercises</router-link>
      <ThemeToggleButton />
    </nav>
    <router-view />
  </div>
</template>
<script setup lang="ts">
import ThemeToggleButton from "./components/ThemeToggleButton.vue";
</script>
<style scoped>
nav a {
  margin: auto;
}
</style>
