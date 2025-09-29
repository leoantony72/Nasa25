import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Characteristics.css'

function Characteristics() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

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
            <h1 className="characteristics-title">Erias 713-T</h1>
            
            <p className="characteristics-description">
              Planet Erias 713-T, often simply referred to as Erias, situated in the far reaches of the Eryndor Galaxy. Erias 713-T is a terrestrial planet, slightly smaller than Earth but boasting an atmosphere rich in oxygen and nitrogen, making it hospitable to a wide range of life forms.
            </p>

            <p className="characteristics-description">
              The planet's abundant flora includes towering crystal trees that shimmer with bioluminescent properties, vast meadows of alien grasses that shift colors with planetary seasons, and underwater forests of kelp-like organisms that create an intricate ecosystem beneath icy oceans.
            </p>

            <p className="characteristics-description">
              Erias 713-T is home to diverse wildlife, including the graceful Erian Swifters—winged creatures that navigate the planet's constant aurora displays—and the massive Crystal Beasts, ancient herbivory creatures adapted to crystalline vegetation.
            </p>

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
                  <div className="characteristic-detail">Ice planet</div>
                </div>
                
                <div className="characteristic-group">
                  <div className="characteristic-name">By orbital regime</div>
                  <div className="characteristic-detail">Circumbinary planet</div>
                </div>
                
                <div className="characteristic-group">
                  <div className="characteristic-name">By mass regime</div>
                  <div className="characteristic-detail">Similar to the earth</div>
                </div>
                
                <div className="characteristic-group">
                  <div className="characteristic-name">Water</div>
                  <div className="characteristic-detail">Have</div>
                </div>
                
                <div className="characteristic-group">
                  <div className="characteristic-name">Suitable for living organisms</div>
                  <div className="characteristic-detail">Obscurely</div>
                </div>
                
                <div className="characteristic-group">
                  <div className="characteristic-name">Location</div>
                  <div className="characteristic-detail">Orion constellation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="planet-container">
        <div className="planet-image"></div>
      </div>
    </div>
  )
}

export default Characteristics
