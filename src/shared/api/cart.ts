"use server"
import { productFormSchema } from '@/shared/types/schemas'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { CartItem, CartItems, ICartGetProducts } from '../types/cart'
import prisma from './prismaInstance'
import { verifySession } from './session'


export async function addProductToCart(unsafeData: z.infer<typeof productFormSchema>){
	const { success, data } = productFormSchema.safeParse(unsafeData)
	if (!success) return "Unable to log you in"
	
	const cookieStore = await cookies()
	const {isAuth, userId}= await verifySession()
	if(!isAuth){
		const isCartExist = cookieStore.has('cart')
		if(!isCartExist){
			cookieStore.set('cart', JSON.stringify([data]))
			return {
				success: true,
				error: null
			}
		}
		const cart = cookieStore.get('cart') as RequestCookie 
		const cartData: z.infer<typeof productFormSchema>[] = JSON.parse(cart.value)
		cartData.push(data)
		cookieStore.set('cart', JSON.stringify(cartData))
		
		return {
			success: true,
			error: null
		}
		
	}

	const getProducts = await prisma.cart.findFirst({where:{userId: userId as string}});

	if (getProducts?.products) {
		const productsStr = getProducts.products as string
		const products = JSON.parse(productsStr)
		products.push(data)
		const addData = await prisma.cart.update({
		where: {id: getProducts.id},
		data: {
			products: JSON.stringify(products)
		}
	})
		return {
		success: true,
		error: null
		}
	} else {
		await prisma.cart.create({
			data: {
				userId: userId as string,
				products: JSON.stringify([data]),
			}
		})
		return {
			success: true,
			error: null
		}
	}

	
}

export async function removeProductFromCart(data: CartItem){
	const cookieStore = await cookies()
	const {isAuth, userId}= await verifySession()
		if(!isAuth){
			const cart = cookieStore.get('cart') as RequestCookie 
			const cartData: z.infer<typeof productFormSchema>[] = JSON.parse(cart.value)
		
			const result = cartData.filter((item:CartItem) => {
				if(item.productId === data.productId && item.color === data.color && item.size === data.size){
					return false;
				}
				return true
			})		
		cookieStore.set('cart', JSON.stringify(result))
	}

	const cart = await prisma.cart.findFirst({
		where: {
			userId: userId as string,
		}
	})

	if(!cart){
		return {
			success: false,
			error: null,
		}
	}	
	const productsStr = cart.products as string 
	const products = JSON.parse(productsStr)

	const result = products.filter((item:CartItem) => {
		if(item.productId === data.productId && item.color === data.color && item.size === data.size){
			return false;
		}
		return true
	})		

	const addData = await prisma.cart.update({
		where: {id: cart.id},
		data: {
			products: JSON.stringify(result)
		}
	})
	return {
		success: true,
		error: null
	}
}

export async function updateProductFromCart(data: Partial<CartItem>, count: number){
	const cookieStore = await cookies()
	const {isAuth, userId}= await verifySession()
	if(!isAuth){
		const cart = cookieStore.get('cart') as RequestCookie 
		const cartData: z.infer<typeof productFormSchema>[] = JSON.parse(cart.value)
		cartData.forEach((item:CartItem) => {
			if(item.productId === data.productId && item.color === data.color && item.size === data.size){
				item.quantity = `${count}`;
			}
		})
		cookieStore.set('cart', JSON.stringify(cartData))
		return {
			success: true,
			error: null
		}
	}

	const cart = await prisma.cart.findFirst({
		where: {
			userId: userId as string,
		}
	})

	if(!cart){
		return {
			success: false,
			error: null,
		}
	}	
	const productsStr = cart.products as string 
	const products = JSON.parse(productsStr)
	products.forEach((item:CartItem) => {
		if(item.productId === data.productId && item.color === data.color && item.size === data.size){
			item.quantity = `${count}`;
		}
	})
		const addData = await prisma.cart.update({
			where: {id: cart.id},
			data: {
				products: JSON.stringify(products)
			}
		})
		return {
			success: true,
			error: null
		}
}

export async function getProductsFromCart(): Promise<ICartGetProducts> {
	const {isAuth, userId}= await verifySession()
	if(!isAuth){
		const cookieStore = await cookies()
		const cart = cookieStore.get('cart')
		if(!cart){
			return {
				success: [],
				error: null,
			}
		}	
		return {
			success: JSON.parse(cart.value),
			error: null,
		}
	}

	const cart = await prisma.cart.findFirst({
		where: {
			userId: userId as string,
		}
	})

	if(!cart){
		return {
			success: [],
			error: null,
		}
	}	
	const products = cart.products as string 
	return {
		success: JSON.parse(products),
		error: null,
	}
}

export async function getProductsCartLength(){
	const {isAuth, userId}= await verifySession()
	if(!isAuth){
		const cookieStore = await cookies()
		const cart = cookieStore.get('cart')
		if(!cart){
			return {
				success: 0,
				error: null,
			}
		}	
		const cartData: CartItems = JSON.parse(cart.value)
		return {
			success: cartData.length,
			error: null,
		}
	}
	
	const cart = await prisma.cart.findFirst({
		where: {
			userId: userId as string,
		}
	})

	if(!cart){
		return {
			success: 0,
			error: null,
		}
	}	
	const products = cart.products as string 
	return {
		success: JSON.parse(products).length,
		error: null,
	}
}


