<template>
  <div>
    <p class="poll-helper">Select an answer</p>
    <h2 class="poll-question">{{ question }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  question: string
}>()
</script>

<style scoped>
.poll-question {
  margin-bottom: 2rem;
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
}

.poll-helper {
  font-size: 1rem;
  color: #888;
  margin-bottom: 0.5rem;
  text-align: center;
}
</style>
