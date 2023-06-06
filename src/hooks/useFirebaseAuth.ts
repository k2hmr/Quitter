import { signInWithEmailAndPassword, signOut } from '@firebase/auth'
import { FirebaseError } from '@firebase/util'
import { useNavigate } from 'react-router'
import { auth } from './authFirebase'

export const useFirebaseAuth = () => {
  const navigate = useNavigate()

  const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/test')
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e)
      }
    }
  }

  const logout = () => {
    signOut(auth)
  }

  return { logInWithEmailAndPassword, logout }
}
