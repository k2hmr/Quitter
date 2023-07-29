import { useTheme } from '@/hooks/useTheme'
import { platforms } from '@/model/platform'
import { priorities } from '@/model/priority'
import { UserContext } from '@/store/userContext'
import { useContext, useState } from 'react'
import { AppButton } from '../layout/atom/Button'
import { Div } from '../layout/atom/Div'
import { AppFlex } from '../layout/atom/Flex'
import { Header } from '../layout/atom/Header'
import { AppInput } from '../layout/atom/Input'
import { AppLink } from '../layout/atom/Link'
import { SelectOptions } from '../layout/atom/SelectOptions'
import colors from '../layout/styles/colors'

const NewThemePage: React.FC<{}> = () => {
  const { user } = useContext(UserContext)
  const { createTheme } = useTheme()
  const [theme, setTheme] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [platform, setPlatform] = useState('1')
  const [priority, setPriority] = useState('2')
  const categoryTestId = '5142499f-194b-4fe1-bcde-eb3d9f86a098'

  return (
    <AppFlex flexDirection={'column'} bg={colors.primary[50]} h={'100vh'}>
      <AppLink to={'/themes'}>戻る</AppLink>
      <AppFlex gridGap={2} flexDirection={'column'} pos="center">
        <Div p={2}>
          <Header>新しいテーマ</Header>
          <Div>テーマを設定</Div>
          <AppInput
            type="text"
            placeholder="例：noteに日記を書く…"
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
          />
          <Div>プラットフォームを設定</Div>
          <SelectOptions
            name="platform"
            options={platforms}
            setValue={setPlatform}
          />
          <Div>カテゴリを設定</Div>
          <SelectOptions
            name="category"
            options={[
              {
                value: categoryTestId,
                label: 'カテゴリー１',
              },
              {
                value: categoryTestId,
                label: 'カテゴリー２',
              },
              {
                value: categoryTestId,
                label: 'カテゴリー３',
              },
            ]}
            setValue={setCategoryId}
          />
          <Div>優先度を設定</Div>
          <SelectOptions
            name="priority"
            options={priorities}
            setValue={setPriority}
          />
        </Div>
        <AppButton
          onClick={() =>
            user &&
            createTheme(
              theme,
              categoryId,
              Number(priority),
              Number(platform),
              new Date(),
              user.id,
            )
          }
        >
          登録する
        </AppButton>
      </AppFlex>
    </AppFlex>
  )
}

export default NewThemePage
