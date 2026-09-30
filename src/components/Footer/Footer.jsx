import { useLocation, useNavigate } from 'react-router-dom'
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa6'
import './Footer.css'

import logo from '../../assets/logo/Afzal-logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
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
    if (location.pathname === '/') {
      window.history.pushState(null, '', '/')

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      return
    }

    navigate('/')

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 150)
  }

  const handleWorkClick = () => {
    if (location.pathname === '/work') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      return
    }

    navigate('/work')

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 150)
  }

  const handleContactClick = () => {
    if (location.pathname === '/contact') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      return
    }

    navigate('/contact')

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 150)
  }

  const handleLogoClick = () => {
    handleHomeClick()
  }

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP SECTION */}
        <div className="footer-top">

          <div className="footer-brand">
            <span className="footer-label">
              Web Developer · WordPress Specialist
            </span>

            <h2>
              Let's make
              <span>something useful</span>
            </h2>

            <p>
              Building modern, purposeful websites with clean development,
              thoughtful design, and reliable technology.
            </p>
          </div>

          <div className="footer-contact">

            <span className="footer-small-label">
              Have a project?
            </span>

            <button
              type="button"
              className="footer-contact-link"
              onClick={handleContactClick}
            >
              <span>Let's Talk</span>
              <span>↗</span>
            </button>

            <a
              href="mailto:ansariafzal511@gmail.com"
              className="footer-email"
            >
              ansariafzal511@gmail.com
            </a>

          </div>

        </div>

        {/* MIDDLE */}
        <div className="footer-middle">

          {/* LOGO */}
          <button
            type="button"
            className="footer-logo-link"
            onClick={handleLogoClick}
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="Afzal Ansari"
              className="footer-logo"
            />
          </button>

          {/* NAVIGATION */}
          <nav className="footer-nav">

            <button
              type="button"
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
              onClick={handleWorkClick}
            >
              Work
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('process')}
            >
              Process
            </button>

            <button
              type="button"
              onClick={handleContactClick}
            >
              Contact
            </button>

          </nav>

          {/* SOCIALS */}
          <div className="footer-socials">

            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:ansariafzal511@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {currentYear} Afzal Ansari. All rights reserved.
          </p>

          <p>
            Designed & built with intention.
          </p>

          <button
            type="button"
            className="footer-top-button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>

        </div>

      </div>
    </footer>
  )
}

export default Footer