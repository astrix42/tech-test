<template>
  <div id="app">
    <router-view v-on:buttonClicked='buttonClicked($event)'></router-view>
  </div>
</template>
<script>

export default {
  name: 'app',
  data() {
    return {
    };
  },
  methods: {
    buttonClicked(eventName) {
      this.$router.push(eventName);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.spacer{
  height: 20px;
}
</style>
