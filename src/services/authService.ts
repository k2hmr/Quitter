import { auth } from '@/config/authFirebase'
import { axiosClient } from '@/config/axiosClient'
import { FirebaseError } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    await axiosClient.post('/register', {
      name,
      email,
      password,
    })
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.log(e)
    }
  }
}

export const logInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    await axiosClient.post('/login', {
      email,
      password,
    })
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.log(e)
    }
  }
}

export const logout = () => {
  signOut(auth)
}
