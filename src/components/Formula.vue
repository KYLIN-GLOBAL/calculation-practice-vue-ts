<template>
    <div>
        <component ref="$template" :is="currentTemplate" :parameters />
    </div>
</template>

<script setup lang="ts">
import { PropType, ref, onMounted, computed } from 'vue';
import { OperationType, Operation2Component } from './formula-templates'

const props = defineProps({
    operation: {
        type: String as PropType<OperationType>,
        default: OperationType.plus,
    },
    parameterNum: {
        type: Number,
        default: 2,
    }
})
const $template = ref(null as any);
const parameters = ref([] as number[]);
const answer = ref();

const currentTemplate = computed(() => Operation2Component[props.operation]);

const generateRandomFormula = () => {
    const newParameters = [] as number[];
    for (let i = 0; i < props.parameterNum; i++) {
        newParameters.push(Math.floor(Math.random() * 10))
    }
    parameters.value = newParameters;
    answer.value = $template.value.evaluate(parameters.value)
}

onMounted(() => {
    generateRandomFormula()
});

defineExpose({answer, generateRandomFormula})

</script>