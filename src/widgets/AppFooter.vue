<template>
  <Footer />
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const Footer = defineAsyncComponent(() => import('meduza-pet-footer/App'))
</script>
