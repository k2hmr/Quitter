import { AuthFuncArgs } from '@/model/authFuncArgs'
import {
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
} from '@/services/authService'
import { UserContext } from '@/store/userContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router'

export const useFirebaseAuth = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const signUp = async ({ name, email, password }: AuthFuncArgs) => {
    if (!name) return
    await registerWithEmailAndPassword(name, email, password).then((redirect) =>
      navigate(redirect),
    )
  }

  const signIn = async ({ email, password }: AuthFuncArgs) => {
    await logInWithEmailAndPassword(email, password).then((res) => {
      res.data && setUser(res.data.user)
      navigate(res.redirect)
    })
  }

  const signOut = () => {
    logout()
    setUser(null)
    navigate('/')
  }
  return { signUp, signIn, signOut }
}
