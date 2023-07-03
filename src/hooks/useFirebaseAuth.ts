import { User } from '@/model/User'
import { AuthFuncArgs } from '@/model/authFuncArgs'
import {
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
} from '@/services/authService'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const useFirebaseAuth = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    password: '',
    createdAt: new Date(),
  })
  const signUp = async ({ name, email, password }: AuthFuncArgs) => {
    if (!name) return
    await registerWithEmailAndPassword(name, email, password).then((redirect) =>
      navigate(redirect),
    )
  }

  const signIn = async ({ email, password }: AuthFuncArgs) => {
    await logInWithEmailAndPassword(email, password).then((res) => {
      console.log(res.data?.user)

      setUser((preData) => {
        return { ...preData, id: 'a' }
      })
      console.log(user)

      navigate(res.redirect)
    })
  }

  const signOut = () => {
    logout()
    setUser({
      id: '',
      name: '',
      email: '',
      password: '',
      createdAt: new Date(),
    })
    navigate('/')
  }
  return { user, signUp, signIn, signOut }
}
