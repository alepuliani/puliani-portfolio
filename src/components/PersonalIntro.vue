<script setup>
import BaseButtonVue from "../components/BaseButton.vue"
</script>
<template>
  <div class="intro">
    <img src="../assets/images/personal-images/personal-photo.png" alt="" />
    <div class="bio-container">
      <div class="title-div">
        <h1>Hi! I'm Alessandra -</h1>
        <h2 class="second-title">Junior Front End Developer</h2>
      </div>
      <p>
        My name is Alessandra Puliani, I'm 30 years old, and I live in Rome. I
        recently embarked on a journey into the world of IT, where I discovered
        a deep passion for the field. Currently, I'm pursuing a path to become a
        skilled Front-End Developer.
      </p>

      <router-link to="/about"
        ><BaseButtonVue>More about me</BaseButtonVue></router-link
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.intro {
  padding: 0 50px;
  img {
    margin-bottom: 30px;
  }
  .bio-container {
    margin-bottom: 20px;
    .title-div {
      margin-bottom: 20px;
      h1 {
        font-family: "Roboto Slab";
      }

      h2 {
        font-size: 23px;
        font-family: "Roboto Slab";
        color: #f576c4;
      }
    }
    p {
      font-size: 14px;
    }
  }
}
</style>
