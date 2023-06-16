import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import AuthForm from '../layout/molecules/AuthForm'

const LoginPage: React.FC<{}> = () => {
  const { signIn } = useFirebaseAuth()
  return (
    <Flex justify={'center'} align={'center'} flexDirection={'column'}>
      <AuthForm title="ログイン" isNewUser={false} authFunc={signIn} />
      <Link to={'/signup'}>初めての方はこちら</Link>
    </Flex>
  )
}

export default LoginPage
