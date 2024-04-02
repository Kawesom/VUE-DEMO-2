<script setup>
import TeamMembers from '@/components/Teams/TeamMembers.vue';
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import team from '@/team.json';
import TeamFooter from '@/components/Teams/TeamFooter.vue';

</script>

<template>
  <TeamHeader :team="team"/>

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers :team="team"/>
  </div>
  <TeamFooter :team="team"/>
</template>