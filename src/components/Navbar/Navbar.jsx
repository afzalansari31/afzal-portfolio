import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
import afzalLogo from '../../assets/logo/afzal-logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      })
    }
  }, [location.pathname])

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleMenuClose = () => {
    setMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    handleMenuClose()

    if (location.pathname === '/') {
      const section = document.getElementById(sectionId)

      if (section) {
        window.history.pushState(
          null,
          '',
          `/#${sectionId}`,
        )

        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }

      return
    }

    navigate(`/#${sectionId}`)

    setTimeout(() => {
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 200)
  }

  const handleHomeClick = () => {
    handleMenuClose()

    /*
     * Already on Home
     */
    if (location.pathname === '/') {
      window.history.pushState(null, '', '/')

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })

      return
    }

    /*
     * Coming from Work / Contact
     */
    navigate('/')

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }, 200)
  }

  const handleWorkClick = () => {
    handleMenuClose()

    if (location.pathname === '/work') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })

      return
    }

    navigate('/work')

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }, 200)
  }

  const handleContactClick = () => {
    handleMenuClose()

    if (location.pathname === '/contact') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })

      return
    }

    navigate('/contact')

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }, 200)
  }

  const isHome = location.pathname === '/'
  const isWork = location.pathname === '/work'

  return (
    <header className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">

        {/* Logo */}
        <button
          type="button"
          className="navbar-logo"
          onClick={handleHomeClick}
          aria-label="Afzal home"
        >
          <img src={afzalLogo} alt="Afzal" />
        </button>

        {/* Desktop Navigation */}
        <nav
          className="navbar-menu"
          aria-label="Main navigation"
        >
          <button
            type="button"
            className={isHome ? 'active' : ''}
            onClick={handleHomeClick}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('services')}
          >
            Services
          </button>

          <button
            type="button"
            className={isWork ? 'active' : ''}
            onClick={handleWorkClick}
          >
            Work
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>
        </nav>

        {/* Desktop CTA */}
        <button
          type="button"
          className="navbar-cta"
          onClick={handleContactClick}
        >
          <span>Let&apos;s Talk</span>
          <span className="navbar-cta-icon">↗</span>
        </button>

        {/* Mobile Toggle */}
        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          onClick={handleMenuToggle}
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? 'active' : ''}`}
      >
        <div className="mobile-menu-header">
          <span>MENU</span>
          <span>01 — 05</span>
        </div>

        <nav
          className="mobile-menu-links"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            className={isHome ? 'mobile-active' : ''}
            onClick={handleHomeClick}
          >
            <span className="mobile-link-number">01</span>
            <span>Home</span>
            <span className="mobile-link-arrow">↗</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('about')}
          >
            <span className="mobile-link-number">02</span>
            <span>About</span>
            <span className="mobile-link-arrow">↗</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('services')}
          >
            <span className="mobile-link-number">03</span>
            <span>Services</span>
            <span className="mobile-link-arrow">↗</span>
          </button>

          <button
            type="button"
            className={isWork ? 'mobile-active' : ''}
            onClick={handleWorkClick}
          >
            <span className="mobile-link-number">04</span>
            <span>Work</span>
            <span className="mobile-link-arrow">↗</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('experience')}
          >
            <span className="mobile-link-number">05</span>
            <span>Experience</span>
            <span className="mobile-link-arrow">↗</span>
          </button>
        </nav>

        <div className="mobile-menu-bottom">
          <div className="availability">
            <span className="availability-dot"></span>
            <span>Available for freelance</span>
          </div>

          <button
            type="button"
            onClick={handleContactClick}
          >
            Let&apos;s Talk ↗
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar