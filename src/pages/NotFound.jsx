import ButtonLink from '../components/common/ButtonLink'

function NotFound({
  title = '페이지를 찾을 수 없습니다.',
  description = '입력하신 경로가 없거나 이동된 페이지입니다.',
}) {
  return (
    <section className="not-found">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="link-row">
        <ButtonLink to="/projects">프로젝트 목록으로 이동</ButtonLink>
        <ButtonLink to="/" variant="ghost">
          홈으로 이동
        </ButtonLink>
      </div>
    </section>
  )
}

export default NotFound
