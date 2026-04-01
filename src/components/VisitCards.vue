<script setup lang="ts">

import { mockVisits } from '../mockdata/visits'
import VisitCard from './VisitCard.vue'

</script>

<template>
  <div class="cards">
    <VisitCard v-for="visit in mockVisits" :key="visit.id" :visit="visit" />
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}
</style>