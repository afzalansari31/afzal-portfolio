
import { useState } from 'react'
import {
  FaArrowRight,
  FaEnvelope,
  FaLocationDot,
  FaLinkedinIn,
} from 'react-icons/fa6'
import './Contact.css'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
}

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [status, setStatus] = useState('idle')

  const projectTypes = [
    'New Website',
    'Website Redesign',
    'E-commerce',
    'LMS / Online Course',
    'Custom Web Development',
    'Other',
  ]

  const budgetOptions = [
    'Under ₹10,000',
    '₹10,000–₹25,000',
    '₹25,000–₹50,000',
    '₹50,000–₹1,00,000',
    '₹1,00,000+',
    'Not sure yet',
  ]

  const timelineOptions = [
    'Within 1–2 weeks',
    'Within 2–4 weeks',
    'Within 1–2 months',
    'Flexible',
    'Just exploring',
  ]

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString(),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setFormData(initialFormData)
      setStatus('success')
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Contact</span>
          </div>

          <div className="contact-intro">
            <div className="contact-intro-content">
              <span className="contact-kicker">
                Have a project in mind?
              </span>

              <h1>
                Let&apos;s work
                <span>together.</span>
              </h1>

              <p>
                Whether you need a new website, a redesign, an
                e-commerce store, or a custom web solution,
                I&apos;d love to hear about it.
              </p>
            </div>

            <div className="contact-intro-mark">
              <span>AF</span>
              <div />
              <small>WEB DEVELOPER</small>
            </div>
          </div>

          <div className="contact-main">
            <div className="contact-details">
              <div className="contact-detail-heading">
                <span>GET IN TOUCH</span>
                <div />
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <small>Email</small>
                  <a href="mailto:ansariafzal511@gmail.com">
                    ansariafzal511@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaLocationDot />
                </div>

                <div>
                  <small>Location</small>
                  <strong>Mumbai, India</strong>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon contact-online-dot">
                  <span />
                </div>

                <div>
                  <small>Availability</small>
                  <strong>Open for new projects</strong>
                </div>
              </div>

              <div className="contact-details-bottom">
                <p>
                  Have an idea or a website that needs
                  improvement? Send me the details and
                  let&apos;s start a conversation.
                </p>

                <a
                  href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-linkedin"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                  <FaArrowRight />
                </a>
              </div>
            </div>

            <div className="contact-form-container">
              {status === 'success' ? (
                <div className="contact-success">
                  <div className="contact-success-circle">
                    <FaArrowRight />
                  </div>

                  <span>MESSAGE SENT</span>

                  <h2>
                    Thanks for
                    <br />
                    reaching out.
                  </h2>

                  <p>
                    Your message has been received successfully.
                    I&apos;ll get back to you as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                  >
                    Send another message
                    <FaArrowRight />
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="contact"
                  />

                  <input
                    type="hidden"
                    name="bot-field"
                  />

                  <div className="contact-form-title">
                    <span>START A CONVERSATION</span>
                    <h2>Tell me about your project.</h2>
                  </div>

                  <div className="contact-fields-row">
                    <div className="contact-field">
                      <label htmlFor="name">
                        Name <span>*</span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="contact-field">
                      <label htmlFor="email">
                        Email <span>*</span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="phone">
                      Phone <small>Optional</small>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="projectType">
                      What type of project?
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select project type
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-fields-row">
                    <div className="contact-field">
                      <label htmlFor="budget">
                        Estimated budget
                      </label>

                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select your budget
                        </option>

                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="contact-field">
                      <label htmlFor="timeline">
                        Expected timeline
                      </label>

                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select timeline
                        </option>

                        {timelineOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="contact-field contact-message">
                    <label htmlFor="message">
                      Tell me about it <span>*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your idea, website, goals, or what you need help with..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <div className="contact-error">
                      Something went wrong while sending your message.
                      Please try again.
                    </div>
                  )}

                  <div className="contact-submit-row">
                    <p>
                      I usually respond within 1–2 business days.
                    </p>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                    >
                      <span>
                        {status === 'submitting'
                          ? 'Sending...'
                          : 'Send enquiry'}
                      </span>

                      <i>
                        <FaArrowRight />
                      </i>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
