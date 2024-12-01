<script setup>
import { ref } from "vue"
let mode = ref("day")
let nightMode = ref(false)
let menuClosed = ref(true)

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

let toggleSideMenu = function () {
  menuClosed.value ? (menuClosed.value = false) : (menuClosed.value = true)
}
</script>

<template>
  <header :class="{ nightmode: nightMode }">
    <button @click="toggleSideMenu" class="menu">
      <i class="bi bi-list"></i>
    </button>
    <router-link to="/">
      <button class="home-btn">
        <img
          src="../assets/images/personal-images/logo.png"
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
  </header>
  <nav :class="{ visible: !menuClosed }">
    <img class="logo" src="../assets/images/personal-images/logo.png" alt="" />
    <i @click="toggleSideMenu" class="bi bi-x"></i>
    <h1>MENU</h1>
    <ul>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>CV</li>
      <li>CONTACTS</li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
header {
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
    height: 28px;
    width: 48px;
    border-radius: 14px;
    padding: 3px;
    background-color: rgb(140, 207, 255);
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
      background-color: rgb(255, 233, 167);
    }
  }

  .home-btn {
    border: none;
    background-color: transparent;
    .logo {
      height: 45px;
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

nav {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 100vw;
  width: 100vw;
  background-color: #6f6f6f;
  z-index: 10;
  transition: translate 1s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    position: absolute;
    top: 10px;
    left: 20px;
    height: 50px;
  }

  i {
    font-size: 40px;
    position: absolute;
    top: 20px;
    right: 30px;
  }

  h1 {
    font-size: 40px;
    color: rgb(245, 118, 196);
    margin-bottom: 20px;
  }

  ul {
    li {
      list-style: none;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 15px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  &.visible {
    translate: 100vw;
    transition: translate 1s ease;
  }
}
</style>
