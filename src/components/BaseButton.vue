<script setup>
import { inject } from "vue"

const nightMode = inject("nightMode", false)

const props = defineProps({
  type: {
    type: String,
    default: "button"
  },
  customClass: {
    type: String
  }
})
</script>
<template>
  <button :class="[customClass, { nightmode: nightMode }]" :type="type">
    <slot></slot>
  </button>
</template>
<style scoped lang="scss">
button {
  background-color: #fdfdfd;
  padding: 10px 15px;
  margin: 20px 0;
  border: none;
  border-radius: 5px;
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 12px;
  color: rgb(75, 75, 75);
  box-shadow: 0 0 10px rgba(#535353, 0.3);

  &.nightmode {
    background-color: #535353;
    color: white;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
