import { useState } from 'react'
import { useParams } from 'react-router-dom'
import SectionTitle from '../components/common/SectionTitle'
import TechBadge from '../components/project/TechBadge'
import ProjectSectionRenderer from '../components/project/ProjectSectionRenderer'
import { projects } from '../data/projects'
import NotFound from './NotFound'

function ProjectLeadMedia({ project }) {
  const [broken, setBroken] = useState(false)
  const media = project.heroMedia ?? {
    type: 'image',
    src: project.thumbnail,
    alt: `${project.title} 대표 이미지`,
  }

  return (
    <section className="detail-media">
      <SectionTitle title={media.title ?? '대표 미디어'} />
      <div className="detail-media-frame">
        {media.type === 'video' && media.src && !broken ? (
          <video
            className="detail-media-video"
            controls
            preload="metadata"
            playsInline
            poster={media.poster ?? project.thumbnail}
            onError={() => setBroken(true)}
          >
            <source src={media.src} type={media.mimeType ?? 'video/mp4'} />
          </video>
        ) : null}

        {media.type === 'embed' && media.src && !broken ? (
          <iframe
            className="detail-media-embed"
            src={media.src}
            title={media.alt ?? `${project.title} embedded video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : null}

        {media.type !== 'video' && media.type !== 'embed' && media.src && !broken ? (
          <img
            className="detail-media-image"
            src={media.src}
            alt={media.alt ?? `${project.title} 대표 이미지`}
            onError={() => setBroken(true)}
          />
        ) : null}

        {broken ? <div className="image-placeholder">Media Not Found</div> : null}
      </div>
      {media.caption ? <p className="detail-media-caption">{media.caption}</p> : null}
    </section>
  )
}

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return (
      <NotFound
        title="프로젝트를 찾을 수 없습니다."
        description="프로젝트 목록으로 이동해 다른 항목을 확인해 주세요."
      />
    )
  }

  return (
    <article className="page">
      <header className="detail-header">
        <SectionTitle eyebrow={project.period} title={project.title} subtitle={project.summary} />
        <p className="detail-role">역할: {project.role}</p>
        <div className="badge-row">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </header>

      <ProjectLeadMedia project={project} />

      <div className="detail-sections">
        {project.sections.map((section, index) => (
          <ProjectSectionRenderer key={`${project.id}-${section.type}-${index}`} section={section} />
        ))}
      </div>
    </article>
  )
}

export default ProjectDetail
