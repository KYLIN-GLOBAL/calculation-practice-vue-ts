<template>
    <div v-html="currentState.mathML"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentState = ref({
    mathML: '<math><mrow><mn>1</mn><mo>+</mo><mn>2</mn></mrow></math>',
    answer: null as null | number,
})

const generateRandomFormula = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const answer = a + b;
    const mathML = `<math><mrow><mn>${a}</mn><mo>+</mo><mn>${b}</mn></mrow></math>`;
    currentState.value.answer = answer;
    currentState.value.mathML = mathML;
}

generateRandomFormula();

defineExpose({generateRandomFormula, currentState})

</script>