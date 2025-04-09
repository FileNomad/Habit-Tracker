import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HabitCard from './components/HabitCard'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Habit Tracker</h1>
      <HabitCard name="Exercise" />
      <HabitCard name ="Drink Water" />
      <HabitCard name ="Meditate" />
    </div>
  );
}

export default App;
