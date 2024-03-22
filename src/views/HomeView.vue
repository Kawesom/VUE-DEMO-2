<script setup>
//import TheWelcome from '@/components/TheWelcome.vue'
//import { ref } from 'vue';
import {useFlash} from '@/Composables/useFlash.js';

let {flash} = useFlash();


</script>

<template>
  <main>
 <p>
  <button @click="flash('Yay!!','It Works Baby!!!','info')">Clicky Blicky</button>
 </p>
  </main>
</template>
