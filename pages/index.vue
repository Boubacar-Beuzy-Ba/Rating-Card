<template>
  <div class="flex justify-center items-center h-screen">
    <div class="container mx-auto max-w-sm rounded-3xl overflow-hidden shadow-lg bg-gray-900 px-4">
      <div class="rounded-full bg-gray-800 w-10 h-10 flex items-center justify-center mb-6 mt-3">
        <img src="../static/icon-star.svg" alt="Star">
      </div>
      <div class="mx-auto mb-4">
        <h1 class="text-3xl font-bold mb-2">How did we do?</h1>
        <p class="text-gray-500">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <div class="mx-auto mb-8 mt-8 flex flex-row justify-around">
        <button v-for="number in numbers"  @click="rateNumber" :key="number" class="text-gray-400 rounded-full bg-gray-800 hover:bg-gray-600 hover:text-white btnClicked w-12 h-12 flex items-center justify-center">{{ number }}</button>
      </div>
      <div class="px-auto mx-auto mb-6 flex items-center justify-center">
        <button class="btnColor text-white rounded-3xl w-full h-10 font-medium uppercase" @click="submitted">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
export default {
  name: 'IndexPage',

  data() {
    return {
    }
  },
  computed: {
    numbers() {
      return this.$store.state.numbers 
    }
  },
  methods: {
    rateNumber(event) {
      this.$store.commit('selected', Number(event.target.textContent))
      console.log(this.$store.state.selectedNumber)
    },
    submitted() {
      if (this.$store.state.selectedNumber !== 0) {
        this.$router.push('/thankyou')
      } else {
        console.log("Please give us a rate")
      }
    }
  },
}
</script>

<style>
.btnColor {
  background-color: hsl(25, 97%, 53%);
}
:hover.btnColor {
  background-color: hsl(0, 0%, 100%);
  color: hsl(25, 97%, 53%);
}
:focus.btnClicked {
  background-color: hsl(25, 97%, 53%);
  color: white;
}
</style>
