import SectionTitle from '../components/common/SectionTitle'
import { profile } from '../data/profile'
import { skills } from '../data/skills'

function About() {
  return (
    <div className="page">
      <SectionTitle
        eyebrow="About"
        title={`작업 방식`}
        subtitle="AI와 임베디드 시스템을 물리 환경에 연결하는 구조를 설계합니다."
      />

      <section className="panel">
        <h3>About</h3>
        <div className="detail-sections">
          {profile.aboutNarrative.map((line) => (
            <p className="statement-text" key={line}>
              {line}
            </p>
          ))}
        </div>
      </section>

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
        <ul className="bullet-list">
          {profile.interests.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h3>Skills</h3>
        <div className="skills-grid">
          <article className="skills-group">
            <h4>Core Stack</h4>
            <ul className="bullet-list compact">
              {skills.core.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
          <article className="skills-group">
            <h4>Hardware</h4>
            <ul className="bullet-list compact">
              {skills.hardware.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

    </div>
  )
}

export default About
