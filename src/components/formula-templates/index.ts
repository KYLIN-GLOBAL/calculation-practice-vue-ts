import Plus from "./Plus.vue";

enum OperationType {
    plus = 'plus',
}

const Operation2Component = {
    [OperationType.plus]: Plus
}

export {
    OperationType,
    Operation2Component,
}
