import { Link } from 'react-router-dom'

function ButtonLink({ to, href, children, variant = 'primary' }) {
  const className = `button-link ${variant}`

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    )
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default ButtonLink
