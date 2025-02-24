<template>
  <div class="">
    <span :class="searchIcon">
      🔍
    </span>
    <input type="text" :class="clase" :placeholder="props.placeholder" v-model="searchQuery" @input="emitSearch" />

  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "Buscar...",
  },
  clase: {
    type: String,
    default: "p-2 border border-gray-300 rounded-md w-full",
  },
  searchIcon: {
    type: String,
    default: "margin-left: 10px  font- size: 18px  color: gray",
  },

});

const emit = defineEmits(["update:modelValue"]);

const searchQuery = ref("");

const emitSearch = () => {
  emit("update:modelValue", searchQuery.value);
  console.log(searchQuery.value);

};
</script>

<style scoped></style>
