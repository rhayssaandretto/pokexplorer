import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PokemonDetails from './pages/PokemonDetails'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pokemon/" element={<PokemonDetails />} />
      </Routes>
    </div>
  )
}

export default App