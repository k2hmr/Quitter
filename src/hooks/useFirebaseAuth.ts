import { authFuncArgs } from '@/model/authFuncArgs'
import {
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
} from '@/services/authService'
import { useNavigate } from 'react-router'

export const useFirebaseAuth = () => {
  const navigate = useNavigate()
  const signUp = async ({ name, email, password }: authFuncArgs) => {
    if (!name) return
    await registerWithEmailAndPassword(name, email, password).then((redirect) =>
      navigate(redirect),
    )
  }

  const signIn = async ({ email, password }: authFuncArgs) => {
    await logInWithEmailAndPassword(email, password).then((redirect) =>
      navigate(redirect),
    )
  }

  const signOut = () => {
    logout()
    navigate('/')
  }
  return { signUp, signIn, signOut }
}
