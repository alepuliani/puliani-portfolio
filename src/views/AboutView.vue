<script setup>
import BaseButton from "@/components/BaseButton.vue"
</script>

<template>
  <div class="about">
    <h1>ABOUT</h1>
    <div class="background-div">
      <img
        class="profile-photo"
        src="../assets/images/personal-images/personal-photo.png"
        alt="personal photo"
      />

      <div class="back-text">
        <div class="title-div">
          <h2>BACKGROUND</h2>
          <h3>professional journey</h3>
        </div>
        <p>
          Throughout my life, I've explored various roles working as a hostess,
          a shop assistant, and a nail technician. Each job taught me valuable
          lessons and provided meaningful experiences, yet I always felt like
          something was missing.<br />
          I've come to realize that I'm a very <strong>logical</strong> and
          <strong>practical</strong> person. <br />
          During my time as a nail technician, I discovered that what truly
          motivated me was the process of <strong>setting a goal</strong> and
          figuring out the best way to <strong>achieve it</strong>. <br />
          This drive for problem-solving and goal-oriented work ultimately led
          me to the world of <strong>web development</strong>, where I found the
          fulfillment I had been searching for.
        </p>
      </div>
    </div>
    <router-link to="/cv">
      <BaseButton>Curriculum Vitae</BaseButton></router-link
    >

    <div class="life-div">
      <div class="life-text">
        <div class="title-div">
          <h2>LIFE</h2>
          <h3>beyond work</h3>
        </div>

        <p>
          In my free time, I enjoy reading, watching films, and immersing myself
          in TV series. I'm particularly drawn to the worlds of
          <strong>fantasy</strong> and science fiction, captivated by the
          vastness of the universe and the mysteries it holds. <br />
          I also love spending time in <strong>nature</strong>, which fuels my
          passion for photography, allowing me to capture its beauty. <br />
          Environmental issues deeply concern me, especially their impact on
          both humanity and the animal world. <br />
          This drives me to adopt a <strong>sustainable lifestyle</strong> and
          actively support organizations and initiatives dedicated to addressing
          these critical challenges.
        </p>
      </div>
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;

  .background-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      align-self: start;
    }
    .profile-photo {
      width: 80%;
      margin-bottom: 30px;
    }
  }
  .life-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    .photo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin: 30px 0;
      width: fit-content;

      .personal-photo {
        border-radius: 50%;
        z-index: 10;
        position: relative;
        width: 80%;
      }

      .shape-image {
        position: absolute;
        width: 90%;
        bottom: -50px;
        right: -25px;
      }
    }
  }
}

@media screen and (min-width: 648px) {
  .about {
    .background-div {
      flex-direction: row;
      align-items: center;
      .profile-photo {
        width: 40%;
      }

      .back-text {
        margin: 30px;
      }
    }

    .life-div {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      .life-text {
        margin-right: 20px;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .about {
    padding: 0 20vw;
  }
}
</style>
