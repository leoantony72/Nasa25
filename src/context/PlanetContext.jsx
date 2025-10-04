import React, { createContext, useContext, useState } from 'react'

const PlanetContext = createContext()

export function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([])
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0)

  return (
    <PlanetContext.Provider value={{ planets, setPlanets, currentPlanetIndex, setCurrentPlanetIndex }}>
      {children}
    </PlanetContext.Provider>
  )
}

export function usePlanetContext() {
  return useContext(PlanetContext)
}
