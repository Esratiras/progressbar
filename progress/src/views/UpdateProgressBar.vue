<template>

  <div class="box">
    <div class="percent">
      <h2 class="text">Progress</h2>

      <div class="progress">
        <div class="progress-bar" :style="fullWidth" role="progressbar" aria-valuenow="75" aria-valuemin="0"
             aria-valuemax="100">{{ value }}%
        </div>
      </div>
    </div>
  </div>
  <br><br>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Enter value" aria-label="Enter value" v-model="value">
    <div>
      <button type="button" class="btn btn-info btn-lg" @click="updateValue()">Add</button>
    </div>
  </div>

</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      value: 0,
      max: 100,
    }
  },

  methods: {
    ...mapActions({
      updateValue: 'updateStore/updateProgressValue',
    }),
  },
  mounted() {
console.log(this.id)
  },
  computed: {

    fullWidth() {
      return `width:${this.value}%`;
    },
  }
}
</script>
<style>
.progress {
  height: 2rem !important;
}

.progress-bar {
  background: #17a2b8;
}

.input-group > .custom-select:not(:last-child), .input-group > .form-control:not(:last-child) {
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}

.input-group {
  width: 45%;
}

.form-control {
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 20px;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

body {
  background: #b4c6d2;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  display: flex;
}

.box {
  background: #fff;
  width: 450px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  box-shadow: 0 30px 60px rgba(0, 0, 0, .4);
  transition: transform .2s;
}

/* .box:hover
{
 transform:scale(1.2);
} */
.box .percent {
  width: 400px;
  position: relative;
}


</style>