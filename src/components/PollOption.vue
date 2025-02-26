<template>
  <div
    class="option"
    :class="{
      voted: hasVoted,
      active: hasVoted && isSelected,
    }"
    @click="!hasVoted && handleVote()"
  >
    <div class="option-content">
      <div class="text-container">
        <span class="option-text">{{ option.text }}</span>
        <transition name="fade">
          <span v-if="hasVoted" class="percentage" :class="{ 'percentage-selected': isSelected }">
            {{ displayedPercentage }}%
          </span>
        </transition>
      </div>

      <div v-if="hasVoted" class="result-bar-container">
        <div
          class="result-bar"
          :class="{ 'result-bar-selected': isSelected }"
          :style="{ width: `${option.percentage || 0}%` }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { PollOption } from '../types/poll'

interface Props {
  option: PollOption
  hasVoted: boolean
  isSelected: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'vote'): void
}>()

const handleVote = () => {
  emit('vote')
}

const displayedPercentage = ref(0)

watch(
  () => props.hasVoted,
  (newValue) => {
    if (newValue) {
      animatePercentage()
    } else {
      displayedPercentage.value = 0
    }
  },
)

const animatePercentage = () => {
  const duration = 1000 // 1 second duration to match the progress bar
  const startTime = performance.now()
  const startValue = 0
  const endValue = Math.round(props.option.percentage || 0)

  const updateValue = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Use easeOutQuart easing function for smooth counting
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    displayedPercentage.value = Math.round(startValue + (endValue - startValue) * easeOutQuart)

    if (progress < 1) {
      requestAnimationFrame(updateValue)
    }
  }

  requestAnimationFrame(updateValue)
}
</script>

<style scoped>
.option {
  padding: var(--spacing-sm);
  background: var(--color-surface);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all var(--transition-quick);
  position: relative;
  overflow: hidden;
}

.option:hover:not(.voted) {
  background: var(--color-surface-hover);
  border-color: var(--border-color);
}

.option.voted {
  cursor: default;
}

.option.active {
  border-color: var(--color-accent);
  background: rgba(0, 210, 60, 0.05);
}

.option-content {
  position: relative;
  min-height: 2rem;
}

.text-container {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xs);
}

.option-text {
  color: var(--color-text);
  transition: transform var(--transition-quick);
}

.active .option-text {
  color: var(--color-accent);
  transform: translateX(8px);
}

.result-bar-container {
  position: relative;
  height: 6px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
  overflow: hidden;
}

.result-bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  width: 0;
  transition: width var(--transition-slow);
  animation: grow-bar var(--transition-slow) forwards;
}

.result-bar-selected {
  background: var(--color-accent);
  opacity: 0.5;
}

.percentage {
  font-weight: bold;
  color: var(--color-text-secondary);
  transition: all var(--transition-quick);
  min-width: 3rem;
  text-align: right;
}

.percentage-selected {
  color: var(--color-accent);
}

@keyframes grow-bar {
  from {
    width: 0;
  }
  to {
    width: v-bind('option.percentage + "%"');
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all var(--transition-medium);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
