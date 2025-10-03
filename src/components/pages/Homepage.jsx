import React, { useState } from 'react'

const planets = [
  { 
    id: 'ph-73b', 
    name: 'PH 73B', 
    image: '/planet_svg.svg', 
    description: 'PH 73B is a massive gas giant adorned with a stunning system of vibrant rings. Its swirling clouds of hydrogen and helium create mesmerizing patterns, making it a jewel of its star system.',
    characteristics: {
      composition: 'Gas giant',
      orbitalRegime: 'Outer planet',
      massRegime: 'Much larger than Earth',
      water: 'None',
      suitableForLife: 'No',
      location: 'Unknown'
    }
  },
  { 
    id: 'mars', 
    name: 'Mars', 
    image: '/planet_svg.svg', 
    description: 'Mars, often called the "Red Planet," is a dusty, rocky world with towering volcanoes, deep canyons, and polar ice caps. It has long fascinated scientists for its potential to have harbored life in the distant past.',
    characteristics: {
      composition: 'Rocky planet',
      orbitalRegime: 'Inner planet',
      massRegime: 'Smaller than Earth',
      water: 'Polar ice caps',
      suitableForLife: 'Potentially',
      location: 'Solar System'
    }
  },
  { 
    id: 'erias', 
    name: 'Erias 713-T', 
    image: '/planet_svg.svg', 
    description: 'Erias 713-T is a lush terrestrial planet with an atmosphere rich in oxygen and nitrogen. Its surface is dotted with vast oceans, dense forests, and towering mountain ranges, making it a potential haven for life.',
    characteristics: {
      composition: 'Ice planet',
      orbitalRegime: 'Circumbinary planet',
      massRegime: 'Similar to Earth',
      water: 'Have',
      suitableForLife: 'Obscurely',
      location: 'Orion constellation'
    }
  },
  { 
    id: 'europa', 
    name: 'Europa', 
    image: '/planet_svg.svg', 
    description: 'Europa, one of Jupiter’s icy moons, is covered in a thick shell of ice. Beneath its frozen surface lies a vast subsurface ocean, which scientists believe could harbor microbial extraterrestrial life.',
    characteristics: {
      composition: 'Ice moon',
      orbitalRegime: 'Satellite of Jupiter',
      massRegime: 'Much smaller than Earth',
      water: 'Subsurface ocean',
      suitableForLife: 'Possible',
      location: 'Solar System'
    }
  },
  { 
    id: 'kepler', 
    name: 'Kepler-22b', 
    image: '/planet_svg.svg', 
    description: 'Kepler-22b is an exoplanet located in the habitable zone of its star, where conditions might support liquid water. This Earth-like world has sparked curiosity as a potential candidate for future exploration and colonization.',
    characteristics: {
      composition: 'Rocky/Water world',
      orbitalRegime: 'Habitable zone',
      massRegime: 'Similar to Earth',
      water: 'Possible',
      suitableForLife: 'Unknown',
      location: 'Kepler constellation'
    }
  },
  { 
    id: 'trappist', 
    name: 'TRAPPIST-1e', 
    image: '/planet_svg.svg', 
    description: 'TRAPPIST-1e is one of seven Earth-sized planets orbiting the ultra-cool dwarf star TRAPPIST-1. With its rocky surface and potential for liquid water, it is a prime target in the search for alien life.',
    characteristics: {
      composition: 'Rocky planet',
      orbitalRegime: 'Habitable zone',
      massRegime: 'Similar to Earth',
      water: 'Possible',
      suitableForLife: 'Prime target',
      location: 'TRAPPIST-1 system'
    }
  }
]

function Homepage() {
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0)
  const currentPlanet = planets[currentPlanetIndex]

  const handleNextPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % planets.length)
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

      <div className="planet-info">
        <div className="planet-info-content">
          <h1 className="planet-title">{currentPlanet.name}</h1>
          <img src={currentPlanet.image} alt={currentPlanet.name} className="planet-image" />
          <p>{currentPlanet.description}</p>
          <div className="planet-buttons">
            <button className="planet-btn secondary" onClick={handleNextPlanet}>
              Next planet
            </button>
          </div>
        </div>
      </div>

      <div className="characteristics-page">
        <div className="characteristics-content">
          <div className="description-column">
            <h2 className="characteristics-title-main">Characteristics</h2>
            <div className="characteristics-grid">
              <div className="characteristic-group">
                <div className="characteristic-name">By composition</div>
                <div className="characteristic-detail">{currentPlanet.characteristics.composition}</div>
              </div>
              <div className="characteristic-group">
                <div className="characteristic-name">By orbital regime</div>
                <div className="characteristic-detail">{currentPlanet.characteristics.orbitalRegime}</div>
              </div>
              <div className="characteristic-group">
                <div className="characteristic-name">By mass regime</div>
                <div className="characteristic-detail">{currentPlanet.characteristics.massRegime}</div>
              </div>
              <div className="characteristic-group">
                <div className="characteristic-name">Water</div>
                <div className="characteristic-detail">{currentPlanet.characteristics.water}</div>
              </div>
              <div className="characteristic-group">
                <div className="characteristic-name">Suitable for living organisms</div>
                <div className="characteristic-detail">{currentPlanet.characteristics.suitableForLife}</div>
              </div>
              <div className="characteristic-group">
                <div className="characteristic-name">Location</div>
                <div className="characteristic-detail">{currentPlanet.characteristics.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="planet-container">
        <div className="planet-image">
          <img src={currentPlanet.image} alt={currentPlanet.name} />
        </div>
      </div>
    </div>
  )
}

export default Homepage