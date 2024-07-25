<script setup lang="ts">
import { defineProps } from 'vue';
import { Passenger } from '../types/Passenger';

const props = defineProps<{
    passenger: Passenger;
}>();
</script>

<template>
  <div class="event-class">
    <div class="event-card">
      <span>{{ passenger.name }} on the {{ passenger.airline[0].name }}  </span>
       
    </div>
  </div>
</template>

<style scoped>
.event-class {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-class:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0.2);
}

</style>
