<script setup>
import { ref, provide } from "vue"
import AppHeaderFooterVue from "./components/AppHeaderFooter.vue"
import ContactForm from "./components/ContactForm.vue"

let nightMode = ref(false)

let switchMode = function (newMode) {
  nightMode.value = newMode
}

provide("nightMode", nightMode)
</script>

<template>
  <div :class="{ nightmode: nightMode }" class="app-div">
    <AppHeaderFooterVue @mode-changed="switchMode" />
    <RouterView />
    <ContactForm />
  </div>
</template>

<style lang="scss">
.app-div {
  background-color: rgb(249, 249, 249);
  padding-top: 70px;

  h2 {
    color: rgb(52, 52, 52);
  }

  p {
    color: rgb(56, 56, 56);
    margin: 20px 0;
    line-height: 24px;
    font-size: 14px;
  }

  &.nightmode {
    background-color: rgb(51, 51, 51);

    p,
    h1,
    h2,
    h3,
    h4 {
      color: rgb(255, 255, 255);
    }
  }
}
</style>
