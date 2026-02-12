import { useMemo, useState } from 'react'
import ButtonLink from '../common/ButtonLink'
import TechBadge from './TechBadge'

function ProjectHero({ project }) {
  const [imageBroken, setImageBroken] = useState(false)

  const keyMetrics = useMemo(() => {
    const metricsSection = project.sections.find((section) => section.type === 'metrics')
    return metricsSection?.metrics?.slice(0, 2) ?? []
  }, [project.sections])

  return (
    <section className="project-hero">
      <div className="project-hero-media">
        {!imageBroken ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} 대표 이미지`}
            onError={() => setImageBroken(true)}
          />
        ) : (
          <div className="image-placeholder">Featured Project</div>
        )}
      </div>
      <div className="project-hero-content">
        <p className="hero-label">Featured Project</p>
        <h2>{project.title}</h2>
        <p className="project-summary">{project.summary}</p>
        <div className="badge-row">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
        <div className="hero-metrics">
          {keyMetrics.map((metric) => (
            <div className="metric-chip" key={metric.label}>
              <p>{metric.label}</p>
              <strong>
                {metric.before}
                {' -> '}
                {metric.after}
              </strong>
            </div>
          ))}
        </div>
        <div className="hero-actions">
          <ButtonLink to={`/projects/${project.id}`}>상세 보기</ButtonLink>
          <ButtonLink to="/projects" variant="ghost">
            전체 프로젝트
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero
