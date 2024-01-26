<template>
  <div class="max-w-md mx-auto p-6 rounded-3xl border-2 border-neutral-500">
    <h2 class="mb-4">Register</h2>
    <form @submit.prevent="registerUser" class="space-y-4">
      <CustomInput id="username" label="Username" v-model="user.username" />
      <CustomInput
        id="password"
        label="Password"
        type="password"
        v-model="user.password"
      />
      <CustomInput id="lastname" label="Last Name" v-model="user.lastname" />
      <CustomInput id="firstname" label="First Name" v-model="user.firstname" />
      <CustomInput id="country" label="Country" v-model="user.country" />
      <button
        type="submit"
        class="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow"
      >
        Register
      </button>
    </form>
    <p class="mt-4 text-center">
      Already have an account?
      <router-link to="/login" class="text-indigo-600 hover:text-indigo-700"
        >Login</router-link
      >
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axiosInstance from "../api/axiosInstance";
import CustomInput from '../components/CustomInput.vue';

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
    console.log("response: ", response.data);
  } catch (error) {
    console.error("error: ", error);
  }
};
</script>
