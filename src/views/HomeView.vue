<script setup>
import TabableTextarea from '@/components/TabableTextarea.vue';
import { ref } from 'vue';

let comment = ref('Test value');
setTimeout(() => {
  comment.value = 'It works'
}, 3000);
</script>

<template>
    <main>
        <form>
            <TabableTextarea v-model="comment" style="width:100%; height:300px;"></TabableTextarea>
         </form>
    </main>
</template>
