import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { AppLink } from '../layout/atom/Link'
import AuthForm from '../layout/molecules/AuthForm'
import { ColumnFlex } from '../layout/molecules/CustomFlex'

const SignupPage: React.FC<{}> = () => {
  const { signUp } = useFirebaseAuth()
  return (
    <ColumnFlex pos={'center'}>
      <AuthForm title="ユーザー登録" isNewUser={true} authFunc={signUp} />
      <AppLink to="/login">登録済みの方はこちら</AppLink>
    </ColumnFlex>
  )
}

export default SignupPage
