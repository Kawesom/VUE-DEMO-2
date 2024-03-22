<script setup>
import {useFlash} from '@/Composables/useFlash.js';

let { flash } = useFlash();
</script>

<template>
  <div class="about">
    <p>
      <button @click="flash('Nay!!!','It Works on the about page Baby!!!')">Clicky Blicky</button>
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
