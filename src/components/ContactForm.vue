<script setup>
import BaseButtonVue from "./BaseButton.vue"
</script>
<template>
  <div class="form">
    <h2>Connect with me <i class="bi bi-chat-left-text"></i></h2>
    <p>
      Hey, thanks for stopping by! <br />
      Feel free to send me a message
    </p>
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
</template>
<style lang="scss" scoped>
.form {
  text-align: center;
  margin: 60px 0;

  h2 {
    i {
      margin-left: 5px;
      color: #ffa7ec;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;

    input,
    textarea {
      width: 70%;
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

      .send-btn:hover {
        background-color: lighten(rgb(221, 253, 142), 9);
      }

      .reset-btn:hover {
        background-color: lighten(#f3acff, 9);
      }
    }
  }
}
</style>
