import { useState } from 'react'
import './App.css'
import RandomPokemon from './RandomPokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RandomPokemon />
  )
}

export default App
