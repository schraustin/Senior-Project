<template>
  <div>
    <custom-header :title="'Introduction Quiz'"></custom-header>
    <div style="margin-left:20px;">
      <div v-if="this.result===0" style="margin-left: 20%;margin-right: 20%;">
        <div v-for="(pro,idx) in list" :key="pro.QuestionID">
          <p class="content">{{ pro.QuestionID }}. {{ pro.Content }}</p>
          <label>
            <div class="item">
              <input style="margin-right: 8px;" type="radio" :name="pro.id" :value=0 v-model="checkedValue[idx]">
              A. {{ pro.A }}
            </div>
          </label>
          <br>
          <label>
            <div class="item">
              <input style="margin-right: 8px;" type="radio" :name="pro.id" :value=1 v-model="checkedValue[idx]">
              B. {{ pro.B }}
            </div>
          </label>
          <br>
          <label>
            <div class="item">
              <input style="margin-right: 8px;" type="radio" :name="pro.id" :value=2 v-model="checkedValue[idx]">
              C. {{ pro.C }}
            </div>
          </label>
          <br>
          <hr>
        </div>
        <div>
          <p class="content">Additional Question: {{ this.additional.Content }}</p>
          <label>
            <div class="item">
              <input style="margin-right: 8px;" type="radio" name="add" :value=0 v-model="add">
              A. {{ this.additional.A }}
            </div>
          </label>
          <br>
          <label>
            <div class="item">
              <input style="margin-right: 8px;" type="radio" name="add" :value=1 v-model="add">
              B. {{ this.additional.B }}
            </div>
          </label>
          <br>
          <label>
            <div class="item">
              <input style="margin-right: 8px;" type="radio" name="add" :value=2 v-model="add">
              C. {{ this.additional.C }}
            </div>
          </label>
          <br>
          <label>
            <div class="item">
              <input style="margin-right: 8px;" type="radio" name="add" :value=3 v-model="add">
              D. {{ this.additional.D }}
            </div>
          </label>
          <br>
          <hr>
        </div>
        <button type="button" class="btn btn-primary" style="margin-bottom: 20px;margin-left:10px;"
                @click="submit">Submit
        </button>
      </div>
      <div class="center">
        <div v-if="this.result===1">
          <div class="left">
            <h5>You are a Visual Learner.</h5>
            <p>Sketch course content. Even the simplest sketch can help you remember ideas.</p>
            <li>List your tasks – even the ones you have completed – just to have the satisfaction of visually crossing
              out
              tasks done.
            </li>
            <li>Write notes on your favorite colored sticky-notes to help you remember and paste them around your
              room.
            </li>
            <li>An uncluttered desk may help in clearing your mind to be able to study better.</li>
            <li>Write yourself encouraging notes and post them where you can see them.</li>
            <li>Create mind maps, flowcharts, or other graphic organizers.</li>
            <li>Sketch course content. Even the simplest sketch can help you remember ideas.</li>
          </div>
          <div class="right">
            <img src="../assets/img/quiz/result-visual.jpg" height="300" width="300">
          </div>
        </div>
        <div v-if="this.result===2">
          <div class="left">
            <h5>You are an Auditory Learner.</h5>
            <li>Teach yourself to read aloud in your mind without making sound.
              During exams, you can hear the test questions as well as see them.
            </li>
            <li>Study with a partner or in a group. When studying with others, you
              can hear what they say, and hear yourself teaching them as well.
              This will reinforce your understanding of the material.
            </li>
            <li>Proofread your assignments out loud.</li>
            <li>Read your textbook and notes aloud as you study. You could even
              record them as you do so.
            </li>
          </div>
          <div class="right">
            <img src="../assets/img/quiz/result-auditory.jpg" height="300" width="300">
          </div>
        </div>
        <div v-if="this.result===3">
          <div class="left">
            <h5>You are a Tactile/Kinesthetic Learner.</h5>
            <li>Make models of the concepts whenever possible.</li>
            <li>Move around while you are studying. For instance, you can simply
              walk around in your room.
            </li>
            <li>Study on a whiteboard. Draw flowcharts, mind maps, or simply
              rewrite the notes.
            </li>
            <li>Incorporate pictures of models, if possible.</li>
            <li>Make physical comfort a priority as you study.</li>
            <li>Make note cards and create sample tests that you can take for
              review.
            </li>
          </div>
          <div class="right">
            <img src="../assets/img/quiz/result-kinesthetic.jpg" height="300" width="300">
          </div>
        </div>
        <div v-if="this.resource!==''">
          <br>
          <h4>The right course(s) for you is/are {{ resource }}.</h4>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from "@/components/Header";
import {getIntroQuiz, updateIntroQuizResult} from "../api/api";


export default {
  name: "Introduction",
  components: {
    CustomHeader,
  },
  methods: {
    submit() {
      for (let i = 0; i < this.checkedValue.length; i++) {
        if (this.checkedValue[i] === 3) {
          alert("Please complete all questions!")
          return
        }
      }
      if (this.add === 4) {
        alert("Please complete all questions!")
        return
      }
      let a = 0, b = 0, c = 0
      for (let i = 0; i < this.checkedValue.length; i++) {
        if (this.checkedValue[i] === 0) {
          a++
        } else if (this.checkedValue[i] === 1) {
          b++
        } else if (this.checkedValue[i] === 2) {
          c++
        }
      }
      let max = this.getMax(a, b, c)
      let type = 0
      let recommend = 0
      if (max === a) {
        this.result = 1
      } else if (max === b) {
        this.result = 2
        type = 1
      } else {
        this.result = 3
        type = 2
      }
      if (this.add === 0) {
        this.resource = 'Cyber security'
      } else if (this.add === 1) {
        this.resource = 'Data science / Big data / Machine learning(AI)'
        recommend = 1
      } else if (this.add === 2) {
        this.resource = 'Web development'
        recommend = 2
      } else if (this.add === 3) {
        this.resource = 'Metaverse'
        recommend = 3
      }
      updateIntroQuizResult(20220405, type, recommend)
      alert("submit success")
    },
    getMax(num1, num2, num3) {
      let max = num1 > num2 ? num1 : num2
      return max > num3 ? max : num3
    },
  },
  data() {
    return {
      list: [
        {
          "A": "Watch someone show me how.",
          "B": "Hear someone tell me how.",
          "C": "Try to do it myself.",
          "id": 1,
          "content": "If I have to learn how to do something, I learn best when I:"
        },
        {
          "A": "Looking at the word to see if it looks correct.",
          "B": "Sounding the word out in my head.",
          "C": "Getting a feeling about the correctness of the spelling.",
          "id": 2,
          "content": "When I spell, I verify accuracy by:"
        },
        {
          "A": "See the actual places in my mind as I say them or prefer to draw \n" +
              "them.",
          "B": "Have no difficulty giving them verbally.",
          "C": "Have to point or move my body as I give them.",
          "id": 3,
          "content": "When asked to give directions, I:"
        },
        {
          "A": "Write them down.",
          "B": "Repeat them over and over to myself.",
          "C": "Move around and use my fingers to name each item.",
          "id": 4,
          "content": "When I have to remember a list of items, I remember them best if I:"
        },
        {
          "A": "Write or draw diagrams to see it.",
          "B": "Talk myself through it.",
          "C": "Use and/or move objects to help me think.",
          "id": 5,
          "content": "When solving a problem, I:"
        },
        {
          "A": "Looking at the numbers to see if they are correct.",
          "B": "Counting the numbers in my head or out loud.",
          "C": "Using my fingers to get a feeling if it is correct.",
          "id": 6,
          "content": "When I am adding numbers, I verify my answer by:"
        },
        {
          "A": "Faces more easily than names.",
          "B": "Names more easily than faces.",
          "C": "The situation or the meeting more easily than names or faces.",
          "id": 7,
          "content": "When trying to recall names, I remember:"
        },
        {
          "A": "The room is dark.",
          "B": "The room is quiet.",
          "C": "The bed feels comfortable.",
          "id": 8,
          "content": "Before going to sleep at night, I appreciate that:"
        },
      ],
      checkedValue: [
        3, 3, 3, 3, 3, 3, 3, 3
      ],
      result: 0,
      add: 4,
      resource: '',
      additional: {},
    }
  },
  mounted() {
    getIntroQuiz().then(res => {
      this.list = res.data.slice(0, res.data.length - 1)
      this.additional = res.data[res.data.length - 1]
    })
  }
}
</script>

<style scoped>
.center {
  position: absolute;
  top: 380px;
  bottom: 0;
  left: 30%;
  right: 0;
  margin: auto;
}

.left {
  width: 40%;
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
}

.right {
  width: 50%;
  display: inline-block;
  vertical-align: top;
}

.content {
  font-size: 15px;
  line-height: 25px;
  margin-left: 5px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.item {
  padding-left: 15px;
  line-height: 40px;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.item:hover {
  cursor: default;
  background-color: #f4f4f5;
}

</style>
