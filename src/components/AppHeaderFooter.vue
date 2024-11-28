<script setup></script>
<template>
  <nav>
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
