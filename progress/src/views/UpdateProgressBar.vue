<template>
  <div id="progresra">
    <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" :style="{ width: value + '%' }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> % {{value}}</div>

    </div>
    <br>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Enter value" aria-label="Enter value" aria-describedby="basic-addon2" v-model="value">

    </div>
    <button type="button" class="btn btn-success" @click="randomValue">Add</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      value: null,
      max: 100
    }
  },
  methods: {
    randomValue() {

      axios.post(`https://19ec-212-175-197-5.ngrok.io/progresso/62af4d63571c941c52f0c073`,{
        value: this.value
      }).then((data)=>{
        console.log(data)
      })
    }
  },
  mounted() {
  axios.get(`https://19ec-212-175-197-5.ngrok.io/progresso/62af4d63571c941c52f0c073`).then((data)=>{
    console.log(data)
  })
  }
}
</script>
<style>

#progresra{
  width: 100%;
  height: 900px;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 150px;
}
.progress{
  height: 40px;
}
.input-group{
  width: 450px;
}
</style>