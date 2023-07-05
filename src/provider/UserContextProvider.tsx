import { User } from '@/model/User'
import { UserContext } from '@/store/userContext'
import { useState, ReactNode, FC } from 'react'

type props = {
  children: ReactNode
}

export const UserContextProvider: FC<props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
