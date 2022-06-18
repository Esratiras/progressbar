<template>
<div id="progresra">
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" :style="{ width: value + '%' }" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> % {{value}}</div>
</div>
<br>
<button type="button" class="btn btn-success" @click="randomValue">Add</button>
</div>
</template>

<script>
  export default {
    data() {
      return {
        value: 25,
        max: 100
      }
    },
    methods: {
      randomValue() {
        if(this.value < 100) {
          this.value = Math.floor(Math.random() * this.max) + 1;
        }
        return
      }
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
</style>