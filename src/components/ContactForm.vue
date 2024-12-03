<script setup>
import BaseButtonVue from "./BaseButton.vue"
import { useRoute } from "vue-router"

let route = useRoute()

const succesPageURL = "https://alessandrapuliani-portfolio.netlify.app/success"
</script>
<template>
  <div v-if="route.name !== 'success'" class="form-wrapper">
    <div class="title-div">
      <h2>CONTACTS</h2>
      <h3>connect with me</h3>
    </div>

    <form
      action="https://formsubmit.co/7a9e4c1d0c4a66d1ed17787bba8c379e"
      method="POST"
    >
      <input class="honeypot" type="text" name="_honey" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" :value="succesPageURL" />

      <input type="text" placeholder="Name" name="name" required />
      <input type="text" placeholder="Email" name="email" />

      <textarea name="message" placeholder="Message" required></textarea>
      <div class="btn-div">
        <BaseButtonVue customClass="button" type="reset">Cancel</BaseButtonVue>
        <BaseButtonVue customClass="button " type="submit">Send</BaseButtonVue>
      </div>
    </form>
  </div>
  <div>
    <div class="social">
      <a
        class="github-button"
        href="https://github.com/alepuliani"
        target="_blank"
      >
        <i class="bi bi-github"></i>
      </a>

      <a
        class="linkedin-button"
        href="https://www.linkedin.com/in/alessandra-puliani-3677b6126/"
        target="_blank"
      >
        <i class="bi bi-linkedin"></i>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.form-wrapper {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  .title-div {
    h2 {
      color: rgba(rgb(245, 118, 196), 0.4);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .honeypot {
      display: none;
    }

    input,
    textarea {
      background-color: rgb(235, 235, 235);
      width: 90%;
      margin-bottom: 10px;
      height: 30px;
      border: none;
      padding: 10px;
      border-radius: 5px;

      &:focus {
        outline: none;
        border: 2px solid rgb(228, 228, 228);
      }

      &::placeholder {
        font-family: "Montserrat";
      }
    }

    textarea {
      height: 100px;
    }

    .btn-div {
      display: flex;

      .button {
        width: 80px;
        margin: 5px;
      }
    }
  }
}

.social {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  a {
    text-decoration: none;
    color: inherit;
    margin: 10px;
  }
}

@media screen and (min-width: 768px) {
  .form-wrapper {
    form {
      input,
      textarea {
        width: 30vw;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .form-wrapper {
    margin-top: 100px;
  }
}
</style>
