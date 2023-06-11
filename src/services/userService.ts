import { axiosClient } from '@/config/axiosClient'

export const sendToken = async () => {
  try {
    const res = await axiosClient.get('/')
    console.log(await res.data)
  } catch (e) {
    console.log(e)
  }
}
