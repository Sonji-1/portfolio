import SectionTitle from '../components/common/SectionTitle'
import TechBadge from '../components/project/TechBadge'
import { profile } from '../data/profile'
import { skills } from '../data/skills'

function About() {
  return (
    <div className="page">
      <SectionTitle
        eyebrow="About"
        title={`${profile.name}의 작업 방식`}
        subtitle="기술 선택의 근거와 협업 방식이 드러나는 개발자를 지향합니다."
      />

      <section className="panel">
        <h3>배경</h3>
        <ul className="bullet-list">
          {profile.background.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h3>관심 분야</h3>
        <div className="badge-row">
          {profile.interests.map((topic) => (
            <TechBadge key={topic} label={topic} />
          ))}
        </div>
      </section>

      <section className="panel">
        <h3>Skills</h3>
        <div className="skills-grid">
          <article className="skills-group">
            <h4>많이 해봤어요</h4>
            <div className="badge-row">
              {skills.strong.map((skill) => (
                <TechBadge key={skill} label={skill} />
              ))}
            </div>
          </article>
          <article className="skills-group">
            <h4>해본 적 있어요</h4>
            <div className="badge-row">
              {skills.familiar.map((skill) => (
                <TechBadge key={skill} label={skill} />
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="panel">
        <h3>기타</h3>
        <div className="badge-row">
          {profile.extras.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
