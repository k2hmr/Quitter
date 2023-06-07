import colors from '@/components/layout/styles/colors'
import useAuthState from '@/hooks/useAuthState'
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  const { isSignedIn } = useAuthState()
  const { signOut } = useFirebaseAuth()

  return (
    <>
      <Flex bg={colors.primary[400]} color={colors.secondary[50]}>
        <Heading>3日ダケ</Heading>
        <Box>
          {isSignedIn ? (
            <Button onClick={() => signOut()}>ログアウト</Button>
          ) : (
            <Link to={'/login'}>ログイン</Link>
          )}
        </Box>
      </Flex>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default NavBar
