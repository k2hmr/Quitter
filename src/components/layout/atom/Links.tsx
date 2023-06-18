import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type lProps = {
  children: ReactNode
}

export const SignupLink: React.FC<lProps> = ({ children }) => (
  <Link to="/signup">{children}</Link>
)

export const LoginLink: React.FC<lProps> = ({ children }) => (
  <Link to="/login">{children}</Link>
)
