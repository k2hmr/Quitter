import colors from '@/styles/colors'
import { Flex, Heading } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Flex bg={colors.primary[400]} color={colors.secondary[50]}>
        <Heading>3日ダケ</Heading>
      </Flex>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default NavBar
