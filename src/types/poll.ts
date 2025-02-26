export interface PollOption {
  text: string
  votes: number
  percentage?: number // Make percentage optional since it's calculated
}

export interface PollData {
  question: string
  options: PollOption[]
}

export interface PollResults {
  totalVotes: number
  hasVoted: boolean
  selectedOptionIndex: number | null
}
