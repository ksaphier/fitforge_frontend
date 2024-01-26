<template>
  <div class="max-w-md mx-auto p-6 rounded-3xl border-2 border-neutral-500">
    <h2 class="mb-4">Login</h2>
    <form @submit.prevent="loginUser" class="space-y-4">
      <CustomInput
        id="username"
        label="Username"
        v-model="credentials.username"
      />
      <CustomInput
        id="password"
        label="Password"
        type="password"
        v-model="credentials.password"
      />
      <button
        type="submit"
        class="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow"
      >
        Login
      </button>
    </form>
    <p class="mt-4 text-center">
      Don't have an account?
      <router-link to="/register" class="text-indigo-600 hover:text-indigo-700"
        >Register</router-link
      >
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axiosInstance from "../api/axiosInstance";
import CustomInput from "../components/CustomInput.vue";

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
    console.log("response: ", response.data);
    // Handle successful login here
  } catch (error) {
    console.error("error: ", error);
    // Handle login error here
  }
};
</script>
