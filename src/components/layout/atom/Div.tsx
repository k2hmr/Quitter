import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type bProps = {
  children: ReactNode
}

export const Div: React.FC<bProps> = ({ children }) => <Box>{children}</Box>
