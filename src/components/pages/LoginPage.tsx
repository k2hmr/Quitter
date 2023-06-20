import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { AppLink } from '../layout/atom/Link'
import AuthForm from '../layout/molecules/AuthForm'
import { ColumnFlex } from '../layout/molecules/CustomFlex'

const LoginPage: React.FC<{}> = () => {
  const { signIn } = useFirebaseAuth()
  return (
    <ColumnFlex pos={'center'}>
      <AuthForm title="ログイン" isNewUser={false} authFunc={signIn} />
      <AppLink to="/signup">初めての方はこちら</AppLink>
    </ColumnFlex>
  )
}

export default LoginPage
