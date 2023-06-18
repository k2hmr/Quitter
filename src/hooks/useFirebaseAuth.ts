import { AuthFuncArgs } from '@/model/authFuncArgs'
import {
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
} from '@/services/authService'
import { useNavigate } from 'react-router'

export const useFirebaseAuth = () => {
  const navigate = useNavigate()
  const signUp = async ({ name, email, password }: AuthFuncArgs) => {
    if (!name) return
    await registerWithEmailAndPassword(name, email, password).then((redirect) =>
      navigate(redirect),
    )
  }

  const signIn = async ({ email, password }: AuthFuncArgs) => {
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
