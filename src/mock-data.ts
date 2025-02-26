import type { PollData } from './types/poll'

export const data: PollData = {
  question: 'What is your favorite programming language?',
  options: [
    { text: 'JavaScript', votes: 10 },
    { text: 'Python', votes: 3 },
    { text: 'Java', votes: 8 },
    { text: 'C++', votes: 2 },
  ],
}
