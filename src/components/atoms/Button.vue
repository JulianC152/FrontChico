<template>
  <button :class="class" :type="type" :disabled="disabled" @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

defineProps({
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'primary', // Puede ser 'primary', 'secondary', etc.
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String
  },
});

defineEmits(['click']);

const computedClasses = computed(() => ({
  'btn': true,
  'btn-primary': variant === 'primary',
  'btn-secondary': variant === 'secondary',
  'btn-disabled': disabled,
}));

const onClick = (event) => {
  if (!disabled) {
    emit('click', event);
  }
};
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background-color: blue;
  color: white;
}

.btn-secondary {
  background-color: gray;
  color: white;
}

.btn-disabled {
  background-color: lightgray;
  cursor: not-allowed;
}
</style>
