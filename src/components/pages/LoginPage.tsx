import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import AuthForm from '../layout/molecules/AuthForm'

const LoginPage: React.FC<{}> = () => {
  const { signIn } = useFirebaseAuth()

  return <AuthForm title="ログイン" authFunc={signIn} />
}

export default LoginPage
