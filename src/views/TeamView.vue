<script setup>
import TeamMembers from '@/components/Teams/TeamMembers.vue';
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import Model from '@/components/Model.vue';
import TeamFooter from '@/components/Teams/TeamFooter.vue';
import { useTeamStore } from '@/stores/teamStore.js'
import { ref } from 'vue';

let team = useTeamStore();
team.fill()

setTimeout(() => {
  team.grow(25)
}, 2000)

let showModel = ref(false);
</script>

<template>
  <TeamHeader @add="showModel = true" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />

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
</template>