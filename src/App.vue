<script setup>
import { ref, provide } from "vue"
import AppHeaderMenu from "./components/AppHeaderMenu.vue"
import ContactForm from "./components/ContactForm.vue"

let nightMode = ref(false)

let switchMode = function (newMode) {
  nightMode.value = newMode
}

provide("nightMode", nightMode)
</script>

<template>
  <div :class="{ nightmode: nightMode }" class="app-div">
    <AppHeaderMenu @mode-changed="switchMode" />
    <RouterView />
    <ContactForm />
  </div>
</template>

<style lang="scss">
.app-div {
  color: rgb(55, 55, 55);
  background-color: rgb(249, 249, 249);
  padding-top: 70px;

  .title-div {
    text-align: center;
    h2 {
      color: rgba(#00c0c7, 0.4);
    }
    h3 {
      font-size: 16px;
      font-weight: 600;
      position: relative;
      top: -20px;
    }
  }

  p {
    color: rgb(56, 56, 56);
    line-height: 24px;
    font-size: 14px;
    margin: 0;
  }

  &.nightmode {
    background-color: rgb(51, 51, 51);

    p,
    h3,
    h4 {
      color: rgb(255, 255, 255);
    }
  }
}
</style>
