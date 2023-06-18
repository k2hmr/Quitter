import { AuthFuncArgs } from '@/model/authFuncArgs'
import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'
import { useState } from 'react'

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
    <Flex justify={'center'} align={'center'} flexDirection={'column'}>
      <Heading>{title}</Heading>
      <Box>
        {isNewUser && (
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ニックネーム"
          />
        )}
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
        />
      </Box>
      <Button
        cursor={cursorSetting(isNewUser)}
        disabled={isDisabled(isNewUser)}
        onClick={() => authFunc(authFuncArgs(isNewUser))}
      >
        送信する
      </Button>
    </Flex>
  )
}

export default AuthForm
