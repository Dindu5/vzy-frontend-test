# Vue Poll Component - Vzy Frontend Intern Task

A dynamic and interactive polling component built with Vue.js. This project was created as part of the Vue Frontend Dev Intern application process at Vzy.

## 🚀 Features

- **Interactive Poll Interface**

  - Clean and modern dark theme design
  - Smooth animations and transitions
  - Responsive layout

- **Voting System**

  - Click-to-vote functionality
  - Real-time percentage calculation
  - Visual feedback for selected options

- **Results Display**

  - Animated progress bars
  - Counting animation for percentages
  - Total votes counter
  - Clear visual distinction for selected option

- **Additional Features**
  - Reset functionality to start over
  - Error handling for vote processing
  - Support for pre-existing votes
  - Smooth transitions and animations throughout

## 🛠️ Technical Implementation

### Components Structure

- `Pool.vue`: Main container component
- `PoolQuestion.vue`: Displays the poll question
- `PoolOption.vue`: Individual option component with animations
- `usePoll.ts`: Composable for poll logic and state management

### Animations

- Progress bar animation with easing
- Percentage counter animation
- Fade transitions for elements
- Hover and active states

### State Management

- Reactive state using Vue's Composition API
- Type-safe implementation with TypeScript
- Centralized poll logic in a composable

## 🚦 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Dindu5/vzy-frontend-test
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## 🌐 Live Demo

Visit the live demo at: [Vercel Preview](https://vzy-frontend-test.vercel.app/)

## 🧰 Technologies Used

- Vue 3
- TypeScript
- Vite
- CSS3 (with animations)

## 📝 Project Requirements

This project was built to meet the following requirements:

✅ Display a poll question with four answer options  
✅ Implement click-to-vote functionality  
✅ Show percentage results after voting  
✅ Style the component using CSS  
✅ Add smooth animations when displaying results (Bonus)

## 📦 Project Structure

```
src/
├── components/
│   ├── PoolOption.vue
│   └── PoolQuestion.vue
├── views/
│   └── Pool.vue
├── composables/
│   └── usePoll.ts
├── types/
│   └── poll.ts
└── mock-data.ts
```

## 🤝 Contributing

While this is an interview project, suggestions and feedback are welcome. Feel free to open an issue or submit a pull request cheers.
