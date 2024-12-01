<script setup>
import { ref } from "vue"
let mode = ref("day")
let nightMode = ref(false)

let emit = defineEmits(["mode-changed"])

let toggleMode = function () {
  if (mode.value === "day") {
    nightMode.value = true
    mode.value = "night"
  } else {
    nightMode.value = false
    mode.value = "day"
  }
  emit("mode-changed", nightMode.value)
}
</script>
<template>
  <nav :class="{ nightmode: nightMode }">
    <button class="menu"><i class="bi bi-list"></i></button>
    <router-link to="/">
      <button class="home-btn">
        <img
          src="../assets/images/personal-images/portfolio-logo.png"
          class="logo"
        /></button
    ></router-link>
    <div
      @click="toggleMode"
      :class="{ nightmode: nightMode }"
      class="switch-div"
    >
      <div class="button"></div>
    </div>
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
    border: 1px solid rgb(35, 35, 35);
    height: 28px;
    width: 48px;
    border-radius: 14px;
    padding: 2px;
    background-color: rgb(189, 227, 255);
    &:hover {
      cursor: pointer;
    }

    &.nightmode {
      background-color: rgb(82, 76, 111);
    }
    .button {
      height: 22px;
      width: 22px;
      border-radius: 50%;
      background-color: rgb(255, 240, 195);
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

  &.nightmode {
    .button {
      background-color: rgb(255, 255, 255);
      translate: 20px;
    }

    i {
      color: white;
    }
  }
}
</style>
