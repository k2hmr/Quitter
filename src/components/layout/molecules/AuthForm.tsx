import { AuthFuncArgs } from '@/model/authFuncArgs'
import { useState } from 'react'
import { SubmitButton } from '../atom/Buttons'
import { ColumnFlex } from '../atom/CustomFlex'
import { Div } from '../atom/Div'
import { Header } from '../atom/Header'
import { EmailInput, PasswordInput, TextInput } from '../atom/Inputs'

type props = {
  title: string
  isNewUser: boolean
  authFunc: (args: AuthFuncArgs) => Promise<void>
}

const AuthForm: React.FC<props> = ({ title, isNewUser, authFunc }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const authFuncArgs = (isNewUser: boolean): AuthFuncArgs =>
    isNewUser ? { name, email, password } : { email, password }
  const cursorSetting = (isNewUser: boolean): string =>
    (isNewUser ? name && email && password : email && password)
      ? 'pointer'
      : 'not-allowed'
  const isDisabled = (isNewUser: boolean): boolean =>
    isNewUser ? !name || !email || !password : !email || !password

  return (
    <ColumnFlex pos="center">
      <Header>{title}</Header>
      <Div>
        {isNewUser && (
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ニックネーム"
          />
        )}
        <EmailInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
        />
      </Div>
      <SubmitButton
        cursor={cursorSetting(isNewUser)}
        disabled={isDisabled(isNewUser)}
        onClick={() => authFunc(authFuncArgs(isNewUser))}
      >
        送信する
      </SubmitButton>
    </ColumnFlex>
  )
}

export default AuthForm
