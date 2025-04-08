import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HabitCard from "./components/HabitCard"

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Habit Tracker</h1>
      <HabitCard name="Exercise" isDone={true} />
      <HabitCard name ="Drink Water" isDone={false} />
      <HabitCard name ="Meditate" isDone={false} />
    </div>
  );
}

export default App;
