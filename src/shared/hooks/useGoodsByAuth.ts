// import { $isAuth } from '@/shared/context/auth/state'
// import { UseGoodsByAuth } from '@/shared/types/common'
// import { useUnit } from 'effector-react'

// export const useGoodsByAuth = <T>(
//   storeAsync: UseGoodsByAuth<T>,
//   storeSync: UseGoodsByAuth<T>
// ) => {
//   const goods = useUnit(storeAsync)
//   const isAuth = useUnit($isAuth)
//   const goodsFromLS = useUnit(storeSync)
//   const currentFavoritesByAuth = isAuth ? goods : goodsFromLS

//   return currentFavoritesByAuth
// }
