<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import { useMessageStore } from '@/stores/message';
  import { storeToRefs } from 'pinia';
  const store = useMessageStore();
  const { message } = storeToRefs(store);
</script>

<template>
  <div id="layout">
    <div id="flashMessage" v-if="message">
      <h4>{{ message }}</h4>
       </div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
  #layout {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 2rem;
    color: #2c3e50;
  }
  @keyframes yellowfade {
    from {
      background-color: yellow;
    }
    to {
      background-color: transparent;
    }
  }
  #flashMessage {
    animation: yellowfade 3s ease-in-out;
  }
</style>
