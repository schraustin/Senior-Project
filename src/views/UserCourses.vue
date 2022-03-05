<!-- ====== TEMPLATE ====== -->
<template>
  <custom-header :title="titleValue"></custom-header>
  <div class="container">
    <div class="row">
        <div class="col-md-6">
        <ul>
           <router-link  :to="{ path: '/homecourse', query: $route.query }" > <ol class="mt-4">
            <h1>Home</h1>
            </ol></router-link>
            <router-link  :to="{ path: '/announcements', query: $route.query }"><ol class="">
            <h1>Announcements</h1>
            </ol></router-link>
            <router-link  :to="{ path: '/chapter', query: $route.query }"><ol class="">
            <h1>Course Chapters</h1>
            </ol></router-link>
            <router-link  :to="{ path: '/quizzes', query: $route.query }"><ol class="">
            <h1>Quizzes</h1>
            </ol></router-link>
            <router-link  :to="{ path: '/syllabus', query: $route.query }"><ol class="">
            <h1>Syllabus</h1>
            </ol></router-link>
            <router-link  :to="{ path: '/forum', query: $route.query }"><ol class="">
            <h1>Discussion Forum</h1>
            </ol></router-link>
        </ul>
        </div>
        <div class="col-md-6">
        <div class="col-md-12">
          <span style="float:right">
            <button type="button" class="btn btn-dark m-4 enroll" @click="Enroll()" v-if="toggleEnroll">Enroll This Course</button>
            <button type="button" class="btn btn-dark m-4 enroll" @click="Enroll()" v-if="!toggleEnroll">Unenroll This Course</button>
          </span>
      </div>
        </div>
    </div>
  </div>
  <router-view></router-view>
</template>


<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from "../components/Header.vue";

export default {
  components: {
    CustomHeader,
  },
  data(){
      return {
        toggleEnroll: true
      }
    },
    methods:{
    Enroll(){
      this.toggleEnroll = !this.toggleEnroll
    }
  },
  computed: {
    titleValue() {
      return  this.$route.query.title
    }
  },
    setup() {},
  };
</script>

<!-- ======= STYLE ======= -->
<style scoped>
.enroll {
  float: right;
}

a,a:hover {
  color: #0a0a0a;
  text-decoration: none;
}
ol{
    border: 1px solid;
    border-radius: 10px;
    margin-bottom: 5px;    
    font-family: serif;
}
.page-title h2 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    color: #fff;
}
</style>
