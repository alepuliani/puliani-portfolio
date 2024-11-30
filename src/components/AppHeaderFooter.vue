<script setup>
import { ref } from "vue"
let mode = ref("day")
let nightMode = ref(false)

let toggleMode = function () {
  if (mode.value === "day") {
    nightMode.value = true
    mode.value = "night"
  } else {
    nightMode.value = false
    mode.value = "day"
  }
}
</script>
<template>
  <nav>
    <div
      @click="toggleMode"
      :class="{ nightmode: nightMode }"
      class="switch-div"
    >
      <div class="button"></div>
    </div>
    <router-link to="/">
      <button class="home-btn">
        <img
          src="../assets/images/personal-images/portfolio-logo.png"
          class="logo"
        /></button
    ></router-link>
    <button class="menu"><i class="bi bi-list"></i></button>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  margin: 0 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;

  .switch-div {
    border: 2px solid rgb(111, 111, 111);
    height: 28px;
    width: 48px;
    border-radius: 14px;
    padding: 1px;
    background-color: rgb(189, 227, 255);
    &:hover {
      cursor: pointer;
    }

    &.nightmode {
      background-color: rgb(255, 255, 255);
    }
    .button {
      height: 23px;
      width: 23px;
      border-radius: 50%;
      border: 2px solid rgb(111, 111, 111);
      background-color: rgb(255, 255, 221);
    }
  }

  .home-btn {
    border: none;
    background-color: transparent;
    .logo {
      height: 50px;
    }
    &:hover {
      cursor: pointer;
      transform: rotate(360deg);
      transition: transform 0.8s ease;
    }
  }

  .menu {
    border: none;
    background-color: transparent;
    i {
      color: black;
      font-size: 30px;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
