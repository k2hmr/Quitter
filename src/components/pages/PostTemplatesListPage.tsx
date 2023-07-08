import { formatDistance } from 'date-fns'
import { ja } from 'date-fns/locale'
import { AppButton } from '../layout/atom/Button'
import { Div } from '../layout/atom/Div'
import { AppFlex } from '../layout/atom/Flex'
import { Header } from '../layout/atom/Header'
import colors from '../layout/styles/colors'

const PostTemplatesListPage = () => {
  const sampleData = [
    {
      theme: 'テーマ1',
      category: 'カテゴリー１',
      priority: '中',
      createdAt: new Date('2023-07-04T02:34:45.563Z'),
    },
    {
      theme: 'テーマ2',
      category: 'カテゴリー２',
      priority: '高',
      createdAt: new Date('2023-07-07T02:34:45.563Z'),
    },
    {
      theme: 'テーマ3',
      category: 'カテゴリー３',
      priority: '低',
      createdAt: new Date('2023-07-08T02:34:45.563Z'),
    },
  ]

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

  return (
    <AppFlex flexDirection={'column'}>
      <AppButton>新しいテーマを作成する</AppButton>
      <Div>取り組んでいるテーマ</Div>
      <AppFlex gridGap={2} flexDirection={'column'}>
        {sampleData.map((data, i) => (
          <Div bg={colors.primary[100]} p={2} key={i}>
            <Header>{data.theme}</Header>
            <Div>{data.category}</Div>
            <Div>{data.priority}</Div>
            <Div>作成日：{toTimeAgo(data.createdAt)}</Div>
          </Div>
        ))}
      </AppFlex>
    </AppFlex>
  )
}

export default PostTemplatesListPage
