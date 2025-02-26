<template>
  <div class="poll-container">
    <PollQuestion :question="question" />

    <div class="options-container">
      <PollOption
        v-for="(option, index) in options"
        :key="option.text"
        :option="option"
        :has-voted="results.hasVoted"
        :isSelected="results.selectedOptionIndex === index"
        @vote="() => vote(index)"
      />
    </div>

    <p v-if="results.hasVoted" class="total-votes">Total votes: {{ results.totalVotes }}</p>
  </div>

  <button v-if="results.hasVoted" class="reset-button" @click="reset">Reset Poll</button>
</template>

<script setup lang="ts">
import PollOption from '../components/PollOption.vue'
import PollQuestion from '../components/PollQuestion.vue'
import { data } from '../mock-data'
import { usePoll } from '../composables/usePoll'

const { question, options, results, vote, reset } = usePoll(data)
</script>

<style scoped>
.poll-container {
  max-width: 600px;
  margin: var(--spacing-lg) auto;
  padding: var(--spacing-lg);
  background: var(--color-surface);
  border-radius: var(--border-radius);
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.total-votes {
  margin-top: var(--spacing-md);
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.reset-button {
  display: block;
  margin: var(--spacing-lg) auto 0;
  padding: 0.75rem var(--spacing-lg);
  background: var(--color-text);
  color: var(--color-background);
  border-radius: var(--border-radius);
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-quick);
}

.reset-button:hover {
  transform: translateY(-2px);
}

.reset-button:active {
  transform: translateY(0);
}
</style>
