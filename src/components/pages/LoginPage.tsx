import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Box, Heading } from '@chakra-ui/layout'
import { useState } from 'react'

const LoginPage: React.FC<{}> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useFirebaseAuth()

  return (
    <Box>
      <Heading>ログイン</Heading>
      <Box>
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
        <Button onClick={() => signIn(email, password)}>送信する</Button>
      </Box>
    </Box>
  )
}

export default LoginPage
