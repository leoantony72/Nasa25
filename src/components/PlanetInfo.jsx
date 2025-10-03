import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PlanetInfo() {
  const navigate = useNavigate()
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0)

  const planets = [
  {
    id: 'ph-73b',
    name: 'PH 73B',
    image: '/planet_svg.svg',
    description:
      'PH 73B is a massive gas giant adorned with a stunning system of vibrant rings. Its swirling clouds of hydrogen and helium create mesmerizing patterns, making it a jewel of its star system.',
    characteristics: {
      composition: 'Hydrogen, Helium',
      orbitalRegime: 'Gas giant orbiting a sun-like star',
      massRegime: '1.3 × 10^27 kg',
      water: 'Trace amounts in atmosphere',
      suitableForLife: 'No',
      location: 'PH Star System',
    },
  },
  {
    id: 'mars',
    name: 'Mars',
    image: '/planet_svg.svg',
    description:
      'Mars, often called the "Red Planet," is a dusty, rocky world with towering volcanoes, deep canyons, and polar ice caps. It has long fascinated scientists for its potential to have harbored life in the distant past.',
    characteristics: {
      composition: 'Iron oxide, Silicates',
      orbitalRegime: 'Terrestrial planet in inner solar system',
      massRegime: '6.42 × 10^23 kg',
      water: 'Polar ice caps and subsurface ice',
      suitableForLife: 'Potentially, in past',
      location: 'Solar System',
    },
  },
  {
    id: 'erias',
    name: 'Erias 713-T',
    image: '/planet_svg.svg',
    description:
      'Erias 713-T is a lush terrestrial planet with an atmosphere rich in oxygen and nitrogen. Its surface is dotted with vast oceans, dense forests, and towering mountain ranges, making it a potential haven for life.',
    characteristics: {
      composition: 'Oxygen, Nitrogen, Water',
      orbitalRegime: 'Terrestrial habitable zone',
      massRegime: '5 × 10^24 kg',
      water: '70% surface coverage',
      suitableForLife: 'Yes',
      location: 'Erias Star System',
    },
  },
  // Add the other planets here...
]
  const currentPlanet = planets[currentPlanetIndex]

  const navigateToCharacteristics = () => {
    // Pass the full currentPlanet object to the characteristics page
    navigate('/characteristics', { state: { planet: currentPlanet } })
  }

  const handleNextPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % planets.length)
  }

return (
    <div className="planet-info">
      <div className="planet-info-content">
        <h1 className="planet-title">{currentPlanet.name}</h1>
        <p>{currentPlanet.description}</p>
        <div className="planet-buttons">
          <button className="planet-btn primary" onClick={navigateToCharacteristics}>
            View Characteristics
          </button>
          <button className="planet-btn secondary" onClick={handleNextPlanet}>
            Next Planet
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlanetInfo