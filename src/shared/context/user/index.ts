'use client'
import api from '@/shared/api/apiInstance'
import { ILoginCheckFx, IUserGeolocation } from '@/shared/types/user'
import { handleJWTError } from '@/shared/utils/errors'
import { createDomain, createEffect } from 'effector'
import toast from 'react-hot-toast'
import { setIsAuth } from '../auth'
// import { IGetGeolocationFx } from '@/shared/types/common'

export const user = createDomain()

export const loginCheck = user.createEvent<ILoginCheckFx>()
export const setUserGeolocation = user.createEvent<IUserGeolocation>()
export const updateUsername = user.createEvent<string>()
export const updateUserImage = user.createEvent<string>()
export const updateUserEmail = user.createEvent<string>()

export const loginCheckFx = createEffect(async ({ jwt }: ILoginCheckFx) => {
  try {
    const { data } = await api.get('/api/users/login-check', {
      headers: { Authorization: `Bearer ${jwt}` },
    })

    if (data?.error) {
      handleJWTError(data.error.name, {
        repeatRequestMethodName: 'loginCheckFx',
      })
      return
    }

    setIsAuth(true)
    return data.user
  } catch (error) {
    toast.error((error as Error).message)
  }
})

// export const getGeolocationFx = createEffect(
//   async ({ lon, lat }: IGetGeolocationFx) => {
//     try {
//       const data = await api.get(
//         // eslint-disable-next-line max-len
//         `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`
//       )

//       return data
//     } catch (error) {
//       toast.error((error as Error).message)
//     }
//   }
// )
