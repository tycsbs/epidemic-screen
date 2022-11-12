<template>
  <div>
    <RouterView />
  </div>

</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
console.log(import.meta.env.VITE_API, 'env')
</script>