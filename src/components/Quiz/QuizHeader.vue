<template>
    <header>
        <h1>{{ state.name }}</h1>

        <p>
            Welcome to the first Quiz, How do you think you'll do?
        </p>
    </header>
</template>

<script setup>
import { state } from "@/stores/quizStore.js";

</script>