import { Flex, ResponsiveValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

type fProps = {
  pos?: string
  bg?: string
  color?: string
  flexDirection?: ResponsiveValue<'column' | 'row'>
  gridGap?: ResponsiveValue<
    | number
    | (string & {})
    | 'px'
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset'
  >
  children: ReactNode
}

export const AppFlex: React.FC<fProps> = ({
  pos,
  bg,
  color,
  flexDirection,
  gridGap,
  children,
  ...rest
}) => (
  <Flex
    justify={pos}
    align={pos}
    bg={bg}
    color={color}
    flexDirection={flexDirection}
    gridGap={gridGap}
    {...rest}
  >
    {children}
  </Flex>
)
