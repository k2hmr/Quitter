import { Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

type hProps = {
  children: ReactNode
}

export const Header: React.FC<hProps> = ({ children }) => {
  return <Heading>{children}</Heading>
}
