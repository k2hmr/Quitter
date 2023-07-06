import { useContext } from 'react'
import { Div } from '../layout/atom/Div'
import { Header } from '../layout/atom/Header'
import { UserContext } from '@/store/userContext'
import { AppFlex } from '../layout/atom/Flex'

export const MyPage = () => {
  const { user } = useContext(UserContext)
  return (
    <Div>
      <Header>マイページ</Header>
      {user ? (
        <AppFlex flexDirection={'column'}>
          <Div>名前：{user.name}</Div>
          <Div>メールアドレス：{user.email}</Div>
          <Div>作成日：{new Date(user.createdAt).toLocaleString()}</Div>
        </AppFlex>
      ) : (
        <Div>ログインしてください</Div>
      )}
    </Div>
  )
}
