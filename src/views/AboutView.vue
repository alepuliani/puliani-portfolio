<script setup>
import BaseButton from "@/components/BaseButton.vue"
</script>

<template>
  <div class="about">
    <h1>About me</h1>
    <img
      class="profile-photo"
      src="../assets/images/personal-images/personal-photo.png"
      alt="personal photo"
    />

    <h2>My background</h2>
    <p>
      Throughout my life, I've explored various roles—working as a hostess, a
      shop assistant, and a nail technician. Each job taught me valuable lessons
      and provided meaningful experiences, yet I always felt like something was
      missing.<br />
      I've come to realize that I'm a very <strong>logical</strong> and
      <strong>practical</strong> person. <br />
      During my time as a nail technician, I discovered that what truly
      motivated me was the process of <strong>setting a goal</strong> and
      figuring out the best way to <strong>achieve it</strong>. <br />
      This drive for problem-solving and goal-oriented work ultimately led me to
      the world of <strong>web development</strong>, where I found the
      fulfillment I had been searching for.
    </p>

    <router-link to="/cv">
      <BaseButton customClass="cv-btn"
        >Curriculum Vitae</BaseButton
      ></router-link
    >

    <div class="life-div">
      <h2>My life</h2>
      <div class="photo-container">
        <img
          class="shape-image"
          src="../assets/images/personal-images/shape.png"
          alt=""
        />
        <img
          class="personal-photo"
          src="../assets/images/personal-images/personal.jpg"
          alt=""
        />
      </div>
      <p>
        In my free time, I enjoy reading, watching films, and immersing myself
        in TV series. I'm particularly drawn to the worlds of
        <strong>fantasy</strong> and science fiction, captivated by the vastness
        of the universe and the mysteries it holds. <br />
        I also love spending time in <strong>nature</strong>, which fuels my
        passion for photography, allowing me to capture its beauty. <br />
        Environmental issues deeply concern me, especially their impact on both
        humanity and the animal world. <br />
        This drives me to adopt a <strong>sustainable lifestyle</strong> and
        actively support organizations and initiatives dedicated to addressing
        these critical challenges.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  align-items: center;

  .profile-photo {
    width: 80%;
    margin: 30px 0;
  }
  .cv-btn {
    &:hover {
      background-color: rgb(229, 255, 162);
    }
  }

  .life-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    .photo-container {
      position: relative;
      margin: 30px 0;
      margin-bottom: 4ch;

      .personal-photo {
        border-radius: 50%;
        z-index: 10;
        position: relative;
        width: 70%;
      }

      .shape-image {
        position: absolute;
        width: 75%;
        top: 30px;
        left: 40px;
      }
    }
  }
}
</style>
