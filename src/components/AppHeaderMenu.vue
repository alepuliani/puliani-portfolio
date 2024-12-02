<script setup>
import { ref } from "vue"

let mode = ref("day")
let nightMode = ref(false)
let menuClosed = ref(true)

let emit = defineEmits(["mode-changed", "menu-open"])

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
  if (menuClosed.value === true) {
    menuClosed.value = false
    emit("menu-open", !menuClosed.value)
  } else {
    menuClosed.value = true
    emit("menu-open", !menuClosed.value)
  }
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
    <div class="menu-section">
      <ul>
        <router-link active-class="active" to="/"><li>HOME</li></router-link>
        <router-link active-class="active" to="/about"
          ><li>ABOUT</li></router-link
        >
        <router-link active-class="active" to="/cv"><li>CV</li></router-link>
      </ul>
    </div>
    <div @click="toggleMode" class="switch-div">
      <p class="dark">dark</p>
      <p class="light">light</p>
      <div class="button"></div>
    </div>
  </header>
  <nav :class="{ visible: !menuClosed }">
    <img class="logo" src="../assets/images/personal-images/logo.png" alt="" />
    <i @click="toggleSideMenu" class="bi bi-x"></i>
    <h1>MENU</h1>
    <ul>
      <router-link @click="toggleSideMenu" active-class="active" to="/"
        ><li>HOME</li></router-link
      >
      <router-link @click="toggleSideMenu" active-class="active" to="/about"
        ><li>ABOUT</li></router-link
      >
      <router-link @click="toggleSideMenu" active-class="active" to="/cv"
        ><li>CV</li></router-link
      >
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
header {
  padding: 0 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  z-index: 15;
  background-color: rgb(249, 249, 249);

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

  .menu-section {
    display: none;
  }

  .switch-div {
    position: relative;
    height: 28px;
    width: 58px;
    border-radius: 14px;
    padding: 2px 3px;
    background-color: rgb(239, 239, 239);
    border: 1px solid rgb(183, 183, 183);

    &:hover {
      cursor: pointer;
    }

    p {
      position: absolute;
      font-size: 9px;
      z-index: 12;
      bottom: 1px;

      &.dark {
        left: 5px;
      }

      &.light {
        right: 5px;
      }
    }

    .button {
      position: relative;
      height: 22px;
      width: 23px;
      border-radius: 50%;
      background-color: rgb(255, 255, 255);
      z-index: 20;
      box-shadow: 0 0 5px rgba(#838383, 0.6);
      transition: translate 0.5s ease;
    }
  }

  &.nightmode {
    background-color: rgb(51, 51, 51);
    .button {
      background-color: rgb(255, 255, 255);
      translate: 28px;
      transition: translate 0.5s ease;
    }

    i {
      color: white;
    }

    .switch-div {
      background-color: rgb(82, 76, 111);
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
  z-index: 20;
  transition: translate 1s ease;
  overflow: hidden;

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

    &:hover {
      cursor: pointer;
    }
  }

  h1 {
    font-size: 40px;
    color: #f576c4;
    margin-bottom: 20px;
  }

  ul {
    a {
      color: #373737;
      text-decoration: none;

      &.active {
        color: #0cc0df;
      }
      li {
        list-style: none;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 15px;

        &:hover {
          cursor: pointer;
        }

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }

  &.visible {
    translate: 100vw;
    transition: translate 1s ease;
  }
}

@media screen and (min-width: 1024px) {
  header {
    &.nightmode {
      ul {
        color: white;
      }
    }
    .menu-section {
      display: block;
      width: 200px;

      ul {
        display: flex;
        justify-content: space-between;

        a {
          text-decoration: none;
          color: inherit;
          li {
            list-style: none;
            font-weight: bold;
          }
          &.active {
            color: #0cbfdfb0;
          }
        }
      }
    }
  }

  .menu {
    display: none;
  }
}
</style>
