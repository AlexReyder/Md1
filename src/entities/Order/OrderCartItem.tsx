'use client'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import { CartItem } from '@/shared/types/cart'
import { formatPrice } from '@/shared/utils/common'
import styles from '@/styles/order/index.module.scss'
import Image from 'next/image'
import { translate } from '../Product/ProductColorsItem'

interface Props{
	item: CartItem,
	position: number
}

const OrderCartItem = ({ item, position }: Props) => {
  const isMedia1220 = useMediaQuery(1220)
	const colorTranslated = translate(item.color) as string

  return (
    <>
      {isMedia1220 ? (
        <li className={styles.order__list__item__list__item}>
          <span className={styles.order__list__item__list__item__pos}>
            {position}.
          </span>
          <div className={styles.order__list__item__list__item__img}>
            <Image src={item.image} alt={item.name} width={156} height={156} />
          </div>
          <div className={styles.order__list__item__list__item__inner}>
            <span className={styles.order__list__item__list__item__name}>
              {item.name}
            </span>
            <span className={styles.order__list__item__list__item__info}>
              <span>Цвет: </span>
              {colorTranslated}
            </span>
            {item.size && (
              <span className={styles.order__list__item__list__item__info}>
                <span>Размер: </span>
                {item.size.toUpperCase()}
              </span>
            )}
            <span className={styles.order__list__item__list__item__info}>
              <span>Количество: </span>
              {item.quantity} шт.
            </span>
            <span className={styles.order__list__item__list__item__info}>
              <span>Сумма: </span>
              {formatPrice(+item.price * +item.quantity)} ₽
            </span>
          </div>
        </li>
      ) : (
        <tr>
          <td className={styles.order__list__item__table__name}>
            <span>{position}.</span>
            <Image src={'/' + item.image} alt={item.name} width={109} height={109} />
            <span>{item.name}</span>
          </td>
          <td className={styles.order__list__item__table__block}>
            <span>{item.size.toUpperCase()}</span>
          </td>
          <td className={styles.order__list__item__table__block}>
            <span>
              {/* {
                (translations[lang].catalog as { [index: string]: string })[
                  item.color
                ]
              } */}
            </span>
          </td>
          <td className={styles.order__list__item__table__block}>
            <span>{item.quantity} шт.</span>
          </td>
          <td className={styles.order__list__item__table__block}>
            <span>{formatPrice(+item.price * +item.quantity)} ₽</span>
          </td>
        </tr>
      )}
    </>
  )
}

export default OrderCartItem