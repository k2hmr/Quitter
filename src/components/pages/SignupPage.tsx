import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { ColumnFlex } from '../layout/atom/CustomFlex'
import { LoginLink } from '../layout/atom/Links'
import AuthForm from '../layout/molecules/AuthForm'

const SignupPage: React.FC<{}> = () => {
  const { signUp } = useFirebaseAuth()
  return (
    <ColumnFlex pos={'center'}>
      <AuthForm title="ユーザー登録" isNewUser={true} authFunc={signUp} />
      <LoginLink>登録済みの方はこちら</LoginLink>
    </ColumnFlex>
  )
}

export default SignupPage
