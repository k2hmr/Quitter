import { useContext } from 'react'
import { Div } from '../layout/atom/Div'
import { Header } from '../layout/atom/Header'
import { UserContext } from '@/store/userContext'

export const MyPage = () => {
  const { user } = useContext(UserContext)
  return (
    <Div>
      <Header>マイページ</Header>
      {user ? <Div>名前：{user.name}</Div> : <Div>ログインしてください</Div>}
    </Div>
  )
}
