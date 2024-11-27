<script setup>
import PersonalIntro from "../components/PersonalIntro.vue"
import SkillsAndWork from "../components/SkillsAndWork.vue"

components: PersonalIntro, SkillsAndWork
</script>

<template>
  <main>
    <PersonalIntro />
    <SkillsAndWork />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
</style>
