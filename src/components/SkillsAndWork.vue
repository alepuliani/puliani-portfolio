<script setup>
import HTML from "../assets/images/icons/html-5.png"
import CSS from "../assets/images/icons/css-3.png"
import SASS from "../assets/images/icons/sass.png"
import JS from "../assets/images/icons/js.png"
import Vue from "../assets/images/icons/vuejs.png"
import Typescript from "../assets/images/icons/typescript.png"

import portfolio from "../assets/images/work-images/portfolio.png"
import happycounter from "../assets/images/work-images/happy-counter.png"
import bookshelf from "../assets/images/work-images/bookshelf.png"
import tictactoe from "../assets/images/work-images/tictactoe.png"
import climatrack from "../assets/images/work-images/climatrack.png"

let skills = [
  {
    name: "HTML5",
    icon: HTML
  },
  {
    name: "CSS3",
    icon: CSS
  },
  {
    name: "SASS",
    icon: SASS
  },
  {
    name: "JavaScript",
    icon: JS
  },
  {
    name: "Typescript",
    icon: Typescript
  },
  {
    name: "Vue.js",
    icon: Vue
  }
]

let works = [
  {
    name: "Happy Counter",
    image: happycounter,
    description: "A counter to help you keep track of your progress"
  },
  {
    name: "Bookshelf",
    image: bookshelf,
    description:
      "An app to search for books by genre and store them in a personal bookshelf."
  },
  {
    name: "ClimaTrack",
    image: climatrack,
    description:
      "Explore climate trends, statistics, and the global impact of climate change with ClimaTrack, your source for vital environmental insights."
  },
  {
    name: "TicTacToe",
    image: tictactoe,
    description:
      "Get ready to challenge your friends and enjoy the classic game of Tic Tac Toe."
  },

  {
    name: "Portfolio Website",
    image: portfolio,
    description: "A personal portfolio built with HTML and CSS."
  }
]
</script>
<template>
  <div>
    <div class="skills-container">
      <h2>Skill Set</h2>
      <div class="skills">
        <div class="skill" v-for="skill in skills" :key="skill.name">
          <img :src="skill.icon" alt="skill icon" />
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>

    <div class="work-container">
      <h2>Works</h2>
      <div class="works">
        <div class="work" v-for="work in works" :key="work.name">
          <img :src="work.image" alt="" />
          <p class="work-name">{{ work.name }}</p>
          <p>{{ work.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.skills-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(221, 253, 142);
  padding: 40px 0;

  .skills {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    .skill {
      display: flex;
      align-items: center;
      padding: 10px;
      box-shadow: 0 0 10px rgba(#727272, 0.5);
      border-radius: 5px;
      background-color: #ffffff;

      img {
        width: 30px;
        margin: 10px;
      }

      p {
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
}
.work-container {
  padding: 40px 0;
  background-color: rgb(243, 172, 255);
  text-align: center;

  .works {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    width: 100vw;

    &::-webkit-scrollbar {
      display: none;
    }

    .work {
      flex: 0 0 auto;
      scroll-snap-align: start;
      padding: 1rem;
      text-align: center;
      white-space: wrap;
      width: 90vw;
      scroll-snap-align: start;

      img {
        height: 200px;
        margin: 20px auto;

        border-radius: 5px;
      }

      .work-name {
        font-weight: bold;
      }
    }
  }
}
</style>
