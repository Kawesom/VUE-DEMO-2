<script setup>
import { useCounterStore } from "@/stores/counterStore.js";

let counter = useCounterStore();
</script>

<template>
  <div>
    <h1>
      {{ counter.count }}
    </h1>
    <button @click="counter.increment()"
    :disabled="! counter.remaining"
    >Increase ({{ counter.remaining }}) Remaining</button>
  </div>
</template>

