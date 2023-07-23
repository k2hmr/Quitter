import { auth } from '@/config/authFirebase'
import { axiosClient } from '@/config/axiosClient'
import { User } from '@/model/User'
import { FirebaseError } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

type UserResponse = {
  _id: { idName: string; value: string }
  name: string
  email: string
  password: string
  createdAt: Date
}

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    const res = await axiosClient.post<{
      redirect: string
      message: string
      user: UserResponse
    }>('/register', {
      name,
      email,
      password,
    })
    return {
      redirect: '/themes',
      data: {
        message: res.data.message,
        user: {
          id: res.data.user._id.value,
          name: res.data.user.name,
          email: res.data.user.email,
          password: res.data.user.password,
          createdAt: res.data.user.createdAt,
        } as User,
      },
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
      message: string
      user: UserResponse
    }>('/login', {
      email,
      password,
    })

    return {
      redirect: '/themes',
      data: {
        message: res.data.message,
        user: {
          id: res.data.user._id.value,
          name: res.data.user.name,
          email: res.data.user.email,
          password: res.data.user.password,
          createdAt: res.data.user.createdAt,
        } as User,
      },
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
