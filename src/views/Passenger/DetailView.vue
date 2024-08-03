<script setup lang="ts">
  import { toRefs, defineProps } from 'vue';
  import { type Passenger } from '@/types';

  import { useMessageStore } from '@/stores/message';
  import router from '@/router';
  const store = useMessageStore();
  const props = defineProps<{
    passenger: Passenger;
    id: string;
    page: Number;
  }>();

  const { passenger } = toRefs(props);
  const update = () => {
    store.setMessage('Passenger Updated: ' + props.passenger.name);
    setTimeout(() => {
      store.setMessage('');
    }, 3000);
    router.push({
      name: 'passenger-list-view',
    });
  };
</script>

<template>
  <div>
    <h1> Passenger Detail</h1>
    <p>
      {{ passenger?.name }} on airline {{ passenger?.airline[0].name }} @
      {{ passenger?.airline[0].country }} country
    </p>
    <p>
      <img :src="passenger?.airline[0].logo" alt="Airline Logo" />
    </p>
    <button @click="update">Update</button>
  </div>

  <RouterLink :to="{ name: 'passenger-list-view' }">Back To Home</RouterLink>
</template>
