import { useEffect, useRef, useState } from 'react'
import './Experience.css'

const experiences = [
  {
    year: 'SEP 2025 — PRESENT',
    role: 'Web Developer & Designer',
    company: 'Samrdh Solution LLP',
    organization: 'Indian School of Image Management',
    description:
      'Building responsive WordPress websites, WooCommerce stores, and LMS platforms with a focus on performance, usability, and business requirements.',
    skills: [
      'WordPress',
      'Elementor',
      'WooCommerce',
      'MasterStudy LMS',
      'Tutor LMS',
      'Technical SEO',
      'SEO Optimization',
      'PHP',
      'Custom Code',
      'Code Snippets',
      'Debugging',
      'AWS Lightsail',
      'CyberPanel',
      'Hostinger',
    ],
  },
  {
    year: 'JAN 2024 — AUG 2025',
    role: 'WordPress Developer',
    company: 'Ossis Infotech Pvt. Ltd.',
    description:
      'Developed customized WordPress websites and WooCommerce stores with payment integrations, SEO optimization, plugin customization, and hosting management.',
    skills: [
      'Elementor',
      'WooCommerce',
      'Yoast SEO',
      'All in One SEO',
      'WPForms',
      'Contact Form 7',
      'cPanel',
      'FTP',
    ],
  },
  {
    year: 'JUNE 2023 — AUGUST 2023',
    role: 'Frontend Developer Intern',
    company: 'Wowrooms Hospitality Pvt. Ltd.',
    description:
      'Gained practical experience in frontend development, responsive layouts, and building user-focused website interfaces.',
    skills: ['HTML', 'CSS', 'Bootstrap', 'React'],
  },
]

const Experience = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(section)
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`experience-section ${isVisible ? 'is-visible' : ''}`}
      id="experience"
      ref={sectionRef}
    >
      <div className="experience-container">
        <div className="experience-header">
          <div className="experience-heading">
            <p className="experience-eyebrow">MY JOURNEY</p>

            <h2>
              Experience that turns
              <span>ideas into reality</span>
            </h2>
          </div>

          <p className="experience-intro">
            A record of the teams, projects, and technologies that shaped my
            journey as a web developer.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article
              className="experience-row"
              key={`${experience.year}-${experience.company}`}
              style={{ '--item-index': index }}
            >
              <div className="experience-date">
                <span>{experience.year}</span>

                <span className="experience-index">
                  0{index + 1}
                </span>
              </div>

              <div className="experience-main">
                <p className="experience-company">
                  {experience.company}
                </p>

                <h3>{experience.role}</h3>

                {experience.organization && (
                  <p className="experience-organization">
                    {experience.organization}
                  </p>
                )}

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-skills">
                  {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="experience-arrow">↗</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience