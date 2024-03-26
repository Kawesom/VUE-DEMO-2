<template>
    
    <textarea @keydown.tab.prevent="onTabPress"
    @keyup="emit('update:modelValue', $event.target.value);" 
    v-text="modelValue" />
</template>
//refering to line 4 inline version of update function below 
<script setup>
defineProps({
    modelValue: String
});

let emit = defineEmits(['update:modelValue']);

function onTabPress(e) {

let textarea = e.target;

let val = textarea.value;
let start = textarea.selectionStart
let end = textarea.selectionEnd;

//set textarea value to: text before coret + tab + text after correct
textarea.value = val.substring(0, start) + "\t" + val.substring(end);

// put corect at the right position again
textarea.selectionStart = textarea.selectionEnd = start + 1;

};

//function update(e) {
// emit('update:modelValue', e.target.value);
//}
</script>