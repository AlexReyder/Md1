'use client'
import api from '@/shared/api/apiInstance'
import { IAddProductToCartFx } from '@/shared/types/cart'
import {
  IAddProductsFromLSToFavoriteFx,
  IDeleteFavoriteItemsFx,
  IFavoriteItem,
} from '@/shared/types/favorites'
import { handleJWTError } from '@/shared/utils/errors'
import { createDomain, createEffect } from 'effector'
import toast from 'react-hot-toast'

export const favorites = createDomain()

export const addProductToFavorites =
  favorites.createEvent<Omit<IAddProductToCartFx, 'count'>>()
export const loadFavoriteItems = favorites.createEvent<{ jwt: string }>()
export const setFavoritesFromLS = favorites.createEvent<IFavoriteItem[]>()
export const setIsAddToFavorites = favorites.createEvent<boolean>()
export const addProductsFromLSToFavorites =
  favorites.createEvent<IAddProductsFromLSToFavoriteFx>()
export const setShouldShowEmptyFavorites = favorites.createEvent<boolean>()
export const deleteProductFromFavorites =
  favorites.createEvent<IDeleteFavoriteItemsFx>()

export const getFavoriteItemsFx = createEffect(
  async ({ jwt }: { jwt: string }) => {
    try {
      const { data } = await api.get('/api/favorites/all', {
        headers: { Authorization: `Bearer ${jwt}` },
      })

      if (data?.error) {
        const newData: IFavoriteItem[] = await handleJWTError(data.error.name, {
          repeatRequestMethodName: 'getFavoriteItemsFx',
        })
        return newData
      }

      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)

export const addProductToFavoriteFx = createEffect(
  async ({
    jwt,
    setSpinner,
    ...dataFields
  }: Omit<IAddProductToCartFx, 'count'>) => {
    try {
      setSpinner(true)
      const { data } = await api.post('/api/favorites/add', dataFields, {
        headers: { Authorization: `Bearer ${jwt}` },
      })

      if (data?.error) {
        const newData: { newFavoriteItem: IFavoriteItem } =
          await handleJWTError(data.error.name, {
            repeatRequestMethodName: 'addProductToFavoriteFx',
            payload: { ...dataFields, setSpinner },
          })
        return newData
      }

      toast.success('Добавлено в избранное!')
      return data
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setSpinner(false)
    }
  }
)

export const addProductsFromLSToFavoritesFx = createEffect(
  async ({ jwt, favoriteItems }: IAddProductsFromLSToFavoriteFx) => {
    try {
      const { data } = await api.post(
        '/api/favorites/add-many',
        { items: favoriteItems },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      )

      if (data?.error) {
        const newData: { cartItems: IFavoriteItem[] } = await handleJWTError(
          data.error.name,
          {
            repeatRequestMethodName: 'addProductsFromLSToFavoritesFx',
            payload: { items: favoriteItems },
          }
        )
        return newData
      }

      loadFavoriteItems({ jwt })
      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)

export const deleteFavoriteItemFx = createEffect(
  async ({ jwt, id, setSpinner }: IDeleteFavoriteItemsFx) => {
    try {
      setSpinner(true)
      const { data } = await api.delete(`/api/favorites/delete?id=${id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })

      if (data?.error) {
        const newData: { id: string } = await handleJWTError(data.error.name, {
          repeatRequestMethodName: 'deleteFavoriteItemFx',
          payload: { id, setSpinner },
        })
        return newData
      }

      toast.success('Удалено из избранных!')
      return data
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setSpinner(false)
    }
  }
)
