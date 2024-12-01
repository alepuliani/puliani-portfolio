<script setup>
import BaseButtonVue from "./BaseButton.vue"
</script>
<template>
  <div class="form-wrapper">
    <div class="title-div">
      <h2>CONTACTS</h2>
      <h3>connect with me</h3>
    </div>
    <div class="form">
      <form
        action="https://formsubmit.co/7a9e4c1d0c4a66d1ed17787bba8c379e"
        method="POST"
      >
        <input type="text" placeholder="Name" name="name" required />
        <input type="text" placeholder="Email" name="email" />

        <textarea name="message" placeholder="Message" required></textarea>
        <div class="btn-div">
          <BaseButtonVue customClass="button send-btn" type="submit"
            >Send</BaseButtonVue
          >
          <BaseButtonVue customClass="button reset-btn" type="reset"
            >Cancel</BaseButtonVue
          >
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.form-wrapper {
  .title-div {
    h2 {
      color: rgba(#f576c4, 0.4);
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;

  .form {
    padding: 10px 20px;
    background-color: #ff8dd5;
    border-radius: 30px;
    color: white;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
      input,
      textarea {
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
}
</style>
