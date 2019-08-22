<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="sticky" variant="info">
      <b-navbar-brand href="#">TechTest</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-on:click="buttonClicked('Home')" class="nav-link">Home</b-nav-item>
          <b-nav-item v-on:click="buttonClicked('About')" class="nav-link">About</b-nav-item>
          <b-nav-item v-on:click="buttonClicked('Task')" class="nav-link">Task</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {},
  methods: {
    buttonClicked(option) {
      this.$emit('buttonClicked', option);
    },
  },
};
</script>

<style scoped>
.sticky {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
