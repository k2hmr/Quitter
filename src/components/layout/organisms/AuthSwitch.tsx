import useAuthState from '@/hooks/useAuthState'
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { useUserToken } from '@/hooks/useUserToken'
import { AppButton } from '../atom/Button'
import { Div } from '../atom/Div'
import { AppLink } from '../atom/Link'

const AuthSwitch = () => {
  const { isSignedIn } = useAuthState()
  const { signOut } = useFirebaseAuth()
  useUserToken()

  return (
    <Div>
      {isSignedIn ? (
        <AppButton onClick={() => signOut()}>ログアウト</AppButton>
      ) : (
        <AppLink to="/login">ログイン</AppLink>
      )}
    </Div>
  )
}

export default AuthSwitch
