<script setup>
import BaseButton from "@/components/BaseButton.vue"
</script>
<template>
  <div class="success">
    <h1>Thanks for your message!</h1>
    <p>I'll reply to you as soon as possible.</p>
    <router-link to="/"><BaseButton>Home</BaseButton></router-link>
  </div>
</template>
<style lang="scss" scoped>
.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  text-align: center;
}
</style>
