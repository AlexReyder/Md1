import styles from '@/styles/product/index.module.scss'
import ProductInfoAccordion from './ProductInfoAccordion'

const ProductDescription = ({description}:{description: string}) => {

	return(
		<ProductInfoAccordion
		title='Описание'
	>
		<p className={styles.product__top__description__text}>
			{description}
		</p>
	</ProductInfoAccordion>
	)
}
export default ProductDescription