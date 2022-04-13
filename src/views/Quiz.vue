<template>
  <div>
    <custom-header :title="this.course+' Quizzes'"></custom-header>
    <!-- <img src="../assets/img/quiz/chQuiz.png" height="200" width="800"
        style="margin-left: 33%;margin-bottom: 20px;"> -->
    <div class="parent">
      <ul class="nav-left-container">
        <li v-for="(c, index) in ch" v-bind:key="index">
          <a href="#" @click="toProblem(c.ChapterID)">
            <span class="glyphicon glyphicon-calendar f12" aria-hidden="true"></span>
            <span>{{ c.ChapterName }}</span>
            <span class="glyphicon glyphicon-menu-right f12 fr" aria-hidden="true"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CustomHeader from "../components/Header";
import {getChapterInfo} from "../api/api";

export default {
  name: "Quiz",
  components: {
    CustomHeader,
  },
  props: ['title', 'id'],
  data() {
    return {
      ch: [
        'Chapter 1',
        'Chapter 2',
        'Chapter 3',
        'Chapter 4',
        'Chapter 5',
      ],
      course: this.$store.state.courses[this.id].title
    }
  },
  methods: {
    toProblem(index) {
      this.$store.commit('setCurrent', this.$store.state.problems[this.id][index].slice(0, 5))
      this.$store.state.isSubmit = false
      this.$router.push({
        name: "Problem",
        query: {id: this.id, index: index,}
      })
    },
  },
  mounted() {
    getChapterInfo(this.id).then(res => {
      this.ch=res.data
    })
  }
}
</script>

<style scoped>
.parent {
  position: absolute;
  top: 330px;
  bottom: 100px;
  left: 0;
  right: 0;
  margin: auto;
}

.nav-left-container {
  position: relative;
  left: 0;
  top: 0;
  width: 220px;
  height: 100%;
}

.nav-left-container li a {
  font-size: 25px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  font-weight: 600;
  padding: 15px 20px 15px 25px;
  display: block;
  color: black;
}

.nav-left-container .active {
  border-left: 4px solid #19a9d5;
}

.nav-left-container li:hover {
  background-color: #64c48f;
}

.nav-left-container .active > a {
  color: #ffffff;
}

.nav-left-container-small li a {
  font-size: 12px;
  padding: 7px 15px 7px 52px;
}

.nav-left-container-small {
  display: none;
}
</style>