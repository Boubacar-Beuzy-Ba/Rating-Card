<template>
    <div class="flex justify-center items-center h-screen">
        <div class="container mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl bg-gray-900 px-4">
            <div class="flex items-center justify-center mt-28">
                <img src="../static/illustration-thank-you.svg" alt="Thank you">
            </div>
            <div class="mt-6 mb-4 flex items-center justify-center">
                <p class="flex items-center justify-center rounded-3xl w-64 h-10 bg-gray-700 text-orange-500" > You selected {{ selectedNumber }} out of 5</p>
            </div>
            <div class="mx-auto mb-4 px-6">
                <h1 class="text-3xl font-bold mb-2 flex justify-center">Thank you!</h1>
                <p class="text-gray-500 flex justify-center items-center text-large tracking-normal mb-12">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                <div class="px-auto mx-auto mb-21 flex items-center justify-center">
                    <button class="btnColor text-white rounded-3xl w-full h-10 font-medium uppercase" @click="home">Rate again</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        computed: {
            selectedNumber() {
                return this.$store.state.selectedNumber 
            }
        },
        methods: {
            home() {
                this.$router.push('/')
            }
        },
    }
</script>

<style>
.btnColor {
  background-color: hsl(25, 97%, 53%);
}
</style>