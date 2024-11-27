<script setup>
import { RouterLink, RouterView } from "vue-router"
import AppHeaderFooterVue from "./components/AppHeaderFooter.vue"

components: AppHeaderFooterVue
</script>

<template>
  <div>
    <AppHeaderFooterVue />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
