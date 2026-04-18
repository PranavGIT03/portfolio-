import React from 'react'
import './Home.css'

function Home() {
  return (
    <main className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-avatar">
          <div className="avatar-placeholder">PD</div>
        </div>
        <div className="hero-text">
          <h1>Pranav Dubey</h1>
          <p className="hero-subtitle">AI Student &amp; UI/UX Enthusiast</p>
          <p className="hero-location">📍 Hyderabad, India</p>
          <div className="hero-badges">
            <span className="badge">Python</span>
            <span className="badge">AI / ML</span>
            <span className="badge">Figma</span>
            <span className="badge">UI/UX</span>
            <span className="badge">NLP</span>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="card" id="about">
        <h2 className="section-title">About Me</h2>
        <p>
          I'm a second-year B.Tech student specialising in Artificial Intelligence at Mahindra
          Ecole Centrale, Hyderabad. I combine a passion for AI research with hands-on product
          and design experience, having worked as a UI/UX Intern at InfoBeans and as a Software
          Product Lead at Foreman Construction Pvt Ltd.
        </p>
        <p>
          I'm deeply interested in building technology that is intuitive, impactful, and
          human-centred — from NLP pipelines to customer-facing AI agents. Outside academics,
          I lead the Erudite Club, manage large-scale logistics events, and represented Madhya
          Pradesh at the SGFI U-17 State Cricket Team.
        </p>
      </section>

      {/* Research Interests */}
      <section className="card" id="research">
        <h2 className="section-title">Research Interests</h2>
        <div className="interests-grid">
          <div className="interest-item">
            <span className="interest-icon">🤖</span>
            <div>
              <h4>Natural Language Processing</h4>
              <p>Text summarization, prediction, and language model fine-tuning.</p>
            </div>
          </div>
          <div className="interest-item">
            <span className="interest-icon">💬</span>
            <div>
              <h4>AI Customer Experience</h4>
              <p>Designing AI agents that improve onboarding, support, and engagement.</p>
            </div>
          </div>
          <div className="interest-item">
            <span className="interest-icon">🎨</span>
            <div>
              <h4>Human-Computer Interaction</h4>
              <p>User-journey design, wireframing, and accessibility-focused prototyping.</p>
            </div>
          </div>
          <div className="interest-item">
            <span className="interest-icon">⚡</span>
            <div>
              <h4>Sustainable Technology</h4>
              <p>Electric vehicles, green-tech innovation, and technology-driven sustainability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Details */}
      <section className="card" id="contact">
        <h2 className="section-title">Personal Details</h2>
        <div className="details-grid">
          <div className="detail-row">
            <span className="detail-label">Name</span>
            <span className="detail-value">Pranav Dubey</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Phone</span>
            <span className="detail-value">+91 9893765557</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">College Email</span>
            <span className="detail-value">se23bai006@mahindrauniversity.edu.in</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">GitHub</span>
            <a
              className="detail-value detail-link"
              href="https://github.com/pranavdubey"
              target="_blank"
              rel="noreferrer"
            >
              github.com/pranavdubey
            </a>
          </div>
          <div className="detail-row">
            <span className="detail-label">LinkedIn</span>
            <a
              className="detail-value detail-link"
              href="https://www.linkedin.com/in/pranavdubey"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/pranavdubey
            </a>
          </div>
          <div className="detail-row">
            <span className="detail-label">Education</span>
            <span className="detail-value">B.Tech – Artificial Intelligence, Mahindra Ecole Centrale (2023 – Present)</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Coursework</span>
            <span className="detail-value">NLP, Artificial Intelligence, Data Structures, Design Thinking</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Location</span>
            <span className="detail-value">Hyderabad, India</span>
          </div>
        </div>

        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-group">
            <span className="skills-category">Technical</span>
            <div className="skill-tags">
              {['Python', 'SQL', 'MATLAB', 'Git', 'GitHub'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skills-group">
            <span className="skills-category">Design</span>
            <div className="skill-tags">
              {['Figma', 'Wireframing', 'Prototyping'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="skills-group">
            <span className="skills-category">Core</span>
            <div className="skill-tags">
              {['Customer Engagement', 'Communication', 'Problem Solving', 'Team Collaboration', 'Time Management'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
