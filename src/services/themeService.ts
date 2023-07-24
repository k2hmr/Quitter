import { axiosClient } from '@/config/axiosClient'
import { Theme } from '@/model/Theme'

type ThemeResponse = Array<{
  _id: { idName: string; value: string }
  categoryId: { idName: string; value: string }
  theme: string
  priority: number
  platform: number
  createdAt: Date
  userId: { idName: string; value: string }
}>

export const fetchThemes = async (userId: string) => {
  try {
    const res = await axiosClient.get<{
      message: string
      themes: ThemeResponse
    }>('/themes', {
      params: {
        userId,
      },
    })
    const themes: Theme[] = res.data.themes.map((theme) => {
      return {
        id: theme._id.value,
        theme: theme.theme,
        categoryId: theme.categoryId.value,
        priority: theme.priority,
        platform: theme.platform,
        createdAt: new Date(theme.createdAt),
        userId: theme.userId.value,
      }
    })

    return themes
  } catch (error) {
    console.log(error)
  }
}
