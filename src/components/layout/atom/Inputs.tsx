import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'

type iProps = {
  value?: string | number | readonly string[]
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export const TextInput: React.FC<iProps> = ({
  value,
  onChange,
  placeholder,
  ...rest
}) => (
  <Input
    type={'text'}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    {...rest}
  />
)

export const EmailInput: React.FC<iProps> = ({
  value,
  onChange,
  placeholder,
  ...rest
}) => (
  <Input
    type={'email'}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    {...rest}
  />
)

export const PasswordInput: React.FC<iProps> = ({
  value,
  onChange,
  placeholder,
  ...rest
}) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup>
      <Input
        type={show ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      <InputRightElement>
        <Button onClick={handleClick}>{show ? '隠す' : '見る'}</Button>
      </InputRightElement>
    </InputGroup>
  )
}
