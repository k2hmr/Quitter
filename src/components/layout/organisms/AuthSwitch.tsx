import useAuthState from '@/hooks/useAuthState'
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const AuthSwitch = () => {
  const { isSignedIn } = useAuthState()
  const { signOut } = useFirebaseAuth()

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
