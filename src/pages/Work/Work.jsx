
import { useMemo, useState } from 'react'
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaMagnifyingGlass,
} from 'react-icons/fa6'

import './Work.css'

import theImageProducts from '../../assets/projects/theimageproductswork.png'
import studioByIsim from '../../assets/projects/studiobyisimwork.png'
import isimx from '../../assets/projects/isimxwork.png'
import globalIsimx from '../../assets/projects/isimxwork.png'
import campcardSolutions from '../../assets/projects/campcardwork.png'
import indiaPresenceSummit from '../../assets/projects/indiapresencesummitwork.png'
import transengg from '../../assets/projects/TransEnggwork.png'
import ruvinsysGlobal from '../../assets/projects/ruvinsyswork.png'
import davanisGlobal from '../../assets/projects/davanisglobalwork.png'
import chaudhariLab from '../../assets/projects/chaudharilabwork.png'
import cloudRadius from '../../assets/projects/cloudradiuswork.png'
import businessIsim from '../../assets/projects/businesswork.png'
import pentagram from '../../assets/projects/pentagramwork.png'
import scandinavianEsg from '../../assets/projects/scandinavianesgwork.png'
import movementImpex from '../../assets/projects/movementimpexwork.png'
import ayukrantiGlobal from '../../assets/projects/ayurkrantiglobalwork.png'
import fireconIndia from '../../assets/projects/fireconindiawork.png'
import osteahenz from '../../assets/projects/osteahenzwork.png'
import avatarExhibits from '../../assets/projects/avatarexhibitwork.png'

const projects = [
  {
    id: '01',
    title: 'The Image Products',
    category: 'E-Commerce',
    description: 'A product-focused online store built for a professional shopping experience.',
    tags: ['WordPress', 'WooCommerce'],
    url: 'https://theimageproducts.com/',
    image: theImageProducts,
  },
  {
    id: '02',
    title: 'Studio by ISIM',
    category: 'Creative',
    description: 'A creative platform with a refined presentation and clear visual hierarchy.',
    tags: ['WordPress', 'Elementor'],
    url: 'https://studiobyisim.com/',
    image: studioByIsim,
  },
  {
    id: '03',
    title: 'ISIMX',
    category: 'LMS & Education',
    description: 'A digital learning platform designed around online education experiences.',
    tags: ['WordPress', 'LMS'],
    url: 'https://isimx.io/',
    image: isimx,
  },
  {
    id: '04',
    title: 'Global ISIMX',
    category: 'LMS & Education',
    description: 'An additional digital learning platform for the Global ISIMX experience.',
    tags: ['WordPress', 'LMS'],
    url: 'https://global.isimx.io/',
    image: globalIsimx,
  },
  {
    id: '05',
    title: 'CampCard Solutions',
    category: 'Web Development',
    description: 'A responsive web experience built with modern frontend technologies.',
    tags: ['React', 'JavaScript'],
    url: 'https://www.campcardsolutions.org/',
    image: campcardSolutions,
  },
  {
    id: '06',
    title: 'India Presence Summit',
    category: 'Events',
    description: 'An event website designed to present information with clarity and impact.',
    tags: ['WordPress', 'Elementor'],
    url: 'https://indiapresencesummit.com/',
    image: indiaPresenceSummit,
  },
  {
    id: '07',
    title: 'TransEngg Inc.',
    category: 'Corporate',
    description: 'A corporate website for engineering and gear motor solutions.',
    tags: ['WordPress', 'Elementor'],
    url: 'https://transengginc.in/',
    image: transengg,
  },
  {
    id: '08',
    title: 'RuvinSys Global',
    category: 'Corporate',
    description: 'A professional website for visa and immigration services.',
    tags: ['Web Development', 'Business'],
    url: 'https://ruvinsys.com/',
    image: ruvinsysGlobal,
  },
  {
    id: '09',
    title: 'Davanis Global',
    category: 'Corporate',
    description: 'A corporate web presence for a chemical industry business.',
    tags: ['WordPress', 'Corporate'],
    url: 'https://davanisglobal.com/',
    image: davanisGlobal,
  },
  {
    id: '10',
    title: 'Chaudhari Lab',
    category: 'Corporate',
    description: 'A website for an international research laboratory.',
    tags: ['WordPress', 'Business'],
    url: 'https://chaudharilab.com/',
    image: chaudhariLab,
  },
  {
    id: '11',
    title: 'Cloud Radius',
    category: 'Technology',
    description: 'A technology company website focused on hardware and software services.',
    tags: ['IT Services', 'Corporate'],
    url: 'https://cloudradius.co.in/',
    image: cloudRadius,
  },
  {
    id: '12',
    title: 'Business — ISIM',
    category: 'Corporate',
    description: 'An enterprise-focused website for the Indian School of Image Management.',
    tags: ['WordPress', 'Business'],
    url: 'https://business.indianschoolofimage.com/',
    image: businessIsim,
  },
  {
    id: '13',
    title: 'Pentagram',
    category: 'Corporate',
    description: 'A corporate website presenting a company and its services.',
    tags: ['WordPress', 'Corporate'],
    url: 'https://pentagram.co.in/',
    image: pentagram,
  },
  {
    id: '14',
    title: 'Scandinavian ESG',
    category: 'Corporate',
    description: 'A corporate website focused on ESG and sustainability-related services.',
    tags: ['WordPress', 'Corporate'],
    url: 'https://scandinavianesg.com/',
    image: scandinavianEsg,
  },
  {
    id: '15',
    title: 'Movement Impex',
    category: 'Corporate',
    description: 'A business website for a fabric manufacturing company.',
    tags: ['WordPress', 'Business'],
    url: 'https://movementimpex.in/',
    image: movementImpex,
  },
  {
    id: '16',
    title: 'Ayurkranti Global',
    category: 'E-Commerce',
    description: 'An online store built around products and a streamlined shopping journey.',
    tags: ['WordPress', 'WooCommerce'],
    url: 'https://ayurkrantiglobal.com/',
    image: ayukrantiGlobal,
  },
  {
    id: '17',
    title: 'Firecon India',
    category: 'Corporate',
    description: 'A corporate website for a company in the fire safety industry.',
    tags: ['WordPress', 'Corporate'],
    url: 'https://fireconindia.com/',
    image: fireconIndia,
  },
  {
    id: '18',
    title: 'Osteahenz',
    category: 'Healthcare',
    description: 'A healthcare website with a professional digital presence.',
    tags: ['WordPress', 'Healthcare'],
    url: 'https://osteahenz.com/',
    image: osteahenz,
  },
  {
    id: '19',
    title: 'Avatar Exhibits',
    category: 'Events',
    description: 'A website for exhibition and event services.',
    tags: ['WordPress', 'Business'],
    url: 'https://avatarexhibit.ossis.co.in/',
    image: avatarExhibits,
  },
]

const categories = [
  'All Projects',
  'Corporate',
  'E-Commerce',
  'LMS & Education',
  'Events',
  'Technology',
  'Web Development',
  'Creative',
  'Healthcare',
]

const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects')
  const [search, setSearch] = useState('')

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All Projects' ||
        project.category === activeCategory

      const matchesSearch =
        !query ||
        `${project.title} ${project.category} ${project.tags.join(' ')}`
          .toLowerCase()
          .includes(query)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  return (
    <main className="work-page">
      <section className="work-page-hero">
        <div className="work-page-container">
          <div className="work-page-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Selected Work</span>
          </div>

          <div className="work-page-hero-layout">
            <div className="work-page-header">
              <span className="work-page-eyebrow">
                <span className="work-page-eyebrow-line" />
                A selection of my work
              </span>

              <h1>
                Digital work.
                <span>Real experiences.</span>
              </h1>

              <p>
                Websites, online stores, learning platforms, and digital
                experiences built to bring ideas to life.
              </p>

              <a href="#all-projects" className="work-page-explore">
                Explore projects <FaArrowRight />
              </a>
            </div>

            <div className="work-page-hero-art" aria-hidden="true">
              <div className="work-page-art-orbit work-page-art-orbit-one" />
              <div className="work-page-art-orbit work-page-art-orbit-two" />

              <div className="work-page-art-center">
                <span>AF</span>
                <small>DESIGN · DEVELOP · DELIVER</small>
              </div>

              <span className="work-page-art-index">PORTFOLIO / 2026</span>
              <span className="work-page-art-star">✳</span>
            </div>
          </div>

          <div className="work-page-overview">
            <div>
              <strong>19</strong>
              <span>Selected projects</span>
            </div>
            <div>
              <strong>Multiple</strong>
              <span>Industries & experiences</span>
            </div>
            <div>
              <strong>One focus</strong>
              <span>Useful digital experiences</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work-page-gallery" id="all-projects">
        <div className="work-page-container">
          <div className="work-page-gallery-heading">
            <div>
              <span className="work-page-section-label">THE COLLECTION</span>
              <h2>
                Explore my projects<span>.</span>
              </h2>
            </div>
            <p>
              Browse by category or search for a specific project.
              Select any project to visit its live website.
            </p>
          </div>

          <div className="work-page-controls">
            <div className="work-page-filters" aria-label="Filter projects">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`work-page-filter ${
                    activeCategory === category ? 'active' : ''
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="work-page-search">
              <FaMagnifyingGlass />
              <input
                type="search"
                placeholder="Search projects..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search projects"
              />
            </label>
          </div>

          <div className="work-page-results">
            <span>
              Showing <strong>{filteredProjects.length}</strong> projects
            </span>

            {(activeCategory !== 'All Projects' || search) && (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All Projects')
                  setSearch('')
                }}
              >
                Clear filters ×
              </button>
            )}
          </div>

          <div className="work-page-grid">
            {filteredProjects.map((project) => (
              <article className="work-page-card" key={project.id}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-page-image-link"
                  aria-label={`Visit ${project.title}`}
                >
                  <div className="work-page-image-wrapper">
                    <img
                      src={project.image}
                      alt={`${project.title} website preview`}
                      className="work-page-image"
                      loading="lazy"
                    />

                    <span className="work-page-number">{project.id}</span>
                    <span className="work-page-view">
                      View Website <FaArrowUpRightFromSquare />
                    </span>
                  </div>
                </a>

                <div className="work-page-content">
                  <div className="work-page-card-topline">
                    <span className="work-page-category">
                      {project.category}
                    </span>
                    <span className="work-page-card-id">{project.id}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="work-page-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-page-link"
                  >
                    Visit live website
                    <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="work-page-empty">
              <span>NO MATCHES FOUND</span>
              <h3>Try another search.</h3>
              <p>
                Try a different project name or select another category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All Projects')
                  setSearch('')
                }}
              >
                Show all projects <FaArrowRight />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="work-page-cta">
        <div className="work-page-container work-page-cta-inner">
          <div>
            <span className="work-page-section-label">
              HAVE SOMETHING IN MIND?
            </span>
            <h2>
              Let’s build something <span>meaningful.</span>
            </h2>
            <p>
              Have a website idea or a project to discuss? Let’s talk.
            </p>
          </div>

          <a href="/contact" className="work-page-cta-button">
            Start a conversation <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  )
}

export default WorkPage
