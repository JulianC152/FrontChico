1<template>
  <div :class="' search-bar '">
    <input type="text" :class="'clase'" :placeholder="props.placeholder" v-model="searchQuery" @input="emitSearch" />
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
    default: "border-0  outline-none",
  },
  searchIcon: {
    type: String,
    default: "",
  },

});

const emit = defineEmits(["update:modelValue"]);

const searchQuery = ref("");

const emitSearch = () => {
  emit("update:modelValue", searchQuery.value);
  console.log(searchQuery.value);

};
</script>

<style scoped>
.clase {
  width: 80%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0px 30px 0px 12px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 15px;
  color: #898989;
  cursor: pointer;
}
</style>
