import { useEffect, useState } from 'react'
import './Hero.css'
import afzalImage from '../../assets/about/afzal-hero1.png'

const roles = [
  'Web Developer',
  'PHP Developer',
  'WordPress Developer',
  'Elementor Specialist',
  'LMS Developer',
  'WooCommerce Developer',
]

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((previousRole) => (
        (previousRole + 1) % roles.length
      ))
    }, 3000)

    return () => clearInterval(roleInterval)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-intro">
            Hello, I&apos;m <span>Afzal Ansari</span>
          </p>

          <h1 className="hero-title">
            <span className="hero-role" key={currentRole}>
              {roles[currentRole]}
            </span>

            <span className="hero-title-line">
              crafting modern, high-performing websites.
            </span>
          </h1>

          <p className="hero-description">
            I build responsive, user-focused websites with clean design,
            strong performance, and practical functionality.
          </p>

          <div className="hero-actions">
            <a
              href="/Afzal-Ansari-Resume.pdf"
              className="hero-resume"
              download="Afzal-Ansari-Resume.pdf"
            >
              <span>Download Resume</span>
              <span className="hero-button-icon">↗</span>
            </a>

            <a href="/#about" className="hero-about">
              <span>About Me</span>
              <span className="hero-button-icon">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-frame">
            <img
              src={afzalImage}
              alt="Afzal Ansari - Web Developer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero