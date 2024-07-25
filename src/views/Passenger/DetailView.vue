<script setup lang="ts">
import { toRefs, defineProps } from "vue";
import { type Passenger } from "@/types/Passenger";

const props = defineProps<{
  passenger: Passenger;
  id: string;
}>();

const { passenger } = toRefs(props);
</script>

<template>
  <p>{{ passenger?.name }} on {{ passenger?.airline[0].name }} @ {{ passenger?.airline[0].country }}</p>
  <p><img :src="passenger?.airline[0].logo" alt="Airline Logo"></p>
</template>
