"use server"
import prisma from './prismaInstance'



export async function getAllProducts(selected: number = 1){
	const products = await prisma.shoppingCard.findMany({skip:(selected - 1) * 12, take: 12 });
	const productsCount = await prisma.shoppingCard.count();
	return {
		success: {products,
			length: productsCount
		},
		error: null
	}
}

export async function getProductsByCategory(slug: string, selected: number){
	const products = await prisma.shoppingCard.findMany({where:{categorySlug: slug},skip:(selected - 1) * 12, take: 12});
	const categoryName = await prisma.category.findFirst({where: {slug}, select:{name: true}})
	return {
		success: {products,
			length: products.length,
			categoryName
		},
		error: null
	}
}

export async function getOneProduct(productId: string,){
	const product = await prisma.shoppingCard.findFirst({where:{id:productId}})

	if(!product) return {
		success: null,
		error: 'Товар не найден'
	}

	return {
		success: product,
		error: null
	}
}