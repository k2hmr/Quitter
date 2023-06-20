import { Button } from '@chakra-ui/react'
import { ReactNode } from 'react'

type btnProps = {
  cursor?: string
  disabled?: boolean
  onClick?: () => void
  children: ReactNode
}

export const AppButton: React.FC<btnProps> = ({
  cursor,
  disabled,
  onClick,
  children,
  ...rest
}) => (
  <Button cursor={cursor} disabled={disabled} onClick={onClick} {...rest}>
    {children}
  </Button>
)
