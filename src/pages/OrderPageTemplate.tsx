"use client"
import OrderCartItem from '@/entities/Order/OrderCartItem'
import OrderDelivery from '@/entities/Order/OrderDelivery'
import OrderDetailsForm from '@/entities/Order/OrderDetailsForm'
import OrderPayment from '@/entities/Order/OrderPayment'
import OrderTitle from '@/entities/Order/OrderTitle'
import OrderInfoBlock from '@/entities/OrderInfoBlock/OrderInfoBlock'
import PromotionalCode from '@/features/PromotionalCode/PromotionalCode'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import { CartItems } from '@/shared/types/cart'
import { UserProfileDTO } from '@/shared/types/user'
import { Section } from '@/shared/ui'
import styles from '@/styles/order/index.module.scss'
import { Header } from '@/widgets'
import s from './Order.module.scss'

interface Props{
	cartData: CartItems
	profileData: UserProfileDTO 
}

const CartPageTemplate = ({cartData, profileData}: Props) => {
	const isMedia1220 = useMediaQuery(1220)
	return(
		<>
		<Header/>
		<main>
		<Section className={s.Order}>
        <div className='container'>
          <h1 className={s.Title}>
					Оформление заказа
          </h1>
          <div className={styles.order__inner}>
            <div className={styles.order__inner__left}>
              <ul className={`list-reset ${styles.order__list}`}>
                <li className={styles.order__list__item}>
                  <OrderTitle
                    orderNumber='1'
                    text='Заказ'
                  />
                  {isMedia1220 ? (
                    <ul
                      className={`list-reset ${styles.order__list__item__list}`}
                    >
                      {cartData.map((item, i: number) => (
                        <OrderCartItem
                          key={item.productId + item.color +item.size}
                          item={item}
                          position={i + 1}
                        />
                      ))}
                    </ul>
                  ) : (
                    <table className={styles.order__list__item__table}>
                      <thead>
                        <tr>
                          <th>Наименование</th>
                          <th>Размер</th>
                          <th>Цвет</th>
                          <th>Количество</th>
                          <th>Сумма</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartData.map((item, i) => (
                          <OrderCartItem
													key={item.productId + item.color +item.size}
                          item={item}
                          position={i + 1}
                          />
                        ))}
                      </tbody>
                    </table>
                  )}
                </li>
                <li className={`${styles.order__list__item} order-block`}>
								<OrderTitle
                    orderNumber='2'
                    text='Оплата'
                  />
									 <OrderPayment />
                </li>
                <li className={styles.order__list__item}>
                  <OrderTitle
                    orderNumber='3'
                    text='Доставка'
                  />
                  <OrderDelivery />
                </li>
                <li className={`${styles.order__list__item} details-block`}>
                  <OrderTitle
                    orderNumber='4'
                    text='Данные получателя'
                  />
                  <div className={styles.order__list__item__details}>
                    <p className={styles.order__list__item__details__title}>
										Ввведите данные получателя заказа
                    </p>
                    <OrderDetailsForm profileData ={profileData}/>
                  </div>
                </li>
								<li className={styles.order__list__item}>
                  <OrderTitle
                    orderNumber='5'
                    text='Промокод'
                  />
                  <PromotionalCode />
                </li>
              </ul>
            </div>
            <div className={styles.order__inner__right}>
              <div className={styles.order__inner__right__order}>
                <OrderInfoBlock cartData={cartData} isOrderPage={true} />
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* <AnimatePresence>
        {mapModal && (
          <motion.div className={styles.map_modal} {...basePropsForMotion}>
            <MapModal />
          </motion.div>
        )}
      </AnimatePresence> */}
		</main>
		</>
	)
}
export default CartPageTemplate