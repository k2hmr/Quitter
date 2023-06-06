import useAuthState from '@/hooks/useAuthState'
import { Navigate, useLocation } from 'react-router'

type Props = {
  component: React.ReactNode
  redirect: string
}

export const RouterAuthenticatedCheck = (props: Props) => {
  const { component, redirect } = props
  const { isSignedIn, isLoading } = useAuthState()
  const { pathname } = useLocation()

  if (isLoading)
    return (
      <div>
        <p>読み込み中…</p>
      </div>
    )

  return isSignedIn ? (
    <>{component}</>
  ) : (
    <Navigate to={redirect} state={{ from: pathname }} replace={false} />
  )
}
