import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { Div } from '../layout/atom/Div'
import { Header } from '../layout/atom/Header'

export const MyPage = () => {
  const { user } = useFirebaseAuth()
  console.log(user)

  return (
    <Div>
      <Header>マイページ</Header>
      <Div>名前：{user?.name}</Div>
    </Div>
  )
}
