import useAuthState from '@/hooks/useAuthState'
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { useUserToken } from '@/hooks/useUserToken'
import { LogoutButton } from '../atom/Buttons'
import { Div } from '../atom/Div'
import { LoginLink } from '../atom/Links'

const AuthSwitch = () => {
  const { isSignedIn } = useAuthState()
  const { signOut } = useFirebaseAuth()
  useUserToken()

  return (
    <Div>
      {isSignedIn ? (
        <LogoutButton onClick={() => signOut()}>ログアウト</LogoutButton>
      ) : (
        <LoginLink>ログイン</LoginLink>
      )}
    </Div>
  )
}

export default AuthSwitch
