import { priorities } from '@/model/priority'
import { fetchThemes } from '@/services/themeService'
import { UserContext } from '@/store/userContext'
import { useQuery } from '@tanstack/react-query'
import { formatDistance } from 'date-fns'
import { ja } from 'date-fns/locale'
import { useContext } from 'react'
import { Div } from '../layout/atom/Div'
import { AppFlex } from '../layout/atom/Flex'
import { Header } from '../layout/atom/Header'
import { AppLink } from '../layout/atom/Link'
import colors from '../layout/styles/colors'

const ActiveThemesPage = () => {
  const { user } = useContext(UserContext)
  const { data: themes, status } = useQuery(
    ['themes'],
    async () => user && (await fetchThemes(user.id)),
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
    <AppFlex flexDirection={'column'} bg={colors.secondary[50]}>
      <AppLink to={'/new-theme'}>新しいテーマを作成する</AppLink>
      <Div>取り組んでいるテーマ</Div>
      <AppFlex gridGap={4} flexDirection={'column'}>
        {themes ? (
          themes.map((theme, i) => (
            <Div bg={colors.primary[100]} p={2} key={i}>
              <Header>{theme.theme}</Header>
              {/* TODO: カテゴリを表示 */}
              <Div>カテゴリ</Div>
              <Div>{priorities[theme.priority - 1].label}</Div>
              <Div>作成日：{toTimeAgo(theme.createdAt)}</Div>
            </Div>
          ))
        ) : (
          <Div>取り組み中のテーマがありません。</Div>
        )}
      </AppFlex>
    </AppFlex>
  )
}

export default ActiveThemesPage
