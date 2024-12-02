<script setup>
import { ref, provide } from "vue"
import AppHeaderMenu from "./components/AppHeaderMenu.vue"
import ContactForm from "./components/ContactForm.vue"

let nightMode = ref(false)
let sideMenuOpen = ref(false)

let switchMode = function (newMode) {
  nightMode.value = newMode
}

let menuVisible = function (isOpen) {
  sideMenuOpen.value = isOpen
}

provide("nightMode", nightMode)
</script>

<template>
  <div
    :class="{ nightmode: nightMode, disablescroll: sideMenuOpen }"
    class="app-div"
  >
    <AppHeaderMenu @menu-open="menuVisible" @mode-changed="switchMode" />
    <RouterView />
    <ContactForm />
  </div>
</template>

<style lang="scss">
.app-div {
  color: #373737;
  background-color: #f9f9f9;
  padding-top: 60px;
  transition: 0.3s ease;
  .title-div {
    text-align: center;
    h2 {
      color: rgba(#0cc0df, 0.4);
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
    transition: 0.3s ease;

    p,
    h3,
    h4 {
      color: rgb(255, 255, 255);
    }
  }

  &.disablescroll {
    overflow: hidden;
    height: 100vh;
  }
}
</style>
