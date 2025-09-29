import React from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const planets = [
    { id: 'ph-73b', name: 'PH 73B', image: '/planet_svg.svg' },
    { id: 'mars', name: 'Mars', image: '/planet_svg.svg' },
    { id: 'erias', name: 'Erias 713-T', image: '/planet_svg.svg' },
    { id: 'europa', name: 'Europa', image: '/planet_svg.svg' },
    { id: 'kepler', name: 'Kepler-22b', image: '/planet_svg.svg' },
    { id: 'trappist', name: 'TRAPPIST-1e', image: '/planet_svg.svg' }
  ]

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <a href="#" className="logo-link">Logo</a>
          </div>
          
          <nav className="header-nav">
            <a href="#" className="nav-link">Planets</a>
            <a href="#" className="nav-link">Explore</a>
            <a href="#" className="nav-link">About us</a>
          </nav>
          
          <div className="header-right">
            <button className="menu-toggle-btn" onClick={toggleMenu} aria-label="Open planet menu">
              <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <button className="donate-btn">Donate</button>
          </div>
        </div>
      </header>

      {/* Full-screen sidebar overlay */}
      <div className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className={`sidebar-content ${isMenuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="sidebar-header">
            <button className="close-btn" onClick={toggleMenu} aria-label="Close menu">
              <span className="close-icon">&times;</span>
            </button>
          </div>
          
          <div className="sidebar-title">Filters</div>
          
          <div className="filters-section">
            <div className="filter-group">
              <div className="filter-title">Sun Group</div>
              <div className="filter-options">
                <button className={`filter-option ${true ? 'active' : ''}`}>Yes</button>
                <button className={`filter-option ${false ? 'active' : ''}`}>No</button>
              </div>
            </div>

            <div className="filter-group">
              <div className="filter-title">By mass regime</div>
              <div className="filter-options">
                <button className={`filter-option ${true ? 'active' : ''}`}>Super-Earth</button>
                <button className={`filter-option ${false ? 'active' : ''}`}>Giant planet</button>
                <button className={`filter-option ${false ? 'active' : ''}`}>Ice giant</button>
                <button className={`filter-option ${false ? 'active' : ''}`}>Mini-Neptune</button>
                <button className={`filter-option ${false ? 'active' : ''}`}>Super-Jupiter</button>
              </div>
            </div>

            <div className="filter-group">
              <div className="filter-title">By orbital regime</div>
              <div className="filter-options">
                <button className={`filter-option ${false ? 'active' : ''}`}>Circumbinary planet</button>
                <button className={`filter-option ${false ? 'active' : ''}`}>Double planet</button>
                <button className={`filter-option ${false ? 'active' : ''}`}>Eccentric Jupiter</button>
                <button className={`filter-option ${false ? 'active' : ''}`}>Exoplanet</button>
              </div>
            </div>
          </div>

          <div className="planets-grid-header">Planets</div>
          <div className="planets-grid">
            {planets.map((planet) => (
              <div key={planet.id} className="planet-card">
                <div className="planet-image" style={{ backgroundImage: `url(${planet.image})` }}></div>
                <div className="planet-card-name">{planet.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

