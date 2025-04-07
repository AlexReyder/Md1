import OrderPageTemplate from '@/pages/OrderPageTemplate'
import { getProductsFromCart } from '@/shared/api/cart'
import { getProfileData } from '@/shared/api/user'
import { ICartGetProducts } from '@/shared/types/cart'
import { UserProfileDTO } from '@/shared/types/user'

export default async function OrderPage() {
	const cartData: ICartGetProducts = await getProductsFromCart()
	const profileData: UserProfileDTO = await getProfileData();
  return <OrderPageTemplate cartData={cartData.success} profileData={profileData} />
}