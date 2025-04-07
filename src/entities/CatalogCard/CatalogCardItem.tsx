
import { addProductToCart } from '@/shared/api/cart'
import ProductAvailable from '@/widgets/Products/ProductAvailable'
import Image from 'next/image'
import Link from 'next/link'
import s from './CatalogCardItem.module.scss'



export const CatalogCardItem = ({ item }: any) => {
  const {id, name, price, images, colors, sizes} = item;
  async function onSubmit() {
          const data = {
            productId: id,
            name,
            price: `${price}`,
            color: colors[0],
            size: sizes[0],
            image:images[colors[0]][0],
            quantity: '1'
          }
          console.log(data)
          const error = await addProductToCart(data)
          console.log(error)
          // setError(error)
        }

  return (
        <li className={s.Item}>
          {item.isNew || item.isBestseller  ? (
            <span
              className={`${s.Label} ${
                item.isNew
                  ? s.New
                  : s.Bestseller
              }`}
            >
              { item.isNew
                ? 'Новинка'
                : 'Хит'}
            </span>
          ) : (
            <></>
          )} 
          <div className={s.Actions}>
            {/* <ProductItemActionBtn
              spinner={true}
              text='Добавить в избранное'
              iconClass={'actions__btn_spinner actions__btn_favorite_checked'}
              callback={() => {}}
            />
              <ProductItemActionBtn
                text={'Быстрый просмотр'}
                iconClass='actions__btn_quick_view'
                callback={() => {}}
              /> */}
          </div>
          <Link
            href={`/catalog/${item.categorySlug}/${item.id}?color=${item.colors[0]}`}
            className={s.Img}
          >
            <Image src={`/${item.images.black[0]}`} alt={''} fill />
          </Link>
          <div className={s.Inner}>
            <h3 className={s.Title}>
              <Link href={`/catalog/${item.categorySlug}/${item.id}?color=${item.colors[0]}`}>
                {'Товар ' + item.bandName}
              </Link>
            </h3>
            <ProductAvailable
              vendorCode={item.articleNumber}
              isInStock = {item.isInStock}
            />
            <span className={s.Price}>
              {item.price} ₽
              {/* {formatPrice(+item.price)} ₽ */}
            </span>
          </div>
          {/* {productsWithoutSizes.includes(item.type) ? (
            <button
              onClick={addToCart}
              className={`btn-reset ${styles.list__item__cart} ${
                isProductInCart ? styles.list__item__cart_added : ''
              }`}
              disabled={addToCartSpinner}
              style={addToCartSpinner ? { minWidth: 125, height: 48 } : {}}
            >
              {addToCartSpinner ? (
                <FontAwesomeIcon icon={faSpinner} spin color='#fff' />
              ) : isProductInCart ? (
                translations[lang].product.in_cart
              ) : (
                translations[lang].product.to_cart
              )}
            </button>
          ) : ( */}
            <button
              className={`btn-reset ${s.Cart}`}
              onClick={onSubmit}
            >
							В корзину
            </button>
          {/* )} */}
        </li>
  )
}

