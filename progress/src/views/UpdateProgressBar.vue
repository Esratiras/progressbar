<template>

  <div class="box">
    <div class="percent">
      <h2 class="text">Progress</h2>

      <div class="progress">
        <div class="progress-bar" :style="{'width':`${getProgress}%`}" role="progressbar" aria-valuenow="75"
             aria-valuemin="0"
             aria-valuemax="100">{{ getProgress }}%
        </div>
      </div>
    </div>
  </div>
  <br><br>
  <div class="form-control-group">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Enter value" aria-label="Enter value" :value="value"
             ref="progressValue"
             :max="max">
      <div>
        <button type="button" class="btn btn-info btn-md mr-1" @click="localUpdate()">Add</button>
        <button type="button" class="btn btn-danger btn-md" @click="resetValue(this.$route.params.progressoId)">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  data() {
    return {
      value: 0,
      max: 100,
    }
  },

  methods: {
    localUpdate() {

      const value = parseInt(this.$refs.progressValue.value)
      this.value = value
      this.fullWidth = value

      if (this.value < 100 || this.value === 100) {

        this.updateValue({value: this.getProgress + this.value, id: this.$route.params.progressoId})
        this.getProgresso(this.$route.params.progressoId)

      }

    },
    ...mapActions({
      updateValue: 'updateStore/updateProgressValue',
      getProgresso: 'updateStore/getProgresso',
      resetValue: 'updateStore/resetValue'
    }),
  },
  mounted() {
    this.getProgresso(this.$route.params.progressoId);
  },
  computed: {
    ...mapGetters({
      getProgress: "updateStore/getProgress"
    }),

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
  border-radius: 20px;
}

.form-control-group{
  display: flex;
  justify-content: center;
}
.box .percent {
  width: 400px;
  position: relative;
}


</style>