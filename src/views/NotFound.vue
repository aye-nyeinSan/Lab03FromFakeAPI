<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
const props = withDefaults(
    defineProps<{
        resource: string}
        >(),
        {
            resource: 'page'
        }
    
)

</script>
<template>
    <div>
        <h1>Oops!</h1>
        <h1>404 Not Found</h1>
        <p>Sorry, the {{ resource }} you are looking for does not exist.</p>
   <RouterLink :to="{name:'passenger-list-view'}">Back to Home page</RouterLink>
   </div>
</template>