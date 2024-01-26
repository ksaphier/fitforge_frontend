<template>
    <div class="max-w-md mx-auto p-6 rounded-3xl border-2 border-neutral-500">
      <h2 class="mb-4">Login</h2>
      <form @submit.prevent="loginUser" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium">Username:</label>
          <input
            type="text"
            id="username"
            v-model="credentials.username"
            class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full text-neutral-500 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium">Password:</label>
          <input
            type="password"
            id="password"
            v-model="credentials.password"
            class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full text-neutral-500 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow"
        >
          Login
        </button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import axiosInstance from "../api/axiosInstance";
  
  interface Credentials {
    username: string;
    password: string;
  }
  
  const credentials = ref<Credentials>({
    username: "",
    password: "",
  });
  
  const loginUser = async () => {
    console.log("Login Credentials:", credentials.value);
    try {
      const response = await axiosInstance.post("auth/login", credentials.value);
      console.log('response: ', response.data);
      // Handle successful login here (e.g., redirect or store session data)
    } catch (error) {
      console.error("error: ", error);
      // Handle login error here (e.g., display error message)
    }
  };
  </script>
  