import { axiosClient } from '@/config/axiosClient'
import { Theme } from '@/model/Theme'

type ThemeResponse = {
  _id: { idName: string; value: string }
  categoryId: { idName: string; value: string }
  theme: string
  priority: number
  platform: number
  createdAt: Date
  userId: { idName: string; value: string }
}

type ThemesResponse = Array<ThemeResponse>

export const addTheme = async (
  theme: string,
  categoryId: string,
  priority: number,
  platform: number,
  createdAt: Date,
  userId: string,
) => {
  try {
    const res = await axiosClient.post<{
      message: string
      theme: ThemeResponse
    }>('/create-theme', {
      theme,
      categoryId,
      priority,
      platform,
      createdAt,
      userId,
    })

    return {
      redirect: '/themes',
      data: {
        message: res.data.message,
        data: {
          id: res.data.theme._id.value,
          theme: res.data.theme.theme,
          categoryId: res.data.theme.categoryId.value,
          priority: res.data.theme.priority,
          platform: res.data.theme.platform,
          createdAt: new Date(res.data.theme.createdAt),
          userId: res.data.theme.userId.value,
        } as Theme,
      },
    }
  } catch (e) {
    console.log(e)
    return {
      redirect: '/new-theme',
      data: null,
    }
  }
}

export const fetchThemes = async (userId: string) => {
  try {
    const res = await axiosClient.get<{
      message: string
      themes: ThemesResponse
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
