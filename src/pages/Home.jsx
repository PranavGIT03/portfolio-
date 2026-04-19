import React from 'react'
import './Home.css'

const profilePhoto = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Porsche_964_Carrera.JPG'

function Home() {
  return (
    <main className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-avatar">
          <img src={profilePhoto} alt="Porsche 964 911" className="avatar-img" />
        </div>
        <div className="hero-text">
          <h1>Pranav Dubey</h1>
          <p className="hero-subtitle">AI Student &amp; UI/UX Enthusiast</p>
          <p className="hero-location">Hyderabad, India</p>
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
          I'm Pranav, a third-year B.Tech student in Artificial Intelligence at Mahindra Ecole
          Centrale, Hyderabad. I got into AI because I was genuinely curious about how machines
          understand language — that curiosity turned into internships, projects, and a lot of
          late nights debugging Python.
        </p>
        <p>
          On the side, I've worked in product and design roles, which taught me that building
          something technically impressive means nothing if people can't figure out how to use it.
          I also run the Erudite Club on campus, played state-level cricket for Madhya Pradesh,
          and somehow still find time to read about electric vehicles.
        </p>
      </section>

      {/* Research Interests */}
      <section className="card" id="research">
        <h2 className="section-title">Research Interests</h2>
        <div className="interests-grid">
          <div className="interest-item">
            <div>
              <h4>Natural Language Processing</h4>
              <p>Especially text summarization and working with transformers like DistilBERT.</p>
            </div>
          </div>
          <div className="interest-item">
            <div>
              <h4>AI in Customer Experience</h4>
              <p>How AI agents can actually reduce friction for real users, not just in demos.</p>
            </div>
          </div>
          <div className="interest-item">
            <div>
              <h4>Human-Computer Interaction</h4>
              <p>Wireframing and prototyping products that feel obvious to use from the start.</p>
            </div>
          </div>
          <div className="interest-item">
            <div>
              <h4>Sustainable Technology</h4>
              <p>EVs, clean energy tech — I follow this space closely outside of academics.</p>
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
            <span className="detail-value">se23uari096@mahindrauniversity.edu.in</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">GitHub</span>
            <a
              className="detail-value detail-link"
              href="https://github.com/PranavGIT03"
              target="_blank"
              rel="noreferrer"
            >
              github.com/PranavGIT03
            </a>
          </div>
          <div className="detail-row">
            <span className="detail-label">LinkedIn</span>
            <a
              className="detail-value detail-link"
              href="https://www.linkedin.com/in/pranav-dubey-7226a1218"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/pranav-dubey-7226a1218
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
