<template>
  <button :class="[clase, computedClasses]" :type="type" :disabled="disabled" @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, defineEmits } from 'vue';


const emit = defineEmits(['click']);

const props = defineProps({
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
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
  clase: {
    type: String
  },
});

const computedClasses = computed(() => ({
  'btn': true,
  'btn-primary': props.variant === 'primary',
  'btn-secondary': props.variant === 'secondary',
  'btn-disabled': props.disabled,
}));

const onClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style scoped></style>
