<template>
  <div>
    <label :for="id" class="block text-sm font-medium">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      @input="updateValue"
      class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-full text-neutral-500 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
</template>
<script setup lang="ts">
defineProps({
  id: String,
  label: String,
  type: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  emit("update:modelValue", inputElement.value);
};
</script>
