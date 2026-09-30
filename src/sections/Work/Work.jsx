import './Work.css'

import theImageProducts from '../../assets/projects/theimageproductswork.png'
import studioByIsim from '../../assets/projects/studiobyisimwork.png'
import isimx from '../../assets/projects/isimxwork.png'
import campcardSolutions from '../../assets/projects/campcardwork.png'
import indiaPresenceSummit from '../../assets/projects/indiapresencesummitwork.png'
import transengg from '../../assets/projects/Transenggwork.png'

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

const Work = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-container">

        <div className="work-heading">
          <div>
            <span className="work-eyebrow">Selected Projects</span>

            <h2 className="work-title">
              Work that makes
              <span> an impact</span>
            </h2>
          </div>

          <p className="work-description">
            A selection of websites and digital experiences built with
            creativity, clean design, and performance in mind.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.id}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="work-image-link"
                aria-label={`Visit ${project.title} website`}
              >
                <div className="work-image-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.title} website`}
                    className="work-image"
                  />

                  <span className="work-project-number">
                    {project.id}
                  </span>

                  <span className="work-view-label">
                    View Website ↗
                  </span>
                </div>
              </a>

              <div className="work-card-content">
                <span className="work-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="work-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-visit-link"
                >
                  Visit Website <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* VIEW MORE WORK */}
        <div className="work-more">
          <a href="/work" className="work-more-button">
            <span>View More Work</span>
            <span className="work-more-arrow">↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Work