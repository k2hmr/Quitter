import useAuthState from '@/hooks/useAuthState'
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { useUserToken } from '@/hooks/useUserToken'
import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const AuthSwitch = () => {
  const { isSignedIn } = useAuthState()
  const { signOut } = useFirebaseAuth()
  useUserToken()

  return (
    <Box>
      {isSignedIn ? (
        <Button onClick={() => signOut()}>ログアウト</Button>
      ) : (
        <Link to={'/login'}>ログイン</Link>
      )}
    </Box>
  )
}

export default AuthSwitch
