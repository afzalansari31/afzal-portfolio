import { useEffect, useState } from 'react'
import './About.css'

import afzalImageOne from '../../assets/about/afzal-about.png'
import afzalImageTwo from '../../assets/about/afzal-about-1.png'

const aboutImages = [
  afzalImageOne,
  afzalImageTwo,
]

const About = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [experienceCount, setExperienceCount] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((previousImage) => (
        (previousImage + 1) % aboutImages.length
      ))
    }, 3000)

    return () => clearInterval(imageInterval)
  }, [])

  useEffect(() => {
    const animationDuration = 1800
    const startTime = performance.now()
    let animationFrame

    const animateCounters = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / animationDuration,
        1,
      )

      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setExperienceCount(Math.floor(easedProgress * 3))
      setProjectsCount(Math.floor(easedProgress * 30))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCounters)
      }
    }

    animationFrame = requestAnimationFrame(animateCounters)

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Image Side */}
        <div className="about-visual">
          <div className="about-image-frame">
            <img
              src={aboutImages[currentImage]}
              alt="Afzal Ansari working as a web developer"
            />
          </div>

          <div className="about-image-caption">
            <span>AFZAL ANSARI</span>
            <span>WEB DEVELOPER & DESIGNER</span>
          </div>
        </div>

        {/* Content Side */}
        <div className="about-content">
          <p className="about-eyebrow">ABOUT ME</p>

          <h2 className="about-title">
            Turning ideas into
            <span>powerful digital experiences</span>
          </h2>

          <p className="about-description">
            I&apos;m Afzal Ansari, a Web Developer and Designer with 3+
            years of professional experience. I specialize in building
            modern, responsive, and high-performing websites that help
            businesses establish a strong online presence.
          </p>

          <p className="about-description">
            I have worked on 30+ projects for businesses across different
            industries, including international clients. My experience
            includes business websites, eCommerce stores, learning
            management systems, and custom web solutions.
          </p>

          <p className="about-description">
            From WordPress and Elementor to React, PHP, WooCommerce, and
            LMS platforms, I combine creative design with practical
            development to deliver reliable digital solutions—from
            initial concept to final deployment.
          </p>

          {/* Highlights */}
          <div className="about-stats">
            <div className="about-stat">
              <strong>{experienceCount}+</strong>
              <span>Years of experience</span>
            </div>

            <div className="about-stat">
              <strong>{projectsCount}+</strong>
              <span>Projects delivered</span>
            </div>

            <div className="about-stat">
              <strong>360°</strong>
              <span>Design to deployment</span>
            </div>
          </div>

          {/* CTA Button */}
          <a href="/contact" className="about-button">
            Let&apos;s work together
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About