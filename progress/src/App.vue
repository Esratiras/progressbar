<template>
  <router-view />
  <CreateProgressBar msg="Welcome to Progresso"/>
</template>
<script>
import CreateProgressBar from "@/views/CreateProgressBar";
export default {
  name: "App",
  components: {
    CreateProgressBar
  }
  };

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>