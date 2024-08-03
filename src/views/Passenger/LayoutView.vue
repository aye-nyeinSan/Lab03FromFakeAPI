<script setup lang="ts">
import { ref, onMounted, defineProps, onBeforeUnmount } from "vue";
import { type Passenger } from "@/types";
import Passengerservices from "@/serivces/Passengerservices";
import { useRouter } from "vue-router";


const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const passenger = ref<Passenger | null>(null);
const router = useRouter();
onMounted(async () => {
  console.log("Props.ID:", props.id);

  try {
    const response = await Passengerservices.getPassengerByID(props.id);

    // console.log("API Response:", response);
    passenger.value = response.data;
    console.log("Passenger:", passenger.value);

  } catch (error) {
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
  console.error(error);
}
  
});

</script>

  <template v-if="passenger">
    <RouterView :passenger="passenger" />
  </template>
 

