import React, { useCallback, memo } from 'react'
import { useNavigate } from 'react-router-dom'
  import { usePlanet } from '../context/PlanetContext'

// Loading component
const LoadingSpinner = memo(() => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading planets...</p>
  </div>
))

// Error component
const ErrorMessage = memo(({ error, onRetry }) => (
  <div className="error-container">
    <div className="error-icon">⚠️</div>
    <h3>Oops! Something went wrong</h3>
    <p>{error}</p>
    <button className="retry-btn" onClick={onRetry}>
      Try Again
    </button>
  </div>
))

// Planet buttons component
const PlanetButtons = memo(({ 
  onNavigateToCharacteristics, 
  onPrevPlanet, 
  onNextPlanet, 
  canGoPrev, 
  canGoNext 
}) => (
  <div className="planet-buttons">
    <button 
      className="planet-btn primary" 
      onClick={onNavigateToCharacteristics}
      aria-label="View planet characteristics"
    >
      View Characteristics
    </button>
    <button 
      className="planet-btn secondary" 
      onClick={onPrevPlanet} 
      disabled={!canGoPrev}
      aria-label="Go to previous planet"
    >
      Previous Planet
    </button>
    <button 
      className="planet-btn secondary" 
      onClick={onNextPlanet} 
      disabled={!canGoNext}
      aria-label="Go to next planet"
    >
      Next Planet
    </button>
  </div>
))

const PlanetInfo = memo(() => {
  const navigate = useNavigate()
  const { 
    currentPlanet, 
    loading, 
    error, 
    handleNextPlanet, 
    handlePrevPlanet,
    canGoNext,
    canGoPrev,
    hasPlanets
  } = usePlanet()

  const navigateToCharacteristics = useCallback(() => {
    if (hasPlanets) {
      navigate('/characteristics')
    }
  }, [navigate, hasPlanets])

  const handleRetry = useCallback(() => {
    window.location.reload()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={handleRetry} />
  }

  if (!currentPlanet || !hasPlanets) {
    return (
      <div className="no-data-container">
        <div className="no-data-icon">🌌</div>
        <h3>No planets available</h3>
        <p>There are no planets to display at the moment.</p>
      </div>
    )
  }

  return (
    <div className="planet-info">
      <div className="planet-info-content">
        <h1 className="planet-title">{currentPlanet.object_id || 'Unknown Planet'}</h1>
        <p className="planet-description">
          {currentPlanet.description || 'No description available for this planet.'}
        </p>
        <PlanetButtons
          onNavigateToCharacteristics={navigateToCharacteristics}
          onPrevPlanet={handlePrevPlanet}
          onNextPlanet={handleNextPlanet}
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
        />
      </div>
    </div>
  )
})

PlanetInfo.displayName = 'PlanetInfo'

export default PlanetInfo