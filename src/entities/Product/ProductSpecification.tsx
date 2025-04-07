import styles from '@/styles/product/index.module.scss'
import ProductInfoAccordion from './ProductInfoAccordion'

const ProductSpecification = ({specifications}:{specifications: string}) => {

	return(
		<ProductInfoAccordion
		title='Характеристики'
	>
		<ul
			className={`list-reset ${styles.product__top__description__characteristics}`}
		>
				<li
					className={styles.product__top__description__text}
				>
					{specifications}
				</li>
		</ul>
	</ProductInfoAccordion>
	)
}
export default ProductSpecification