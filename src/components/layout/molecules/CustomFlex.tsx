import { ReactNode } from 'react'
import { AppFlex } from '../atom/Flex'
import { setResponsiveDirection } from '../styles/setResponsive'

type fProps = {
  pos?: string
  bg?: string
  color?: string
  children: ReactNode
}

export const ResponsiveFlex: React.FC<fProps> = ({
  pos,
  children,
  ...rest
}) => (
  <AppFlex
    pos={pos}
    flexDirection={setResponsiveDirection('row', 'column')}
    {...rest}
  >
    {children}
  </AppFlex>
)

export const ColumnFlex: React.FC<fProps> = ({
  pos,
  bg,
  color,
  children,
  ...rest
}) => (
  <AppFlex pos={pos} bg={bg} color={color} flexDirection={'column'} {...rest}>
    {children}
  </AppFlex>
)

export const RowFlex: React.FC<fProps> = ({ pos, children, ...rest }) => (
  <AppFlex pos={pos} flexDirection={'row'} {...rest}>
    {children}
  </AppFlex>
)
