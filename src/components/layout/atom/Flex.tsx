import { Flex, ResponsiveValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

type fProps = {
  pos?: string
  bg?: string
  color?: string
  flexDirection?: ResponsiveValue<'column' | 'row'>
  children: ReactNode
}

export const AppFlex: React.FC<fProps> = ({
  pos,
  bg,
  color,
  flexDirection,
  children,
  ...rest
}) => (
  <Flex
    justify={pos}
    align={pos}
    bg={bg}
    color={color}
    flexDirection={flexDirection}
    {...rest}
  >
    {children}
  </Flex>
)
