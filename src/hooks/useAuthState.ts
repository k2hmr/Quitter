import { auth } from '@/config/authFirebase'
import { User } from '@firebase/auth'
import { useEffect, useState } from 'react'
import { useAuthState as useAuthStateOriginal } from 'react-firebase-hooks/auth'

export type AuthState = {
  isSignedIn: boolean
  isLoading: boolean
  user: User | null
  error?: Error
}

const INITIAL_AUTH_STATE: AuthState = {
  isSignedIn: false,
  isLoading: true,
  user: null,
}
const useAuthState = (): AuthState => {
  const [authState, setAuthState] = useState(INITIAL_AUTH_STATE)
  const [user, loading, error] = useAuthStateOriginal(auth)
  useEffect(() => {
    if (user) {
      setAuthState({
        isSignedIn: true,
        isLoading: loading,
        user: user,
        error,
      })
    } else {
      setAuthState({ ...INITIAL_AUTH_STATE, isLoading: loading })
    }
  }, [user, loading, error])

  return authState
}

export default useAuthState
