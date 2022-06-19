<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Progresso let you track your progress on everything. Percent by percent, day by day.
      And share it wiht your friend.
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">URL</a>.
    </p>
    <button type="button" class="btn btn-info btn-lg" @click="routeCreate">Create</button>
  </div>
</template>

<script>
import router from "@/router";
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    routeCreate(){
      router.push('/update')
    },
    fetchProgress(progressId){
     return axios.get(`https://d986-212-175-197-5.ngrok.io/progresso/${progressId}`).then(({ data }) => data)
    }
  },
  mounted() {
    console.log(this.progressId)
    this.progressId = this.$route.params.progressId
    this.fetchProgress(this.progressId).then((data) => {
console.log(data)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 150px;
}
</style>
