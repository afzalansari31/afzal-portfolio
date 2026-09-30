import {
  FaWordpress,
  FaPenNib,
  FaCartShopping,
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaArrowUpRightFromSquare,
} from 'react-icons/fa6'

import './Services.css'

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading">
          <div>
            <p className="services-eyebrow">
              <span />
              SERVICES
            </p>

            <h2 className="services-title">
              What I can build
              <span>for your business</span>
            </h2>
          </div>

          <p className="services-intro">
            Practical digital solutions designed with clean visuals,
            reliable functionality, and long-term performance in mind.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-card-header">
              <span className="service-index">01</span>
              <span className="service-type">DEVELOPMENT</span>
            </div>

            <div className="service-icon">
              <FaWordpress />
            </div>

            <div className="service-card-content">
              <h3>WordPress Development</h3>

              <p>
                Responsive and scalable WordPress websites tailored to your
                business requirements.
              </p>
            </div>

            <a href="/#contact" className="service-card-link">
              <span>Explore service</span>

              <span className="service-arrow">
                <FaArrowUpRightFromSquare />
              </span>
            </a>
          </article>

          <article className="service-card">
            <div className="service-card-header">
              <span className="service-index">02</span>
              <span className="service-type">DESIGN</span>
            </div>

            <div className="service-icon">
              <FaPenNib />
            </div>

            <div className="service-card-content">
              <h3>Elementor Design</h3>

              <p>
                Custom layouts, advanced widgets, and polished interfaces
                built with Elementor.
              </p>
            </div>

            <a href="/#contact" className="service-card-link">
              <span>Explore service</span>

              <span className="service-arrow">
                <FaArrowUpRightFromSquare />
              </span>
            </a>
          </article>

          <article className="service-card">
            <div className="service-card-header">
              <span className="service-index">03</span>
              <span className="service-type">E-COMMERCE</span>
            </div>

            <div className="service-icon">
              <FaCartShopping />
            </div>

            <div className="service-card-content">
              <h3>WooCommerce</h3>

              <p>
                High-quality online stores with product management and
                seamless payment integrations.
              </p>
            </div>

            <a href="/#contact" className="service-card-link">
              <span>Explore service</span>

              <span className="service-arrow">
                <FaArrowUpRightFromSquare />
              </span>
            </a>
          </article>

          <article className="service-card">
            <div className="service-card-header">
              <span className="service-index">04</span>
              <span className="service-type">PLATFORMS</span>
            </div>

            <div className="service-icon">
              <FaGraduationCap />
            </div>

            <div className="service-card-content">
              <h3>LMS Development</h3>

              <p>
                Functional learning platforms using MasterStudy LMS and Tutor
                LMS with useful integrations.
              </p>
            </div>

            <a href="/#contact" className="service-card-link">
              <span>Explore service</span>

              <span className="service-arrow">
                <FaArrowUpRightFromSquare />
              </span>
            </a>
          </article>

          <article className="service-card">
            <div className="service-card-header">
              <span className="service-index">05</span>
              <span className="service-type">BACKEND</span>
            </div>

            <div className="service-icon">
              <FaCode />
            </div>

            <div className="service-card-content">
              <h3>Custom PHP Solutions</h3>

              <p>
                Custom functionality, integrations, and code-based solutions
                for specific business needs.
              </p>
            </div>

            <a href="/#contact" className="service-card-link">
              <span>Explore service</span>

              <span className="service-arrow">
                <FaArrowUpRightFromSquare />
              </span>
            </a>
          </article>

          <article className="service-card">
            <div className="service-card-header">
              <span className="service-index">06</span>
              <span className="service-type">OPTIMIZATION</span>
            </div>

            <div className="service-icon">
              <FaRocket />
            </div>

            <div className="service-card-content">
              <h3>SEO & Performance</h3>

              <p>
                Technical SEO, speed optimization, caching, debugging, and
                ongoing website maintenance.
              </p>
            </div>

            <a href="/#contact" className="service-card-link">
              <span>Explore service</span>

              <span className="service-arrow">
                <FaArrowUpRightFromSquare />
              </span>
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services