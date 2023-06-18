import colors from '@/components/layout/styles/colors'
import { RowFlex } from '../atom/CustomFlex'
import { Header } from '../atom/Header'
import { OutletForMain } from '../atom/OutletForMain'
import AuthSwitch from './AuthSwitch'

const NavBar = () => {
  return (
    <>
      <RowFlex bg={colors.primary[400]} color={colors.secondary[50]}>
        <Header>3日ダケ</Header>
        <AuthSwitch />
      </RowFlex>
      <OutletForMain />
    </>
  )
}

export default NavBar
