import colors from '@/components/layout/styles/colors'
import { Flex, Heading } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import AuthSwitch from './AuthSwitch'

const NavBar = () => {
  return (
    <>
      <Flex bg={colors.primary[400]} color={colors.secondary[50]}>
        <Heading>3日ダケ</Heading>
        <AuthSwitch />
      </Flex>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default NavBar
