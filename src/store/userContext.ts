import { User } from '@/model/User'
import { createContext } from 'react'

export type UserContextType = {
  user: User | null
  setUser: (user: User | null) => void
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
})
