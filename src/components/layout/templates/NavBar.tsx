import useAuthState from '@/hooks/useAuthState'
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import colors from '@/styles/colors'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const { isSignedIn } = useAuthState()
  const { logout } = useFirebaseAuth()
  const navigate = useNavigate()

  return (
    <>
      <Flex bg={colors.primary[400]} color={colors.secondary[50]}>
        <Heading>3日ダケ</Heading>
        <Box>
          {isSignedIn ? (
            <Button
              onClick={() => {
                logout()
                navigate('/')
              }}
            >
              ログアウト
            </Button>
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
