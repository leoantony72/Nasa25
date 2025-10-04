import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PlanetInfo() {
  const navigate = useNavigate()

  const [planets, setPlanets] = useState([])
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:5000/data')
      .then(res => res.json())
      .then(data => {
        setPlanets(data)
        setCurrentPlanetIndex(0) // Show the first planet after fetch
        setLoading(false)
      })
      .catch(err => {
        setError('Error fetching data: ' + err)
        setLoading(false)
      })
  }, [])

  const currentPlanet = planets[currentPlanetIndex] || {}


  const navigateToCharacteristics = () => {
    if (planets.length > 0) {
      navigate('/characteristics', { state: { planet: currentPlanet } })
    }
  }


  const handleNextPlanet = () => {
    if (planets.length > 0) {
      setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % planets.length)
    }
  }

  const handlePrevPlanet = () => {
    if (planets.length > 0) {
      setCurrentPlanetIndex((prevIndex) => (prevIndex - 1 + planets.length) % planets.length)
    }
  }


  if (loading) {
    return <div>Loading planets...</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="planet-info">
      <div className="planet-info-content">
        <h1 className="planet-title">{currentPlanet.object_id}</h1>
        <p>{currentPlanet.description}</p>
        <div className="planet-buttons">
          <button className="planet-btn primary" onClick={navigateToCharacteristics}>
            View Characteristics
          </button>
          <button className="planet-btn secondary" onClick={handlePrevPlanet} disabled={planets.length === 0}>
            Previous Planet
          </button>
          <button className="planet-btn secondary" onClick={handleNextPlanet} disabled={planets.length === 0}>
            Next Planet
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlanetInfo