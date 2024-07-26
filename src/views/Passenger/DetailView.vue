<script setup lang="ts">
  import { toRefs, defineProps } from 'vue';
  import { type Passenger } from '@/types';

  const props = defineProps<{
    passenger: Passenger;
    id: string;
    page: Number;
  }>();

  const { passenger } = toRefs(props);
</script>

<template>
  <p>
    {{ passenger?.name }} on airline {{ passenger?.airline[0].name }} @
    {{ passenger?.airline[0].country }} country
  </p>
  <p><img :src="passenger?.airline[0].logo" alt="Airline Logo" /></p>
  <RouterLink :to="{  name: 'passenger-list-view'}">Back To Home</RouterLink>
</template>
