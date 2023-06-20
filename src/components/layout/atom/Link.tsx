import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type lProps = {
  to: string
  children: ReactNode
}

export const AppLink: React.FC<lProps> = ({ to, children, ...rest }) => (
  <Link to={to} {...rest}>
    {children}
  </Link>
)
