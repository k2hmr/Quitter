import { fetchThemes } from '@/services/themeService'
import { UserContext } from '@/store/userContext'
import { useQuery } from '@tanstack/react-query'
import { formatDistance } from 'date-fns'
import { ja } from 'date-fns/locale'
import { useContext } from 'react'
import { AppButton } from '../layout/atom/Button'
import { Div } from '../layout/atom/Div'
import { AppFlex } from '../layout/atom/Flex'
import { Header } from '../layout/atom/Header'
import colors from '../layout/styles/colors'

const ActiveThemesPage = () => {
  const { user } = useContext(UserContext)
  const { data: themes, status } = useQuery(
    ['themes'],
    async () => user && fetchThemes(user.id),
  )

  const toTimeAgo = (date: Date) => {
    let time = formatDistance(new Date(), date, {
      locale: ja,
    })
    if (time.indexOf('未満') !== -1) {
      return 'たった今'
    } else {
      return time + '前'
    }
  }

  if (status === 'loading') {
    return <Div>読み込み中…</Div>
  } else if (status === 'error') {
    return <Div>データの読み込みに失敗しました</Div>
  }

  return (
    <AppFlex flexDirection={'column'}>
      <AppButton>新しいテーマを作成する</AppButton>
      <Div>取り組んでいるテーマ</Div>
      <AppFlex gridGap={2} flexDirection={'column'}>
        {!themes ? (
          <Div>取り組み中のテーマがありません。</Div>
        ) : (
          themes.map((theme, i) => (
            <Div bg={colors.primary[100]} p={2} key={i}>
              <Header>{theme.theme}</Header>
              {/* TODO: カテゴリを表示 */}
              <Div>{theme.priority}</Div>
              <Div>作成日：{toTimeAgo(theme.createdAt)}</Div>
            </Div>
          ))
        )}
      </AppFlex>
    </AppFlex>
  )
}

export default ActiveThemesPage
