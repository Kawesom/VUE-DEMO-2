<template>
    <Transition name="fade">
    <div v-if="show" class="model-mask">
        <div class="model-container">


            <div>
                <slot>Default body</slot>
            </div>

            <footer class="model-footer">
                <slot name="footer">
                    <button @click="$emit('close')">Close</button>
                </slot>

            </footer>
        </div>
    </div>
    </Transition>
</template>

<script setup>
defineProps({
    show: Boolean
});
</script>

<style scoped>
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
    opacity: 100;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s
}

.model-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
}

.model-container {
    background: white;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 7px;
}

.model-footer {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding: 0.5rem;
    font-size:.8rem;
}

.model-footer button {
    background: #ddd;
    padding: .25rem .75rem;
    border-radius: 20px;
}

.model-footer button:hover {
    background: #c8c8c8;
}
</style>

/* can be put in the transition <transition-group>

</transition-group>
enter-from-class="opacity-0 scale-150"
enter-to-class="opacity-100 scale-100"
enter-active-class="transition duration-300"
leave-from-class="opacity-100 scale-100"
leave-to-class="opacity-0 scale-150"
leave-active-class="transition duration-200"
*/