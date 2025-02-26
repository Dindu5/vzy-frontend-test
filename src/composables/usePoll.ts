import { ref, computed } from 'vue'
import type { PollOption, PollData, PollResults } from '../types/poll'

interface PollOptionWithPercentage extends PollOption {
  percentage: number
}

export function usePoll(initialData: PollData) {
  const question = ref(initialData.question)
  const options = ref<PollOptionWithPercentage[]>(
    initialData.options.map(option => ({ ...option, percentage: 0 }))
  )
  const hasVoted = ref(false)
  const selectedOptionIndex = ref<number | null>(null)
  
  // Calculate initial total votes
  const initialTotalVotes = initialData.options.reduce((sum, option) => sum + option.votes, 0)
  const totalVotes = ref(initialTotalVotes)

  // Calculate initial percentages
  const calculatePercentages = () => {
    options.value.forEach((option) => {
      option.percentage = totalVotes.value > 0 
        ? (option.votes / totalVotes.value) * 100 
        : 0
    })
  }

  // Initialize percentages
  calculatePercentages()

  const vote = (index: number) => {
    try {
      options.value[index].votes++
      totalVotes.value++
      calculatePercentages()
      hasVoted.value = true
      selectedOptionIndex.value = index
    } catch (error) {
      console.error('Error while voting:', error)
    }
  }

  const reset = () => {
    options.value = initialData.options.map(option => ({ ...option, percentage: 0 }))
    totalVotes.value = initialTotalVotes
    hasVoted.value = false
    selectedOptionIndex.value = null
    calculatePercentages()
  }

  const results = computed<PollResults>(() => ({
    totalVotes: totalVotes.value,
    hasVoted: hasVoted.value,
    selectedOptionIndex: selectedOptionIndex.value
  }))

  return {
    question,
    options,
    results,
    vote,
    reset
  }
}
