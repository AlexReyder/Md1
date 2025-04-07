import { CatalogFilters } from '@/entities/CatalogFilters/CatalogFilters'
import { CatalogPagination } from '@/entities/CatalogPagination/CatalogPagination'
import { getAllProducts } from '@/shared/api/catalog'
import { Header } from '@/widgets'
import { Products } from '@/widgets/Products/Products'
import { redirect } from 'next/navigation'
// import { Products } from '@/widgets/Products/Products'
import { Breadcrumbs } from '@/features'
import { getFiltersData } from '@/shared/api/filters'
import { HeadingWithCount, Section } from '@/shared/ui'
import { Footer } from '@/widgets/Footer/Footer'
import { Metadata } from 'next'
import s from './page.module.scss'

export const metadata: Metadata = {
	title: 'Каталог',
}

export default async  function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
	const offset = (await searchParams).offset as string | undefined;
	const selected = offset ? Number.parseInt(offset) : redirect('?offset=1'); 
	const products = await getAllProducts(selected);
	const {success, error} = await getFiltersData();

	return (
		<>
			<Header/>
		<main>
			<Section>
				<Breadcrumbs/>
				<HeadingWithCount count={products.success.length} title='Каталог'/>
			</Section>
			<Section className={s.Container}>
			<CatalogFilters data={success} error={error}/>
			<Products products={products.success.products}/>
			</Section>
			<CatalogPagination productsCount={30} queryPage={selected} />
		</main>
			<Footer/>
		</>

				
	);
}


