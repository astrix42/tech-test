<template>
  <div class="About">
    <Navbar v-on:buttonClicked='buttonClicked($event)' />
    <div class='spacer'></div>
    <h1>Thomas Verhave</h1>
    <b-img rounded :src="require('../assets/profile.jpg')" alt='Thomas Hermanus Verhave'></b-img>
    <p class='about'>
      Hi, I'm Thomas, and I enjoy software development.
      I have always been fascinated by computers and how they work.
      I started working with code in grade 4. I built an HTML web page
      with some embedded flash games.
      With help from my father, we hosted it on his domain.
    </p>
    <p class='about'>
        I went on to play around with various programming
        languages like Visual Basic, Delphi and Java throughout
        my school career. I also developed a good base knowledge when
        I obtained my CompTIA A+ ( hardware certification ) when I was
        in grade 9. After university, I Completed a software
        development internship and have been a professional developer since.
    </p>
    <hr>
    <p class='about'>
        More than 3 years programming and application
        development experience. More than 18
        years general computer use experience from hardware to
        software and exposure to a wide
        variety of technologies. Applicant has tremendous drive,
        and claims to have discovered his
        life passion in software development.
    </p>
        <p class='about'>
        Applicant can adapt to work with any coding
        language with remarkable ease and speed. Applicant
        has worked with international
        clients. Although the applicant might have a
        few quirks you can't help but like his unique
        approach to social interactions. Furthermore,
        the applicant aspires to always move
        forward and strives to adapt to any environment.
    </p>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'About',
  props: {
    msg: String,
  },
  components: {
    Navbar,
  },
  methods: {
    buttonClicked(eventName) {
      this.$emit('buttonClicked', eventName);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about{
  margin: 10px 25%;
  text-align: center;
  width: 50%;
}
</style>
