<script setup lang="ts">
import { ref } from 'vue'
import Formula from './Formula.vue'

const userInput = ref('');
const resultText = ref('Press "check" to submit your answer.')

const formulaComponent = ref(null as any);

const generateNewFormula = () => {
  if (formulaComponent.value) {
    formulaComponent.value.generateRandomFormula();
    userInput.value = '';
    resultText.value = 'Press "check" to submit your answer.';
  }
}

const checkAnswer = () => {
  if (userInput != null) {
    if (userInput.value == formulaComponent.value.currentState.answer) {
      resultText.value = "Right!"
    } else {
      resultText.value = "Try it Again!"
    }
  }
}

</script>

<template>
  <div class="card">
    <Formula ref="formulaComponent"/>
    <label for="answer">Your Answer: </label>
    <input name="answer" v-model.number="userInput"></input>
    <p>{{ resultText }}</p>
  </div>
  <button @click="checkAnswer">check</button>
  <button @click="generateNewFormula">new question</button>
</template>

<style scoped>

</style>
