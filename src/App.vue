<script setup>
import { RouterLink, RouterView } from "vue-router"
import AppHeaderFooterVue from "./components/AppHeaderFooter.vue"
import ContactForm from "./components/ContactForm.vue"

components: {
  AppHeaderFooterVue, ContactForm
}
</script>

<template>
  <div class="app-div">
    <AppHeaderFooterVue />
    <RouterView />
    <ContactForm />
  </div>
</template>

<style lang="scss" scoped>
.app-div {
  padding: 70px 60px;
}
</style>
