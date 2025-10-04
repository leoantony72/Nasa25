import React from 'react'
import Header from './components/Header'
import PlanetInfo from './components/PlanetInfo'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <PlanetInfo />
      <div className="planet-container">
        <div className="planet-image" aria-hidden="true"></div>
      </div>
    </div>
  )
}

export default App
