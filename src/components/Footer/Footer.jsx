
import { useLocation, useNavigate, Link } from 'react-router-dom'
import {
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaLinkedinIn,
} from 'react-icons/fa6'
import logo from '../../assets/logo/Afzal-Logo.png'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  const footerLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Process', sectionId: 'process' },
  ]

  const scrollToSection = (event, sectionId) => {
    event.preventDefault()

    if (location.pathname !== '/') {
      navigate(sectionId === 'home' ? '/' : `/#${sectionId}`)

      window.setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 250)

      return
    }

    if (sectionId === 'home') {
      window.history.pushState(null, '', '/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.history.pushState(null, '', `/#${sectionId}`)

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const scrollToTop = (event) => {
    event.preventDefault()

    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 250)
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="af-footer">
      <div className="af-footer-container">
        <div className="af-footer-cta">
          <div className="af-footer-cta-copy">
            <span className="af-footer-eyebrow">
              <span className="af-footer-status-dot" />
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let&apos;s make
              <span> something meaningful.</span>
            </h2>

            <p>
              Have an idea, a business to grow, or a website that needs
              a fresh start? Let&apos;s build something that works for you.
            </p>
          </div>

          <Link to="/contact" className="af-footer-cta-button">
            <span>Let&apos;s talk</span>
            <FaArrowUpRightFromSquare />
          </Link>

          <div className="af-footer-cta-decoration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="af-footer-divider" />

        <div className="af-footer-main">
          <div className="af-footer-brand">
            <Link
              to="/"
              onClick={(event) => scrollToSection(event, 'home')}
              className="af-footer-logo"
              aria-label="Afzal Ansari home"
            >
              <img src={logo} alt="Afzal Ansari" />
            </Link>

            <p>
              Web developer creating thoughtful digital experiences
              with WordPress, modern web technologies, and clean design.
            </p>

            <span className="af-footer-location">
              <span className="af-footer-location-dot" />
              Based in Mumbai, India
            </span>
          </div>

          <div className="af-footer-navigation">
            <span className="af-footer-column-title">EXPLORE</span>

            <nav aria-label="Footer navigation">
              {footerLinks.map((item) => (
                <a
                  href={item.sectionId === 'home' ? '/' : `/#${item.sectionId}`}
                  key={item.label}
                  onClick={(event) =>
                    scrollToSection(event, item.sectionId)
                  }
                >
                  {item.label}
                </a>
              ))}

              <Link to="/work">Selected work</Link>
            </nav>
          </div>

          <div className="af-footer-connect">
            <span className="af-footer-column-title">LET&apos;S CONNECT</span>

            <a
              href="mailto:ansariafzal511@gmail.com"
              className="af-footer-contact-link"
            >
              <span className="af-footer-social-icon">
                <FaEnvelope />
              </span>

              <span className="af-footer-contact-text">
                <small>Email me</small>
                <strong>Let&apos;s start a conversation</strong>
              </span>

              <FaArrowUpRightFromSquare className="af-footer-external-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
              target="_blank"
              rel="noopener noreferrer"
              className="af-footer-contact-link"
            >
              <span className="af-footer-social-icon">
                <FaLinkedinIn />
              </span>

              <span className="af-footer-contact-text">
                <small>LinkedIn</small>
                <strong>Connect professionally</strong>
              </span>

              <FaArrowUpRightFromSquare className="af-footer-external-icon" />
            </a>
          </div>
        </div>

        <div className="af-footer-bottom">
          <p>
            © {currentYear} <strong>Afzal Ansari.</strong> All rights reserved.
          </p>

          <span className="af-footer-made">
            Designed with intention <span>✳</span> Built with care
          </span>

          <a
            href="/"
            className="af-footer-back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <FaArrowDown />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
