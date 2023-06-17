import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import AuthForm from '../layout/molecules/AuthForm'

const SignupPage: React.FC<{}> = () => {
  const { signUp } = useFirebaseAuth()
  return (
    <Flex justify={'center'} align={'center'} flexDirection={'column'}>
      <AuthForm title="ユーザー登録" isNewUser={true} authFunc={signUp} />
      <Link to={'/login'}>登録済みの方はこちら</Link>
    </Flex>
  )
}

export default SignupPage
