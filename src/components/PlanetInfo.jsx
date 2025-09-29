import React from 'react'
import { useNavigate } from 'react-router-dom'

function PlanetInfo() {
  const navigate = useNavigate()
  
  const navigateToCharacteristics = () => {
    navigate('/characteristics')
  }

  return (
    <div className="planet-info">
      <div className="planet-info-content">
        <h1 className="planet-title">Erias 713-T</h1>
        
        <p>
          Planet Erias 713-T, often simply referred to as Erias, situated in the far reaches of the Eryndor Galaxy. Erias 713-T is a terrestrial planet, slightly smaller than Earth but boasting an atmosphere rich in oxygen and nitrogen, making it hospitable to a wide range of life forms.
        </p>
        
        <div className="planet-buttons">
          <button className="planet-btn primary" onClick={navigateToCharacteristics}>Erias 713-T</button>
          <button className="planet-btn secondary">Next planet</button>
        </div>
      </div>
    </div>
  )
}

export default PlanetInfo

