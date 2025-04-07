import CartPageTemplate from '@/pages/CartPageTemplate'
import { getProductsCartLength, getProductsFromCart } from '@/shared/api/cart'
import { ICartGetProducts } from '@/shared/types/cart'
import { Header } from '@/widgets'

export default async function CartPage() {
	const {success, error} = await getProductsCartLength()
	const cartData: ICartGetProducts = await getProductsFromCart()
  return (
		<>
			<Header/>
			<main>
				<CartPageTemplate cartLength = {success} cartData={cartData.success}/>
			</main>
		</>
  )
}