import SectionTitle from '../components/common/SectionTitle'
import ProjectCard from '../components/project/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <div className="page">
      <SectionTitle
        eyebrow="Projects"
        title="프로젝트 목록"
        subtitle="각 카드에서 프로젝트 스토리 상세 페이지로 이동할 수 있습니다."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
