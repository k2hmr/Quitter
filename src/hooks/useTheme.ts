import { addTheme } from '@/services/themeService'
import { useNavigate } from 'react-router'

export const useTheme = () => {
  const navigate = useNavigate()
  const createTheme = async (
    theme: string,
    categoryId: string,
    priority: number,
    platform: number,
    createdAt: Date,
    userId: string,
  ) => {
    await addTheme(
      theme,
      categoryId,
      priority,
      platform,
      createdAt,
      userId,
    ).then((res) => {
      navigate(res.redirect)
    })
  }

  return { createTheme }
}
