<script setup>
import {counter} from "@/stores/counterStore.js";
</script>

<template>
  <div class="about">
    <h1>
      {{ counter.count }}
    </h1>
    <button @click="counter.increment()">Increase</button>
  </div>
</template>

