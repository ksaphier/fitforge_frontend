<template>
  <div class="max-w-md mx-auto p-6 rounded-3xl border-2 border-neutral-500">
    <h2 class="mb-4">Register</h2>
    <form @submit.prevent="registerUser" class="space-y-4">
      <div>
        <label for="username" class="block text-sm font-medium"
          >Username:</label
        >
        <input
          type="text"
          id="username"
          v-model="user.username"
          class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full text-neutral-500 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium"
          >Password:</label
        >
        <input
          type="password"
          id="password"
          v-model="user.password"
          class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full text-neutral-500 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label for="lastname" class="block text-sm font-medium"
          >Last Name:</label
        >
        <input
          type="text"
          id="lastname"
          v-model="user.lastname"
          class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full text-neutral-500 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label for="firstname" class="block text-sm font-medium"
          >First Name:</label
        >
        <input
          type="text"
          id="firstname"
          v-model="user.firstname"
          class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full text-neutral-500 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label for="country" class="block text-sm font-medium">Country:</label>
        <input
          type="text"
          id="country"
          v-model="user.country"
          class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full text-neutral-500 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        type="submit"
        class="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axiosInstance from "../api/axiosInstance";

interface User {
  username: string;
  password: string;
  lastname: string;
  firstname: string;
  country: string;
}

const user = ref<User>({
  username: "",
  password: "",
  lastname: "",
  firstname: "",
  country: "",
});

const registerUser = async () => {
  console.log("User Data:", user.value);
  try {
    const response = await axiosInstance.post("auth/register", user.value);
    console.log('response: ',response.data);
  } catch (error) {
    console.error("error: ", error);
  }
};
</script>
