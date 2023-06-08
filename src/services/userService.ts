import { User } from '@firebase/auth'
import axios from 'axios'

export const sendToken = async (user: User) => {
  try {
    const header = await createHeader(user)
    const res = await axios.get('http://localhost:3000', header)
    console.log(await res.data)
  } catch (e) {
    console.log(e)
  }
}

const createHeader = async (user: User) => {
  const token = await user.getIdToken()

  const payloadHeader = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  return payloadHeader
}
