<script setup>
import { inject } from "vue"
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

let nightMode = inject("nightMode", false)

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
      "Marketplace for sustainable synthetic meat and alternative protein products.",
    link: "https://alepuliani.github.io/alessandrapuliani-kreas/"
  },
  {
    name: "ClimaTrack",
    image: climatrack,
    description:
      "Explore climate trends, statistics, and the global impact of climate change.",
    link: "https://climatrack-dashboard.netlify.app/"
  },
  {
    name: "Bookshelf",
    image: bookshelf,
    description:
      "An app to search for books by genre and store them in a personal bookshelf.",
    link: "https://alepuliani.github.io/alessandrapuliani-bookshelf/"
  },
  {
    name: "Happy Counter",
    image: happycounter,
    description: "A counter to help you keep track of your progress",
    link: "https://alepuliani.github.io/alessandrapuliani-happycounter/"
  },
  {
    name: "TicTacToe",
    image: tictactoe,
    description:
      "Get ready to challenge your friends and enjoy the classic game of Tic Tac Toc",
    link: "https://alepuliani.github.io/alessandrapuliani-tictactoe/"
  },
  {
    name: "Portfolio Website",
    image: portfolio,
    description: "A personal portfolio built with HTML and CSS.",
    link: "https://alepuliani.github.io/alessandrapuliani-portfolio/"
  }
]
</script>

<template>
  <div>
    <div class="skills-container">
      <div class="title-div">
        <h2>SKILL SET</h2>
        <h3>programming tools</h3>
      </div>
      <div class="skills">
        <div
          :class="{ nightmode: nightMode }"
          class="skill"
          v-for="skill in skills"
          :key="skill.name"
        >
          <img :src="skill.icon" alt="skill icon" />
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>

    <div class="work-container">
      <div class="title-div">
        <h2>WORKS</h2>
        <h3>programming projects</h3>
      </div>
      <div class="works">
        <div class="work" v-for="work in works" :key="work.name">
          <a :href="work.link" target="_blank">
            <img :src="work.image" alt="project image"
          /></a>
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
  justify-content: center;
  align-items: center;

  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 20px 0;
    .skill {
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 7px rgba(#5f5f5f, 0.5);
      border-radius: 5px;
      background-color: #ffffff;
      padding: 5px;

      &.nightmode {
        background-color: #626262;
        p {
          color: white;
        }
      }

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
  position: relative;
  margin-top: 60px;
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
    width: 100vw;

    &::-webkit-scrollbar {
      display: none;
    }
    .work {
      flex: 0 0 auto;
      scroll-snap-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem;
      text-align: center;
      white-space: wrap;
      width: 90%;
      height: 90%;
      border-radius: 20px;
      img {
        height: 200px;
        width: 100%;
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

@media screen and (min-width: 768px) {
  .skills-container {
    .skills {
      grid-template-columns: repeat(3, 1fr);
      .skill {
        padding: 15px;
      }
    }
  }

  .work-container {
    .works {
      .work {
        img {
          width: 80vw;
          height: auto;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .work-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .works {
      display: grid;
      grid-template-columns: repeat(3, 300px);

      margin: 0;
      justify-content: center;
      align-items: center;
      width: 100%;
      .work {
        width: 100%;
      }
    }
  }
}
</style>
