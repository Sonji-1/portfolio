import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import TechBadge from './TechBadge'

function ProjectCard({ project }) {
  const [imageBroken, setImageBroken] = useState(false)

  const leadMetric = useMemo(() => {
    const metricsSection = project.sections.find((section) => section.type === 'metrics')
    return metricsSection?.metrics?.[0]
  }, [project.sections])
  const keywordTags = useMemo(() => {
    const tagsSection = project.sections.find((section) => section.type === 'tags')
    return tagsSection?.tags?.slice(0, 3) ?? []
  }, [project.sections])

  return (
    <article className="project-card">
      <Link to={`/projects/${project.id}`} className="project-card-link">
        <div className="project-thumb">
          {!imageBroken ? (
            <img
              src={project.thumbnail}
              alt={`${project.title} 썸네일`}
              loading="lazy"
              onError={() => setImageBroken(true)}
            />
          ) : (
            <div className="image-placeholder">No Preview</div>
          )}
        </div>
        <div className="project-card-body">
          <p className="project-period">{project.period}</p>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          {leadMetric ? (
            <p className="project-impact">
              {leadMetric.label}: {leadMetric.before}
              {' -> '}
              {leadMetric.after}
            </p>
          ) : null}
          <div className="badge-row">
            {project.techStack.slice(0, 4).map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
          {keywordTags.length > 0 ? (
            <div className="keyword-chip-row">
              {keywordTags.map((tag) => (
                <span className="keyword-chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </Link>
    </article>
  )
}

export default ProjectCard
