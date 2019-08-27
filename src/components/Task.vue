<template>
  <div>
    <Navbar v-on:buttonClicked='buttonClicked($event)'/>
    <div  class='spacer'></div>
    <h1>Currency to ZAR Conversion Tool</h1>
    <b-form >
      <b-row class="my-1">
        <b-col sm="4"> </b-col>
        <b-col sm="4">
          <b-form-input
            id="input-live"
            :state="validateAmount"
            v-model="foreignValue"
            placeholder="Amount">
          </b-form-input>
        </b-col>
      </b-row>
      <b-form-invalid-feedback id="input-live-feedback">
        Please enter a number with up to 2 decimals
      </b-form-invalid-feedback>
      <br>
      <b-row class="my-1">
        <b-col sm="4"> </b-col>
        <b-col sm="4">
      <b-form-select
        id="input-sel"
        v-model="selected"
        :state="validateCurr"
        :options="options"
        class="mb-3">
        </b-form-select>
        </b-col>
      </b-row>
      <b-form-invalid-feedback id="input-sel-feedback">
        Please select a currency
      </b-form-invalid-feedback>
      <br>
    </b-form>
    <button  v-if="noErrors" v-on:click='Calc'>CALC</button>
    <br>
    <div class='result'>
    <div v-if="showCalc">
      <strong>R: {{zarValue}} </strong>
    </div>
    </div>
    <hr>
  </div>
</template>


<script>
import Navbar from './Navbar.vue';

export default {
  data() {
    return {
      selected: 0,
      foreignValue: 0,
      rate: 0,
      showCalc: false,
      noErrors: true,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    Calc() {
      this.showCalc = false;
      if (this.noErrors) {
        this.$store.commit('Calc', {
          foreignValue :this.foreignValue,
          selected: this.selected,
        })
        this.showCalc = true;
      }
    },
    buttonClicked(eventName) {
      this.$emit('buttonClicked', eventName);
    },
  },
  computed: {
    validateAmount() {
      const regex = new RegExp(/^(?:\d*\.\d{1,2}|\d+)$/, 'g');
      if (regex.test(this.foreignValue)) {
        // eslint-disable-next-line
        this.noErrors = true;
      } else {
        // eslint-disable-next-line
        this.noErrors = false;
      }
      return this.noErrors;
    },
    validateCurr() {
      if (this.selected !== 0) {
        return true;
      }
      return false;
    },
    options(){
      return this.$store.state.options;
    },
    zarValue(){
      return this.$store.state.zarValue;

    }
  },
  created() {
    this.$store.commit("getOptions");
  },
};
</script>
<style scoped>
  .result{
    margin:10px;
  }
</style>
