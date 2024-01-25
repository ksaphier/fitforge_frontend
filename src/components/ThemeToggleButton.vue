<template>
  <button
    @click="toggleTheme"
    class="bg-blue-500 text-white font-bold py-2 px-3 rounded-full hover:bg-blue-700 transition duration-300"
  >
    <ion-icon name="sunny-outline" v-if="theme === 'dark'"></ion-icon>
    <ion-icon name="moon-outline" v-else-if="theme === 'light'"></ion-icon>
    <ion-icon name="help-outline" v-else></ion-icon>
  </button>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

const theme = ref("dark");

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
};

watch(
  theme,
  (newTheme) => {
    document.documentElement.className = newTheme;
  },
  { immediate: true }
);

const saveThemePreference = () => {
  localStorage.setItem("theme", theme.value);
};

watch(theme, saveThemePreference, { immediate: true });
</script>
