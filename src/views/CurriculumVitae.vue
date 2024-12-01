<script setup>
import { inject } from "vue"

const nightMode = inject("nightMode", false)
</script>

<template>
  <div :class="{ nightmode: nightMode }" class="cv-container">
    <h1 class="name">Alessandra Puliani</h1>
    <div class="info-div">
      <p><i class="bi bi-geo-alt"></i> Rome</p>
      <p><i class="bi bi-envelope"></i> ale.puliani94@gmail.com</p>
      <p><i class="bi bi-telephone"></i>+39 347 4360334</p>
    </div>

    <div class="formation-div">
      <h2>Formation</h2>
      <ol>
        <li>
          <h3>Front-End Development | Start2Impact</h3>
          <p>
            <em>November 2023 - November 2024</em>
          </p>
        </li>
        <li>
          <h3>Nail Technician Diploma | Rome Nail Academy</h3>
          <p>
            <em>July 2018</em> <br />
            Course recognized by Lazio Region (200 hours)
          </p>
        </li>

        <li>
          <h3>Secondary School | Nomentano Scientific High School</h3>
          <p>
            <em>July 2013</em>
          </p>
        </li>
      </ol>
    </div>

    <div class="experience-div">
      <h2>Experience</h2>

      <ol>
        <li>
          <h3>Receptionist | Italiana Fitness</h3>
          <p>
            <em>January 2024 - Now</em> <br />
            I greeted and assisted members and guests with inquiries and
            check-ins, managed the membership database, and processed new
            registrations. I handled phone calls, emails, and appointments
          </p>
        </li>

        <li>
          <h3>Nail tech | Mag Studio</h3>
          <p>
            <em>November 2018 - July 2023</em> <br />
            Specialized in nail reconstruction, customer reception and
            consultancy, diary and appointment management, warehouse management
            and order preparation
          </p>
        </li>

        <li>
          <h3>Sale Assistant | Glamorous Rome; Pull and Bear</h3>
          <p>
            <em>October 2016 - September 2017</em><br />
            I greeted and assisted members and guests with inquiries and
            check-ins, managed the membership database, and processed new
            registrations. I handled phone calls, emails, and appointments
          </p>
        </li>

        <li>
          <h3>Hostess</h3>
          <p>
            <em>September 2014 - February 2017</em> <br />
            Welcoming customers, managing the operations and critical issues of
            the assigned department
          </p>
        </li>
      </ol>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cv-container {
  margin: 20px;
  background-color: rgb(236, 236, 236);
  padding: 25px 35px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  &.nightmode {
    background-color: rgb(93, 93, 93);
  }

  .info-div {
    i {
      margin-right: 3px;
      font-size: 18px;
    }
  }

  .formation-div {
    margin: 20px 0;
  }

  p {
    margin: 0;
    line-height: 20px;
  }
  h1 {
    font-size: 26px;
    margin-bottom: 10px;
  }
  h2,
  h3 {
    margin: 5px 0;
  }

  h3 {
    font-size: 15px;
  }

  li {
    list-style-type: none;
    margin: 15px 0;
  }
}
</style>
