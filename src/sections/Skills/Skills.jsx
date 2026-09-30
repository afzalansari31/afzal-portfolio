
import { useEffect, useRef, useState } from 'react'

import {
  FaWordpress,
  FaPenNib,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaGraduationCap,
  FaWpforms,
  FaMagnifyingGlass,
  FaGaugeHigh,
  FaServer,
  FaGlobe,
  FaShieldHalved,
  FaCode,
  FaBoxesStacked,
  FaCloud,
  FaFolder,
  FaCartShopping,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6'

import './Skills.css'

const skillCategories = [
  {
    id: 'wordpress',
    label: 'WordPress',
    number: '01',
    icon: <FaWordpress />,
    description:
      'Building flexible, responsive, and business-focused WordPress websites.',
    skills: [
      { name: 'WordPress', detail: 'CMS Development', icon: <FaWordpress /> },
      { name: 'Elementor', detail: 'Page Builder', icon: <FaPenNib /> },
      { name: 'WooCommerce', detail: 'E-Commerce', icon: <FaCartShopping /> },
      { name: 'Custom Themes', detail: 'Theme Customization', icon: <FaCode /> },
      {
        name: 'Plugin Integration',
        detail: 'Business Solutions',
        icon: <FaBoxesStacked />,
      },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    number: '02',
    icon: <FaCode />,
    description:
      'Creating clean, responsive interfaces with modern frontend technologies.',
    skills: [
      { name: 'HTML5', detail: 'Semantic Markup', icon: <FaHtml5 /> },
      { name: 'CSS3', detail: 'Responsive Styling', icon: <FaCss3Alt /> },
      { name: 'JavaScript', detail: 'ES6+ Development', icon: <FaJs /> },
      { name: 'React.js', detail: 'Component-Based UI', icon: <FaReact /> },
      { name: 'Bootstrap', detail: 'Responsive Framework', icon: <FaBootstrap /> },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    number: '03',
    icon: <FaDatabase />,
    description:
      'Developing practical backend functionality and database-driven solutions.',
    skills: [
      { name: 'PHP', detail: 'Server-Side Development', icon: <FaPhp /> },
      { name: 'MySQL', detail: 'Database Management', icon: <FaDatabase /> },
      { name: 'Laravel', detail: 'PHP Framework', icon: <FaLaravel /> },
      { name: 'Custom Code', detail: 'Functional Solutions', icon: <FaCode /> },
    ],
  },
  {
    id: 'lms',
    label: 'LMS & Forms',
    number: '04',
    icon: <FaGraduationCap />,
    description:
      'Creating learning platforms and connecting websites with useful tools.',
    skills: [
      {
        name: 'MasterStudy LMS',
        detail: 'Learning Platforms',
        icon: <FaGraduationCap />,
      },
      {
        name: 'Tutor LMS',
        detail: 'Course Websites',
        icon: <FaGraduationCap />,
      },
      { name: 'WPForms', detail: 'Advanced Forms', icon: <FaWpforms /> },
      {
        name: 'Contact Form 7',
        detail: 'Form Integration',
        icon: <FaWpforms />,
      },
      { name: 'SMTP', detail: 'Email Delivery', icon: <FaGlobe /> },
    ],
  },
  {
    id: 'seo',
    label: 'SEO & Speed',
    number: '05',
    icon: <FaGaugeHigh />,
    description:
      'Improving website visibility, loading speed, and overall performance.',
    skills: [
      {
        name: 'Technical SEO',
        detail: 'Website Optimization',
        icon: <FaMagnifyingGlass />,
      },
      {
        name: 'Yoast SEO',
        detail: 'SEO Management',
        icon: <FaMagnifyingGlass />,
      },
      {
        name: 'AIOSEO',
        detail: 'Search Optimization',
        icon: <FaMagnifyingGlass />,
      },
      { name: 'Caching', detail: 'Performance Tuning', icon: <FaGaugeHigh /> },
      { name: 'Debugging', detail: 'Issue Resolution', icon: <FaCode /> },
    ],
  },
  {
    id: 'hosting',
    label: 'Hosting',
    number: '06',
    icon: <FaServer />,
    description:
      'Managing hosting environments, deployments, domains, and website security.',
    skills: [
      { name: 'Hostinger', detail: 'Hosting Management', icon: <FaGlobe /> },
      { name: 'CyberPanel', detail: 'Server Management', icon: <FaServer /> },
      { name: 'cPanel', detail: 'Hosting Control Panel', icon: <FaFolder /> },
      { name: 'AWS Lightsail', detail: 'Cloud Infrastructure', icon: <FaCloud /> },
      {
        name: 'SSL & DNS',
        detail: 'Domain Configuration',
        icon: <FaShieldHalved />,
      },
      { name: 'FTP', detail: 'File Management', icon: <FaFolder /> },
    ],
  },
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('wordpress')
  const skillsPanelRef = useRef(null)

  const selectedCategory = skillCategories.find(
    (category) => category.id === activeCategory,
  )

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)

    if (window.innerWidth <= 800) {
      setTimeout(() => {
        skillsPanelRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 100)
    }
  }

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <div>
            <p className="skills-eyebrow">
              <span />
              MY TOOLKIT
            </p>

            <h2 className="skills-title">
              Tools I use to
              <span>bring ideas to life</span>
            </h2>
          </div>

          <p className="skills-intro">
            A practical collection of technologies, platforms, and tools I
            use to design, develop, optimize, and deploy digital experiences.
          </p>
        </div>

        <div className="skills-layout">
          <div
            className="skills-tabs"
            role="tablist"
            aria-label="Skill categories"
          >
            {skillCategories.map((category) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === category.id}
                className={`skills-tab ${
                  activeCategory === category.id ? 'is-active' : ''
                }`}
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
              >
                <span className="skills-tab-icon">{category.icon}</span>

                <span className="skills-tab-label">
                  <small>{category.number}</small>
                  {category.label}
                </span>

                <span className="skills-tab-arrow">
                  <FaArrowUpRightFromSquare />
                </span>
              </button>
            ))}
          </div>

          <div
            className="skills-panel"
            role="tabpanel"
            ref={skillsPanelRef}
          >
            <div className="skills-panel-header">
              <div>
                <span className="skills-panel-number">
                  / {selectedCategory.number}
                </span>

                <h3>{selectedCategory.label}</h3>
              </div>

              <div className="skills-panel-symbol">
                {selectedCategory.icon}
              </div>
            </div>

            <p className="skills-panel-description">
              {selectedCategory.description}
            </p>

            <div className="skills-items">
              {selectedCategory.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-item-icon">{skill.icon}</div>

                  <div className="skill-item-content">
                    <h4>{skill.name}</h4>
                    <p>{skill.detail}</p>
                  </div>

                  <span className="skill-item-mark">
                    <FaArrowUpRightFromSquare />
                  </span>
                </div>
              ))}
            </div>

            <div className="skills-panel-footer">
              <span>SELECTED SKILLS</span>

              <span>
                {String(selectedCategory.skills.length).padStart(2, '0')} TOOLS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills