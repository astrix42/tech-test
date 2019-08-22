<template>
  <div id="app">

    <Navbar v-on:buttonClicked='buttonClicked($event)'/>
    <div class='spacer'></div>
      <component v-bind:is='component'/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Task from './components/Task.vue';


export default {
  name: 'app',
  data() {
    return {
      component: 'HelloWorld',
    };
  },
  components: {
    HelloWorld,
    Navbar,
    About,
    Task,
  },
  methods: {
    buttonClicked(eventName) {
      switch (eventName) {
        case 'Task':
          this.component = 'Task';
          break;
        case 'About':
          this.component = 'About';
          break;
        default:
          this.component = 'HelloWorld';
          break;
      }
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
