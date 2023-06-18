import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { ColumnFlex } from '../layout/atom/CustomFlex'
import { SignupLink } from '../layout/atom/Links'
import AuthForm from '../layout/molecules/AuthForm'

const LoginPage: React.FC<{}> = () => {
  const { signIn } = useFirebaseAuth()
  return (
    <ColumnFlex pos={'center'}>
      <AuthForm title="ログイン" isNewUser={false} authFunc={signIn} />
      <SignupLink>初めての方はこちら</SignupLink>
    </ColumnFlex>
  )
}

export default LoginPage
