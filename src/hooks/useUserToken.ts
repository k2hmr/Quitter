import { sendToken } from '@/services/userService'
import { useEffect } from 'react'
import useAuthState from './useAuthState'

export const useUserToken = () => {
  const { user } = useAuthState()
  useEffect(() => {
    user && sendToken(user)
  }, [user])
}
