
import { formatPrice } from '@/shared/utils/common'
import styles from '@/styles/product/index.module.scss'
import ProductAvailable from '@/widgets/Products/ProductAvailable'
import { Suspense } from 'react'
import ProductAttentionLabel from './ProductAttentionLabel'
import ProductDescription from './ProductDescription'
import ProductForm from './ProductForm'
import ProductImages from './ProductImages'
import ProductSpecification from './ProductSpecification'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Product = ({product}: any) => {
  const {id, isBestseller, isNew,name, description, specifications, colors, sizes, details, images, price, material} = product

	return(
		<main>
			 <div className={styles.product__top}>
       <Suspense fallback={<Skeleton/>}>
        <ProductImages images={images}/>
        </Suspense>
        {/* <ProductImages /> */}
        <div className={styles.product__top__right}>
        <ProductAttentionLabel isBestseller={isBestseller} isNew={isNew}/>
          <h1 className={styles.product__top__title}>{name}</h1>
          <div className={styles.product__top__price}>
            <h3 className={styles.product__top__price__title}>
              {formatPrice(price)} ₽
              {/* {price} ₽ */}
            </h3>
            <div className={styles.product__top__price__inner}>
              {/* <div className={styles.product__top__price__favorite}>
                <ProductItemActionBtn
                  spinner={true}
                  text='Добавить в избранное'
                  // iconClass={`${
                  //   addToFavoritesSpinner
                  //     ? 'actions__btn_spinner'
                  //     : isProductInFavorites
                  //       ? 'actions__btn_favorite_checked'
                  //       : 'actions__btn_favorite'
                  // }`}
                  iconClass='actions__btn_favorite_checked'
                  withTooltip={false}
                  // callback={handleAddProductToFavorites}
                />
              </div>
              <button
                className={`btn-reset ${styles.product__top__price__share}`}
                // onClick={handleProductShare}
              /> */}
            </div>
          </div>
          <div className={styles.product__top__available}>
            <ProductAvailable
              vendorCode={product.articleNumber}
              isInStock={product.isInStock}
            />
          </div>
          <ProductForm productId={id} name={name} colors={colors} sizes={sizes} details={details} images={images} price={price} material={material}/>
          <div className={styles.product__top__bottom}>
            <div className={styles.product__top__inner}>



              
            </div>
          </div>
          <div className={styles.product__top__description}>
            <ProductDescription description={description}/>
            <ProductSpecification specifications = {specifications}/>
          </div>
        </div>
      </div>
		</main>
	)	
}