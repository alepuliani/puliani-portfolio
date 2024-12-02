<script setup>
import { inject } from "vue"
import BaseButtonVue from "../components/BaseButton.vue"

const nightMode = inject("nightMode", false)
</script>
<template>
  <div class="intro">
    <img src="../assets/images/personal-images/personal-photo.png" alt="" />
    <div class="bio-container">
      <div class="title-div">
        <h1>ALESSANDRA</h1>
        <h2 :class="{ nightmode: nightMode }" class="second-title">
          Junior Front End Developer
        </h2>
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
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  img {
    margin-bottom: 30px;
  }
  .bio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 18px;
      font-weight: bold;
      position: relative;
      top: -20px;
      margin: 0;
      color: rgb(55, 55, 55);

      &.nightmode {
        color: white;
      }
    }

    p {
      font-size: 14px;
    }
  }
}

@media screen and (min-width: 768px) {
  .intro {
    padding: 70px 50px;
    flex-direction: row;
    align-items: center;
    img {
      width: 300px;
    }

    .bio-container {
      margin: 0 50px;
    }
  }
}
</style>
