<script setup lang="ts">
import type { Visit } from '../types/Visit'

interface Props {
  visit: Visit
}

defineProps<Props>()

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

</script>

<template>
  <div class="card" :class="visit.status">
    <h2>Store Name: {{ visit.store }} ({{ visit.city }})</h2>
    <p>Rep Name: {{ visit.rep }}</p>
    <p>Status: {{ visit.status }}</p>
    <p>Visit Date: {{ formatDate(visit.visitDate) }}</p>
  </div>
</template>

<style scoped>
.card {
  width: 15rem;
  padding: 1rem;
  border: 1px solid #103166;
  border-radius: 5px;
  text-align: center;
}

.completed {
  background-color: #d4edda;
}

.in_progress {
  background-color: #fff3cd;
}

.pending {
  background-color: #d1ecf1;
}

.cancelled {
  background-color: #f8d7da;
}
</style>