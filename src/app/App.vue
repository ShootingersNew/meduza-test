<script setup lang="ts">
import AppHeader from '@/widgets/AppHeader.vue'
import AppFooter from '@/widgets/AppFooter.vue'
</script>
<template>
  <AppHeader />
  <div>
    <RouterView />
  </div>
  <AppFooter />
</template>
