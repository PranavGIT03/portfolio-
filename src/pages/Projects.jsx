import React from 'react'
import './Projects.css'

const projects = [
  {
    title: 'NLP F1 Race Summarizer and Predictor',
    description:
      'I built this because I wanted to see if a model could actually understand race commentary and tell you what happened — not just pull statistics. Used DistilBERT on 10+ years of race data and got it to summarize races and predict outcomes with decent accuracy.',
    techStack: ['Python', 'DistilBERT', 'NLP', 'Data Analysis'],
    github: 'https://github.com/PranavGIT03/NLP-Project-Formula-1',
    highlights: [
      'Race event detection — pit stops, crashes, overtakes, weather changes',
      'Fine-tuned transformer model on F1 commentary text',
      'Structured race highlights output compared against a rule-based baseline',
    ],
  },
  {
    title: 'AI Support Agent — Expona AI 2.0',
    description:
      'Worked on the customer support agent for Expona AI. My part was mainly the dashboard UI and the onboarding flow — the goal was to make it feel less like talking to a bot and more like getting actual help. Reduced drop-off during onboarding by rethinking the navigation.',
    techStack: ['Python', 'AI Agents', 'Figma', 'UI/UX', 'Dashboard Design'],
    github: null,
    highlights: [
      'Designed the support agent dashboard from scratch in Figma',
      'Rebuilt the onboarding flow to cut user drop-off',
      'Worked on the agent pipeline alongside the backend team',
    ],
  },
  {
    title: 'CollabSphere',
    description:
      'A collaboration platform built with React and TypeScript. Started this to get hands-on with full-stack product development outside of coursework — the focus was on getting the UI architecture right from the beginning rather than refactoring later.',
    techStack: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/PranavGIT03/collabsphere',
    highlights: [
      'Built with TypeScript and React for strong type safety across components',
      'Styled with Tailwind CSS for a consistent, responsive layout',
      'Vite setup for fast development and optimised production builds',
    ],
  },
  {
    title: 'Constructo',
    description:
      'A cost-estimator platform for first-time home buyers, built during my time as Software Product Lead at Foreman Construction. The main challenge was making complex construction pricing feel approachable for Tier 2/3 customers who had no prior experience with it.',
    techStack: ['Product Design', 'Figma', 'Wireframing', 'Pricing Models'],
    github: 'https://github.com/PranavGIT03/Constructo2',
    highlights: [
      'Designed for Tier 2/3 customers with no construction background',
      'Customer-centric pricing and subscription model',
      'Led stakeholder conversations to shape core product features',
    ],
  },
]

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755
        -1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236
        1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466
        -1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
        0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405
        2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23
        1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22
        0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295
        24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function Projects() {
  return (
    <main className="projects-page">
      <h1 className="projects-heading">Projects</h1>
      <p className="projects-subheading">
        Things I've worked on — across NLP, product design, and full-stack development.
      </p>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-card-header">
              <h2 className="project-title">{project.title}</h2>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                  <GitHubIcon />
                  View on GitHub
                </a>
              )}
            </div>

            <p className="project-description">{project.description}</p>

            <ul className="project-highlights">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {project.techStack.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Projects
