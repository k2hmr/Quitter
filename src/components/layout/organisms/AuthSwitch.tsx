import useAuthState from '@/hooks/useAuthState'
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { useUserToken } from '@/hooks/useUserToken'
import { useLocation } from 'react-router'
import { AppButton } from '../atom/Button'
import { Div } from '../atom/Div'
import { AppFlex } from '../atom/Flex'
import { AppLink } from '../atom/Link'

const AuthSwitch = () => {
  const { isSignedIn } = useAuthState()
  const { signOut } = useFirebaseAuth()
  useUserToken()
  const location = useLocation()

  return (
    <Div>
      {isSignedIn ? (
        <AppFlex flexDirection="row">
          {location.pathname === '/mypage' ? (
            <AppLink to={'/themes'}>取り組み中のテーマ</AppLink>
          ) : (
            <AppLink to={'/mypage'}>マイページ</AppLink>
          )}
          <AppButton onClick={() => signOut()}>ログアウト</AppButton>
        </AppFlex>
      ) : (
        <AppLink to="/login">ログイン</AppLink>
      )}
    </Div>
  )
}

export default AuthSwitch
