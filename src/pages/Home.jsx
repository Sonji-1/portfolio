import { useMemo, useState } from 'react'
import SectionTitle from '../components/common/SectionTitle'
import ProjectCard from '../components/project/ProjectCard'
import { profile } from '../data/profile'
import { featuredProjectId, projects } from '../data/projects'

function Home() {
  const profilePhotoCandidates = useMemo(
    () =>
      Array.from(
        new Set([
          profile.heroCard.photo,
          '/images/profile/profile.jpg',
          '/images/profile/profile.jpeg',
          '/images/profile/profile.png',
        ]),
      ),
    [],
  )
  const [photoIndex, setPhotoIndex] = useState(0)
  const [photoBroken, setPhotoBroken] = useState(false)
  const featuredProject = projects.find((project) => project.id === featuredProjectId) ?? projects[0]
  const otherProjects = projects.filter((project) => project.id !== featuredProject.id)
  const quickFacts = profile.heroCard.quickFacts.filter((fact) =>
    ['이름', '코어 스택', '포지션', '학습 중 기술'].includes(fact.label),
  )
  const visibleContacts = profile.heroCard.contacts.filter((contact) => !contact.hidden)

  return (
    <div className="page">
      <section className="home-intro">
        <div className="intro-top">
          <p className="intro-eyebrow">ABOUT</p>
          <h1 className="hero-heading">
            <span>{profile.name}</span>
            <span className="hero-divider">|</span>
            <span className="hero-role">{profile.role}</span>
          </h1>
          <div className="keyword-row">
            {profile.hero.keywords.map((keyword) => (
              <span className="keyword-tag" key={keyword}>
                {keyword}
              </span>
            ))}
          </div>
          <p className="hero-subcopy">{profile.hero.subcopy}</p>
        </div>

        <div className="intro-body">
          <aside className="intro-aside">
            <div className="profile-photo">
              {!photoBroken ? (
                <img
                  src={profilePhotoCandidates[photoIndex]}
                  alt={`${profile.name} profile`}
                  onError={() => {
                    setPhotoIndex((current) => {
                      if (current < profilePhotoCandidates.length - 1) {
                        return current + 1
                      }
                      setPhotoBroken(true)
                      return current
                    })
                  }}
                />
              ) : (
                <div className="image-placeholder">Profile Photo</div>
              )}
            </div>
            <div className="quick-facts">
              {quickFacts.map((fact) => (
                <div className="quick-fact-row" key={fact.label}>
                  <span>{fact.label}</span>
                  <strong title={fact.value}>{fact.value}</strong>
                </div>
              ))}
            </div>
          </aside>

          <div className="intro-main">
            <div className="contact-cta-grid">
              {visibleContacts.map((contact) => (
                <a className="contact-cta" href={contact.href} target="_blank" rel="noreferrer" key={contact.label}>
                  <span className="contact-label">
                    <span className="contact-icon">{contact.icon}</span>
                    {contact.label}
                  </span>
                  <span className="contact-link">{contact.value}</span>
                </a>
              ))}
            </div>

            <section className="declaration-block">
              <h2>{profile.declaration.title}</h2>
              <p>{profile.declaration.body}</p>
            </section>

            <section className="strength-section">
              <p className="strength-title">Core Capabilities</p>
              <div className="strength-grid">
                {profile.strengths.map((strength) => (
                  <article className="strength-block" key={strength.title}>
                    <h3>{strength.title}</h3>
                    <p>{strength.description}</p>
                    {strength.bullets?.length ? (
                      <ul>
                        {strength.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="section-stack">
        <SectionTitle
          eyebrow="Projects"
          title="전체 프로젝트 탐색"
          subtitle="카드를 클릭하면 스토리형 상세 페이지로 이동합니다."
        />
        <div className="project-grid">
          {[featuredProject, ...otherProjects].map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
