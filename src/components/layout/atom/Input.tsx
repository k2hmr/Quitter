import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { ReactNode } from 'react'

type iProps = {
  type: string
  value?: string | number | readonly string[]
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

type igProps = {
  children: ReactNode
}

export const AppInput: React.FC<iProps> = ({
  type,
  value,
  onChange,
  placeholder,
  ...rest
}) => (
  <Input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    {...rest}
  />
)

export const AppInputGroup: React.FC<igProps> = ({ children }) => (
  <InputGroup>{children}</InputGroup>
)

export const AppInputRightElement: React.FC<igProps> = ({ children }) => (
  <InputRightElement>{children}</InputRightElement>
)
