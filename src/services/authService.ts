import { auth } from '@/config/authFirebase'
import { axiosClient } from '@/config/axiosClient'
import { User } from '@/model/User'
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
    const res = await axiosClient.post<{
      redirect: string
      data: { message: string; user: User } | null
    }>('/register', {
      name,
      email,
      password,
    })
    return {
      redirect: '/themes',
      data: res.data,
    }
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.log(e)
    }
    return { redirect: '/signup', data: null }
  }
}

export const logInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    const res = await axiosClient.post<{
      redirect: string
      data: { message: string; user: User } | null
    }>('/login', {
      email,
      password,
    })

    return {
      redirect: '/themes',
      data: res.data,
    }
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.log(e)
    }
    return { redirect: '/login', data: null }
  }
}

export const logout = () => {
  signOut(auth)
}
