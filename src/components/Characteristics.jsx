import React, { useCallback, memo, useMemo, useEffect, useState } from 'react'
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
          ['depth_ppm', 'Depth (ppm)'],
          ['duration_hours', 'Duration (hours)'],
          ['duty_cycle', 'Duty Cycle'],
          ['label', 'Label'],
          ['label_raw', 'Label Raw'],
          ['mission', 'Mission'],
          ['mission_encoded', 'Mission Encoded'],
          ['object_id', 'Object ID'],
          ['period_days', 'Period (days)'],
          ['planet_radius_from_depth', 'Planet Radius (from depth)'],
          ['planet_radius_rearth', 'Planet Radius (Earth radii)'],
          ['score', 'Score'],
          ['transit_frequency', 'Transit Frequency']
        ].map(([key, label]) => ({
          name: label,
          value: currentPlanet?.[key]
        })), [currentPlanet])


  // State for images
  const [images, setImages] = useState([
    'fig1_linear_regression.png',
    'fig2_logistic_regression.png',
    'fig3_pca_kmeans.png',
    'fig4_decision_tree.png',
    'fig4_decision_tree_importance.png',
    'fig5_random_forest_importance.png',
    'fig6_correlation_heatmap.png',
    'fig7_violin_plots.png',
  ])
  const [imgError, setImgError] = useState(null)

  // Optionally, you could fetch the list from the backend if you add a route for it

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

            <div className="output-images-section" style={{ marginTop: 32 }}>
              <h3>Exoplanet Analysis Visualizations</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {images.map((img, idx) => (
                  <div key={img} style={{ textAlign: 'center' }}>
                    <img
                      src={`http://localhost:5000/output-image?filename=${img}`}
                      alt={img.replace(/_/g, ' ').replace('.png', '')}
                      style={{ maxWidth: '100%', borderRadius: 8, boxShadow: '0 2px 8px #0002' }}
                      onError={() => setImgError(img)}
                    />
                    <div style={{ fontSize: 14, color: '#666', marginTop: 4 }}>{img.replace(/_/g, ' ').replace('.png', '')}</div>
                    {imgError === img && <div style={{ color: 'red' }}>Image not found</div>}
                  </div>
                ))}
              </div>
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
