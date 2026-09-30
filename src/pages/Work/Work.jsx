import './Work.css'

import theImageProducts from '../../assets/projects/theimageproductswork.png'
import studioByIsim from '../../assets/projects/studiobyisimwork.png'
import isimx from '../../assets/projects/isimxwork.png'
import campcardSolutions from '../../assets/projects/campcardwork.png'
import indiaPresenceSummit from '../../assets/projects/indiapresencesummitwork.png'
import transengg from '../../assets/projects/TransEnggwork.png'

const projects = [
  {
    id: '01',
    image: theImageProducts,
    title: 'The Image Products',
    category: 'E-Commerce Website',
    description:
      'A modern product-focused website designed for a professional visual experience.',
    tags: ['WordPress', 'Elementor', 'WooCommerce'],
    url: 'https://theimageproducts.com/',
  },
  {
    id: '02',
    image: studioByIsim,
    title: 'StudioByISIM',
    category: 'Creative Platform',
    description:
      'A creative digital platform with a refined layout and engaging user experience.',
    tags: ['WordPress', 'Elementor', 'UI Design'],
    url: 'https://studiobyisim.com/',
  },
  {
    id: '03',
    image: isimx,
    title: 'ISIMX',
    category: 'LMS Website',
    description:
      'An education-focused platform developed to support learning and digital course experiences.',
    tags: ['WordPress', 'LMS', 'Custom Design'],
    url: 'https://isimx.io/',
  },
  {
    id: '04',
    image: campcardSolutions,
    title: 'CampCard Solutions',
    category: 'Web Application',
    description:
      'A responsive web experience combining modern frontend design with application-focused functionality.',
    tags: ['React', 'Express', 'JavaScript'],
    url: 'https://campcardsolutions.org/',
  },
  {
    id: '05',
    image: indiaPresenceSummit,
    title: 'India Presence Summit',
    category: 'Event Website',
    description:
      'A professional event website created with a clear structure and strong visual presentation.',
    tags: ['WordPress', 'Elementor', 'Responsive Design'],
    url: 'https://indiapresencesummit.com',
  },
  {
    id: '06',
    image: transengg,
    title: 'TransEngg Inc.',
    category: 'Business Website',
    description:
      'A business-focused website built to communicate services with clarity and a professional visual identity.',
    tags: ['WordPress', 'Elementor', 'SEO'],
    url: 'https://transengginc.in/',
  },
]

const WorkPage = () => {
  return (
    <main className="work-page">
      <div className="work-page-container">

        <div className="work-page-header">
          <span className="work-page-eyebrow">
            My Work
          </span>

          <h1>
            Selected
            <span>Projects</span>
          </h1>

          <p>
            A collection of websites and digital experiences
            I have designed and developed.
          </p>
        </div>

        <div className="work-page-grid">
          {projects.map((project) => (
            <article
              className="work-page-card"
              key={project.id}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="work-page-image-link"
              >
                <div className="work-page-image-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.title} website`}
                    className="work-page-image"
                  />

                  <span className="work-page-number">
                    {project.id}
                  </span>

                  <span className="work-page-view">
                    View Website ↗
                  </span>
                </div>
              </a>

              <div className="work-page-content">
                <span className="work-page-category">
                  {project.category}
                </span>

                <h2>{project.title}</h2>

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
                  Visit Website
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  )
}

export default WorkPage