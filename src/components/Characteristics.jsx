import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../Characteristics.css'

function Characteristics() {
  const navigate = useNavigate()
  const location = useLocation()
  const planet = location.state?.planet

  const goBack = () => {
    navigate('/')
  }

  if (!planet) {
    return <div>No planet data provided.</div>

  }
    console.log('Received planet in state:', planet)

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <a href="/" className="logo-link">Logo</a>
          </div>
          <nav className="header-nav">
            <a href="#" className="nav-link">Planets</a>
            <a href="#" className="nav-link">Explore</a>
            <a href="#" className="nav-link">About us</a>
          </nav>
          <button className="donate-btn">Donate</button>
        </div>
      </header>

      <div className="characteristics-page">
        <div className="characteristics-content">
          <div className="description-column">
            <h1 className="characteristics-title">{planet.name}</h1>
            <p className="characteristics-description">{planet.description}</p>
            <div className="characteristics-buttons">
              <button className="characteristics-btn" onClick={goBack}>
                <span>←</span> Back to Overview
              </button>
            </div>
          </div>

          <div className="characteristics-column">
            <div className="characteristics-card">
              <h2 className="characteristics-title-main">Characteristics</h2>
              <div className="characteristics-grid">
                <div className="characteristic-group">
                  <div className="characteristic-name">By composition</div>
                  <div className="characteristic-detail">{planet.characteristics?.composition || 'N/A'}</div>
                </div>
                <div className="characteristic-group">
                  <div className="characteristic-name">By orbital regime</div>
                  <div className="characteristic-detail">{planet.characteristics?.orbitalRegime || 'N/A'}</div>
                </div>
                <div className="characteristic-group">
                  <div className="characteristic-name">By mass regime</div>
                  <div className="characteristic-detail">{planet.characteristics?.massRegime || 'N/A'}</div>
                </div>
                <div className="characteristic-group">
                  <div className="characteristic-name">Water</div>
                  <div className="characteristic-detail">{planet.characteristics?.water || 'N/A'}</div>
                </div>
                <div className="characteristic-group">
                  <div className="characteristic-name">Suitable for living organisms</div>
                  <div className="characteristic-detail">{planet.characteristics?.suitableForLife || 'N/A'}</div>
                </div>
                <div className="characteristic-group">
                  <div className="characteristic-name">Location</div>
                  <div className="characteristic-detail">{planet.characteristics?.location || 'N/A'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="planet-container">
        <div className="planet-image">
          <img src={planet.image} alt={planet.name} />
        </div>
      </div>
    </div>
  )
}

export default Characteristics
