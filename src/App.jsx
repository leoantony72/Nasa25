import React from 'react'
import Header from './components/Header'
import PlanetInfo from './components/PlanetInfo'
import ErrorBoundary from './components/ErrorBoundary'
import { PlanetProvider } from './context/PlanetContext'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <PlanetProvider>
        <div className="app">
          <Header />
          <PlanetInfo />
          <div className="planet-container">
            <div className="planet-image" aria-hidden="true"></div>
          </div>
        </div>
      </PlanetProvider>
    </ErrorBoundary>
  )
}

export default App
