<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from "vue";
import Passengerservices from "../serivces/Passengerservices";
import Passenger from "../types/Passenger";
import PassengerCard from "./PassengerCard.vue";
const passengers = ref<Passenger[] | null>(null);
const totalPassengers = ref(0);

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalPassengers.value / 3);
  return page.value < totalPages;
});
const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
});

const page = computed(() => props.page);
onMounted(() => {
  watchEffect(() => {
   
    Passengerservices.getPassengers(3, page.value).then((response) => {
      passengers.value = response.data.data;
        totalPassengers.value = response.data.totalPassengers;
     console.log("Getting totalPassengers:", totalPassengers.value);
      console.log("Passenger: ", passengers.value);
    });
  });
});
</script>

<template>
  <div>
    <h1>Passenger List</h1>

    <PassengerCard
      v-for="passenger in passengers"
      :key="passenger._id"
      :passenger="passenger"
    />
  </div>
  <div class="pagination">
    <RouterLink
      id="page-prev"
      :to="{ name: 'passenger-list-view', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
    >
      &#60; Prev Page
    </RouterLink>
    <RouterLink
      id="page-next"
      :to="{ name: 'passenger-list-view', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
    >
      Next Page &#62;
    </RouterLink>
  </div>
</template>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  justify-content: center;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
