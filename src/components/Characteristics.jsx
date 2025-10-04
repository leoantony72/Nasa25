import React, { useCallback, memo, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Characteristics.css'
import { usePlanet } from '../context/PlanetContext'

// Loading component
const LoadingSpinner = memo(() => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading planet data...</p>
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

// Characteristic item component
const CharacteristicItem = memo(({ name, value }) => (
  <div className="characteristic-group">
    <div className="characteristic-name">{name}</div>
    <div className="characteristic-detail">{value || 'N/A'}</div>
  </div>
))

// Back button component
const BackButton = memo(({ onGoBack }) => (
  <button className="characteristics-btn" onClick={onGoBack} aria-label="Go back to overview">
    <span>←</span> Back to Overview
  </button>
))

const Characteristics = memo(() => {
  const navigate = useNavigate()
  const { currentPlanet, loading, error } = usePlanet()
  
  const goBack = useCallback(() => {
    navigate('/')
  }, [navigate])

  const handleRetry = useCallback(() => {
    window.location.reload()
  }, [])

  // Memoized characteristic data
  const characteristics = useMemo(() => [
    { name: 'By composition', value: currentPlanet?.composition },
    { name: 'By orbital regime', value: currentPlanet?.orbital_regime },
    { name: 'By mass regime', value: currentPlanet?.mass_regime },
    { name: 'Water', value: currentPlanet?.water },
    { name: 'Suitable for living organisms', value: currentPlanet?.suitable_for_life },
    { name: 'Location', value: currentPlanet?.location }
  ], [currentPlanet])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={handleRetry} />
  }

  if (!currentPlanet) {
    return (
      <div className="no-data-container">
        <div className="no-data-icon">🌌</div>
        <h3>No planet data available</h3>
        <p>There is no planet data to display at the moment.</p>
        <BackButton onGoBack={goBack} />
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <a href="/" className="logo-link" aria-label="Home">Logo</a>
          </div>
          <nav className="header-nav" role="navigation" aria-label="Main navigation">
            <a href="#" className="nav-link">Planets</a>
            <a href="#" className="nav-link">Explore</a>
            <a href="#" className="nav-link">About us</a>
          </nav>
          <button className="donate-btn" aria-label="Donate to support our mission">
            Donate
          </button>
        </div>
      </header>

      <div className="characteristics-page">
        <div className="characteristics-content">
          <div className="description-column">
            <h1 className="characteristics-title">
              {currentPlanet.object_id || 'Unknown Planet'}
            </h1>
            <p className="characteristics-description">
              {currentPlanet.description || 'No description available for this planet.'}
            </p>
            <div className="characteristics-buttons">
              <BackButton onGoBack={goBack} />
            </div>
          </div>

          <div className="characteristics-column">
            <div className="characteristics-card">
              <h2 className="characteristics-title-main">Characteristics</h2>
              <div className="characteristics-grid">
                {characteristics.map((char, index) => (
                  <CharacteristicItem 
                    key={index}
                    name={char.name} 
                    value={char.value} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="planet-container">
        <div className="planet-image" aria-hidden="true"></div>
      </div>
    </div>
  )
})

Characteristics.displayName = 'Characteristics'

export default Characteristics
