<script setup>

import { useStorage } from "@/Composables/useStorage.js";

let food = useStorage("food","Chicken");
let age = useStorage("age",24);

let obj = useStorage('obj', {one: 'one'});

setTimeout(() => {
    obj.value = {'change':'entirely'};
}, 1000);

</script>

<template>
    <main>
        <p>
            What is your favourite food? <input type="text" v-model="food">
        </p>

        <p>
            How Old are you? <input type="number" v-model="age">
        </p>
    </main>
</template>
