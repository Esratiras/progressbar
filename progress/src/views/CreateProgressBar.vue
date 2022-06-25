<template>
  <div class="hello">
    <h1>Welcome to Progresso</h1>
    <p>
      Progresso let you track your progress on everything. Percent by percent, day by day.
<!--      And share it with your friend.-->
<!--      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">URL</a>.-->
    </p>
    <button type="button" class="btn btn-info btn-lg" @click="createProgresso">Create</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'createProgressBar',

  methods:{
    ...mapActions({
      createProgresso:'createStore/createProgress',
    }),

  },
  mounted() {
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
