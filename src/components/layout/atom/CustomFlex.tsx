import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
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
  <Flex
    justify={pos}
    align={pos}
    flexDirection={setResponsiveDirection('row', 'column')}
    {...rest}
  >
    {children}
  </Flex>
)

export const ColumnFlex: React.FC<fProps> = ({
  pos,
  bg,
  color,
  children,
  ...rest
}) => (
  <Flex
    justify={pos}
    align={pos}
    bg={bg}
    color={color}
    flexDirection={'column'}
    {...rest}
  >
    {children}
  </Flex>
)

export const RowFlex: React.FC<fProps> = ({ pos, children, ...rest }) => (
  <Flex justify={pos} align={pos} flexDirection={'row'} {...rest}>
    {children}
  </Flex>
)
