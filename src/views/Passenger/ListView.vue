<script setup lang="ts">
import { ref, computed, onMounted, watchEffect, defineProps } from "vue";
import Passengerservices from "@/serivces/Passengerservices";
import {type Passenger} from "@/types";
import PassengerCard from "./Card.vue";
import { useRouter } from "vue-router";
import nProgress from "nprogress";
const router = useRouter();
const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
});

const passengers = ref<Passenger[] | null>(null);
const totalPassengers = ref(0);
const page = ref<number>(props.page);

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalPassengers.value / 10);
  return page.value < totalPages;
});

const fetchPassengers = async () => {
  try {
     const passengerList = await Passengerservices.getPassengers(10, page.value);
    console.log("Passenger List:", passengerList, "Page:", page.value);
    passengers.value = passengerList.data.data;
    totalPassengers.value = passengerList.data.totalPassengers;
  }
    catch (error) {
  //   if ((error as any).response && (error as any).response.status === 404) {
  //     router.push({
  //       name: "404-resource-view",
  //       params: { resource: "passenger" },
  //     });
  //   } else {
  //     router.push({
  //       name: "network-error-view",
  //     });
  //   }
  // }
  console.log("Error:", error);
}
  
  }
   


onMounted(() => {
  
  // Initial fetch
 
  watchEffect(() => {
    page.value = props.page;
    //console.log("Props Page Updated:", props.page);
    fetchPassengers();
  });
});
</script>

<template>
  <div class="events">
    <h1>Passenger List</h1>
    <PassengerCard
      v-for="passenger in passengers"
      :key="passenger._id"
      :passenger="passenger"
      :page="page"
    />
  
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
      :to="{ name: 'passenger-list-view', query: { page: page+ 1 } }"
      rel="next"
      v-if="hasNextPage"
    >
      Next Page &#62;
    </RouterLink>
  </div>
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
