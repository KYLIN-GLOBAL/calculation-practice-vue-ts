<template>
    <math>
        <mrow>
            <template v-for="(param, index) in parameters">
                <mn>{{ param }}</mn>
                <mo v-if="index !== parameters.length - 1">+</mo>
            </template>
        </mrow>
    </math>
</template>

<script setup lang="ts">
const props = defineProps({
    parameters: {type: Array, default: []},
})

const evaluate = (parameters: number[]) => {
    return parameters.reduce((acc, param) => acc + param, 0)
}
defineExpose({parameters: props.parameters, evaluate})
</script>