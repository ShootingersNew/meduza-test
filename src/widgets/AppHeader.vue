<template>
  <Header />
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const Header = defineAsyncComponent(() => import('meduza-pet-header/App'))
</script>
