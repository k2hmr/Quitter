import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import AuthForm from '../layout/molecules/AuthForm'

const SignupPage: React.FC<{}> = () => {
  const { signUp } = useFirebaseAuth()
  return <AuthForm title="ユーザー登録" isNewUser={true} authFunc={signUp} />
}

export default SignupPage
