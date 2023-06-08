import { logInWithEmailAndPassword, logout } from '@/services/authService'
import { useNavigate } from 'react-router'

export const useFirebaseAuth = () => {
  const navigate = useNavigate()
  const signIn = async (email: string, password: string) => {
    await logInWithEmailAndPassword(email, password).then(() =>
      navigate('/test'),
    )
  }

  const signOut = () => {
    logout()
    navigate('/')
  }
  return { signIn, signOut }
}
