import { useState } from 'react'
import { AppButton } from '../atom/Button'
import { AppInput, AppInputGroup, AppInputRightElement } from '../atom/Input'

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
  <AppInput
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
  <AppInput
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
    <AppInputGroup>
      <AppInput
        type={show ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      <AppInputRightElement>
        <AppButton onClick={handleClick}>{show ? '隠す' : '見る'}</AppButton>
      </AppInputRightElement>
    </AppInputGroup>
  )
}
