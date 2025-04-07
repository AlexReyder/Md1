import CartList from '@/entities/CartList/CartList'
import OrderInfoBlock from '@/entities/OrderInfoBlock/OrderInfoBlock'
import { CartItems } from '@/shared/types/cart'
import { HeadingWithCount, Section } from '@/shared/ui'
import s from './Cart.module.scss'
interface Props{
	cartLength: number,
	cartData: CartItems
}


const CartPageTemplate = ({cartLength, cartData}: Props) => {
	console.log(cartData)
	console.log(typeof cartData)
	console.log(Array.isArray(cartData))
	return(
		<Section>
			<HeadingWithCount
				count={cartLength}
				title='Корзина'
			/>
			<div className={s.Cart}>
				<div className={s.CartInner}>
					<div className={s.CartLeft}>
						<CartList cartItems={cartData}/>
					</div>
					<div className={s.CartRight}>
						<div className={s.CartOrder}>
							<OrderInfoBlock cartData={cartData}  isOrderPage={false}/>
						</div>
					</div>
				</div>
						
			</div>
		</Section>
	)
}
export default CartPageTemplate;

