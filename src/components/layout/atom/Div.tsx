import { Box, ResponsiveValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

type bProps = {
  bg?: string
  p?: ResponsiveValue<
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

export const Div: React.FC<bProps> = ({ bg, p, children, ...rest }) => (
  <Box bg={bg} p={p} {...rest}>
    {children}
  </Box>
)
