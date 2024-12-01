<script setup>
import HTML from "../assets/images/icons/html-5.png"
import CSS from "../assets/images/icons/css-3.png"
import SASS from "../assets/images/icons/sass.png"
import JS from "../assets/images/icons/js.png"
import Vue from "../assets/images/icons/vuejs.png"
import Typescript from "../assets/images/icons/typescript.png"
import portfolio from "../assets/images/work-images/portfolio.png"
import kreas from "../assets/images/work-images/kreas.png"
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
    name: "Kreas",
    image: kreas,
    description:
      "   Marketplace for sustainable synthetic meat and alternative protein products."
  },
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
      "Get ready to challenge your friends and enjoy the classic game of Tic Tac Toc"
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
      <h2>Skill Set <i class="bi bi-tools"></i></h2>
      <div class="skills">
        <div class="skill" v-for="skill in skills" :key="skill.name">
          <img :src="skill.icon" alt="skill icon" />
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>

    <div class="work-container">
      <h2>Works<i class="bi bi-code-slash"></i></h2>
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
h2 {
  i {
    margin-left: 5px;
    font-size: 20px;
  }
}
.skills-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #00c0c7;
  padding: 30px 0;
  border-radius: 30px;
  margin: 20px;

  h2 {
    color: white;
  }
  .skills {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    .skill {
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 10px rgba(#727272, 0.5);
      border-radius: 5px;
      background-color: #ffffff;
      padding: 0 5px;

      img {
        width: 25px;
        margin: 5px;
      }
      p {
        color: black;
        font-size: 10px;
        font-weight: bold;
      }
    }
  }
}

.work-container {
  padding: 40px 0;
  text-align: center;

  h2 {
    i {
      font-size: 25px;
    }
  }
  .works {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scroll-padding: 0 calc(50vw - (80vw / 2));
    width: 100vw;
    &::-webkit-scrollbar {
      display: none;
    }
    .work {
      margin-top: 10px;
      flex: 0 0 auto;
      scroll-snap-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      text-align: center;
      white-space: wrap;
      width: 90%;
      height: 90%;
      border-radius: 20px;
      img {
        height: 200px;
        border-radius: 5px;
        margin-bottom: 20px;
        box-shadow: 0 0 15px rgba(#76767600, 0.8);
        &:hover {
          transform: scale(1.05);
          transition: 0.5s ease;
        }
      }
      p {
        margin: 0;
        font-size: 14px;
        margin: 0 20px;
      }
      .work-name {
        font-weight: bold;
      }
    }
  }
}
</style>
