<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { ref } from 'vue';

let message = ref('Dogtooth');

  setTimeout(() =>{
     message.value = "Howdy";
  }, 2000);

let doSomething = () => {
  alert("Do It");
}


</script>

<template>
  <main>
 <p>{{ message }}</p>
 <p>
  <button @click="doSomething">Clicky Blicky</button>
 </p>
    <TheWelcome />
  </main>
</template>
