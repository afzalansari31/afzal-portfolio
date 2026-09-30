import { Link } from 'react-router-dom'
import './Process.css'

const Process = () => {
  const steps = [
    {
      number: '01',
      phase: 'Discover',
      title: 'Understand',
      description:
        'I start by understanding the idea, goals, audience, and the problem the website needs to solve.',
      keywords: ['Research', 'Strategy'],
    },
    {
      number: '02',
      phase: 'Design',
      title: 'Shape',
      description:
        'Ideas become a clear visual direction with thoughtful layouts, hierarchy, interactions, and user experience.',
      keywords: ['UI Direction', 'UX Flow'],
    },
    {
      number: '03',
      phase: 'Develop',
      title: 'Build',
      description:
        'The design turns into a responsive, functional website using clean code, WordPress, PHP, and modern web technologies.',
      keywords: ['Development', 'Performance'],
    },
    {
      number: '04',
      phase: 'Launch',
      title: 'Deliver',
      description:
        'Everything is tested, refined, optimized, deployed, and prepared for a smooth experience in the real world.',
      keywords: ['Testing', 'Deployment'],
    },
  ]

  return (
    <section className="process-section" id="process">
      <div className="process-container">

        {/* HEADER */}
        <div className="process-header">
          <div className="process-header-label">
            <span className="process-label-line" />
            <span>My Process</span>
          </div>

          <div className="process-header-content">
            <h2>
              From an idea
              <span>to something real</span>
            </h2>

            <p>
              Every project follows a simple idea — understand it, shape it,
              build it, and make it work.
            </p>
          </div>
        </div>

        {/* STEPS */}
        <div className="process-steps">
          {steps.map((step, index) => (
            <article
              className={`process-step ${
                index === steps.length - 1 ? 'process-step-last' : ''
              }`}
              key={step.number}
            >
              <div className="process-step-top">
                <span className="process-step-number">
                  {step.number}
                </span>

                <span className="process-step-arrow">↗</span>
              </div>

              <div className="process-step-line">
                <span />
              </div>

              <div className="process-step-content">
                <span className="process-step-phase">
                  {step.phase}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              <div className="process-step-tags">
                {step.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="process-bottom">
          <span>01</span>

          <div className="process-bottom-line">
            <span />
          </div>

          <span>04</span>

          <p>Simple process. Thoughtful execution.</p>
        </div>

        {/* CTA */}
        <div className="process-cta">
          <Link to="/contact" className="process-contact-button">
            <span>Let's Work Together</span>
            <span className="process-button-arrow">↗</span>
          </Link>

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
            target="_blank"
            rel="noopener noreferrer"
            className="process-linkedin-button"
          >
            <span>LinkedIn</span>
            <span className="process-button-arrow">↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Process