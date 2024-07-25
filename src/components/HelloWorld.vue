<template>
  <div class="card">
    <select name="operation" v-model="operation">
      <option>plus</option>
      <option>multiply</option>
    </select>
    <label for="operation"> operation</label>
    <span> with </span>
    <input type="number" v-model="parameterNum"></input>
    <label for="parameters"> parameters</label>
    <Formula ref="formulaComponent" :operation="operation" :parameterNum="parameterNum"/>
    <label for="answer">Your Answer: </label>
    <input name="answer" v-model.number="userInput"></input>
    <p>{{ resultText }}</p>
  </div>
  <button @click="checkAnswer">check</button>
  <button @click="generateNewFormula">new question</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Formula from './Formula.vue'
import { OperationType } from './formula-templates';

const userInput = ref('');
const resultText = ref('Press "check" to submit your answer.')

const operation = ref(OperationType.plus)
const parameterNum = ref(0);

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
    if (userInput.value == formulaComponent.value.answer) {
      resultText.value = "Right!"
    } else {
      resultText.value = "Try it Again!"
    }
  }
}

</script>

<style scoped>

</style>
