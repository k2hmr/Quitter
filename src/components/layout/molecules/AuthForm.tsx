import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'
import { useState } from 'react'

type props = {
  title: string
  authFunc: (email: string, password: string) => void
}

const AuthForm: React.FC<props> = ({ title, authFunc }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Flex justify={'center'} align={'center'} flexDirection={'column'}>
      <Heading>{title}</Heading>
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
      </Box>
      <Button onClick={() => authFunc(email, password)}>送信する</Button>
    </Flex>
  )
}

export default AuthForm
