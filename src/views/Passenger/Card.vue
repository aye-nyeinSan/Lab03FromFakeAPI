<script setup lang="ts">
import { defineProps } from "vue";
import { type Passenger } from "../types/Passenger";
import { RouterLink } from "vue-router";

defineProps<{
  passenger: Passenger;
}>();
</script>

<template>
  <RouterLink
    class="event-link"
    :to="{ name: 'passenger-layout-view', params: { id: passenger?._id } }"
  >
    <div class="event-class">
      <div class="event-card">
        <span>{{ passenger?.name }} </span>
      </div>
    </div>
  </RouterLink>
  
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
.event-link {
  text-decoration: none;
}
</style>
