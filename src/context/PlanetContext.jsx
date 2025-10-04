import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

const PlanetContext = createContext()

export const usePlanet = () => {
  const context = useContext(PlanetContext)
  if (!context) {
    throw new Error('usePlanet must be used within a PlanetProvider')
  }
  return context
}

// API Configuration
const API_BASE_URL = 'http://127.0.0.1:5000'
const API_ENDPOINTS = {
  DATA: `${API_BASE_URL}/data`
}

// Utility function to generate safe keys
const generateSafeKey = (planet, index) => {
  if (planet && planet.object_id && typeof planet.object_id === 'string') {
    return `${planet.object_id}-${index}`
  }
  return `planet-${index}`
}

// Custom hook for API calls
const useApiCall = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async (url) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      return data
    } catch (err) {
      const errorMessage = err.message || 'An unknown error occurred'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  return { fetchData, loading, error, setError }
}

export const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState([])
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0)
  const { fetchData, loading, error, setError } = useApiCall()

  // Fetch planets data
  useEffect(() => {
    const loadPlanets = async () => {
      try {
        const data = await fetchData(API_ENDPOINTS.DATA)
        
        // Validate and clean the data
        const validPlanets = Array.isArray(data) ? 
          data.filter(planet => planet && typeof planet === 'object') : []
        
        setPlanets(validPlanets)
        setCurrentPlanetIndex(0)
      } catch (err) {
        console.error('Failed to load planets:', err)
      }
    }

    loadPlanets()
  }, [fetchData])

  // Memoized current planet to prevent unnecessary re-renders
  const currentPlanet = useMemo(() => {
    return planets[currentPlanetIndex] || {}
  }, [planets, currentPlanetIndex])

  // Memoized navigation functions
  const handleNextPlanet = useCallback(() => {
    if (planets.length > 0) {
      setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % planets.length)
    }
  }, [planets.length])

  const handlePrevPlanet = useCallback(() => {
    if (planets.length > 0) {
      setCurrentPlanetIndex((prevIndex) => (prevIndex - 1 + planets.length) % planets.length)
    }
  }, [planets.length])

  const setPlanetIndex = useCallback((index) => {
    if (index >= 0 && index < planets.length) {
      setCurrentPlanetIndex(index)
    }
  }, [planets.length])

  // Memoized context value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    planets,
    currentPlanet,
    currentPlanetIndex,
    loading,
    error,
    handleNextPlanet,
    handlePrevPlanet,
    setPlanetIndex,
    // Additional utility functions
    hasPlanets: planets.length > 0,
    totalPlanets: planets.length,
    canGoNext: planets.length > 1,
    canGoPrev: planets.length > 1,
    // Utility function for safe keys
    generateSafeKey
  }), [
    planets,
    currentPlanet,
    currentPlanetIndex,
    loading,
    error,
    handleNextPlanet,
    handlePrevPlanet,
    setPlanetIndex
  ])

  return (
    <PlanetContext.Provider value={value}>
      {children}
    </PlanetContext.Provider>
  )
}