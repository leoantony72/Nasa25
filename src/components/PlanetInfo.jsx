import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const planets = [
  { 
    id: 'ph-73b', 
    name: 'PH 73B', 
    image: '/planet_svg.svg', 
    description: 'PH 73B is a massive gas giant adorned with a stunning system of vibrant rings. Its swirling clouds of hydrogen and helium create mesmerizing patterns, making it a jewel of its star system.' 
  },
  { 
    id: 'mars', 
    name: 'Mars', 
    image: '/planet_svg.svg', 
    description: 'Mars, often called the "Red Planet," is a dusty, rocky world with towering volcanoes, deep canyons, and polar ice caps. It has long fascinated scientists for its potential to have harbored life in the distant past.' 
  },
  { 
    id: 'erias', 
    name: 'Erias 713-T', 
    image: '/planet_svg.svg', 
    description: 'Erias 713-T is a lush terrestrial planet with an atmosphere rich in oxygen and nitrogen. Its surface is dotted with vast oceans, dense forests, and towering mountain ranges, making it a potential haven for life.' 
  },
  { 
    id: 'europa', 
    name: 'Europa', 
    image: '/planet_svg.svg', 
    description: 'Europa, one of Jupiter’s icy moons, is covered in a thick shell of ice. Beneath its frozen surface lies a vast subsurface ocean, which scientists believe could harbor microbial extraterrestrial life.' 
  },
  { 
    id: 'kepler', 
    name: 'Kepler-22b', 
    image: '/planet_svg.svg', 
    description: 'Kepler-22b is an exoplanet located in the habitable zone of its star, where conditions might support liquid water. This Earth-like world has sparked curiosity as a potential candidate for future exploration and colonization.' 
  },
  { 
    id: 'trappist', 
    name: 'TRAPPIST-1e', 
    image: '/planet_svg.svg', 
    description: 'TRAPPIST-1e is one of seven Earth-sized planets orbiting the ultra-cool dwarf star TRAPPIST-1. With its rocky surface and potential for liquid water, it is a prime target in the search for alien life.' 
  }
]

function PlanetInfo() {
  const navigate = useNavigate()
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0)

  const navigateToCharacteristics = () => {
    navigate('/characteristics')
  }

  const handleNextPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % planets.length)
  }

  const currentPlanet = planets[currentPlanetIndex]

  return (
    <div className="planet-info">
      <div className="planet-info-content">
        <h1 className="planet-title">{currentPlanet.name}</h1>
        
        <p>{currentPlanet.description}</p>
        
        <div className="planet-buttons">
          <button className="planet-btn primary" onClick={navigateToCharacteristics}>
            {currentPlanet.name}
          </button>
          <button className="planet-btn secondary" onClick={handleNextPlanet}>
            Next planet
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlanetInfo

