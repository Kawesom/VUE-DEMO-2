<script setup>
import Model from '@/components/Model.vue';
import { ref } from 'vue';
import { useTeamStore } from '@/stores/teamStore.js'


let showModel = ref(false);
let team = useTeamStore();


</script>

<template>
    <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="! team.spotsRemaining"
    @click="showModel = true"
    >Add Member ({{ team.spotsRemaining }} Spots Left)</button>

    <Teleport to="body">
        <Model :show="showModel" @close="showModel = false">
      
          <template #default>
            <p>Add a new member to your Team</p>
      
            <form class="mt-6">
              <div class="flex gap-2">
              <input type="email" placeholder="Email Address...." class="flex-1">
              <button>Add</button>
              </div>
            </form>
          </template>
      
        </Model>
        </Teleport>
</template>
