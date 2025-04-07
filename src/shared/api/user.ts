"use server"
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { profilePassword } from '../types/schemas'
import { UserProfileDTO } from '../types/user'
import { hashPassword } from './auth'
import prisma from './prismaInstance'
import { verifySession } from './session'

export async function getProfileData(): Promise<UserProfileDTO> {
	const {userId} = await verifySession();
	if(!userId) redirect('/login')


	const userData = await prisma.user.findFirst({where: {
		id: userId
	}})

	if(!userData)	redirect('/login')

	return {
		name: userData.name,
		surname: userData.surname,
		email: userData.email,
		phone: userData.phone
	}
}

export async function changePassword(unsafeData: z.infer<typeof profilePassword>){
		const { success, data } = profilePassword.safeParse(unsafeData)
		if (!success) return "Unable to change password"
		
		const {isAuth,userId} = await verifySession();
		if(!isAuth || !userId) redirect('/login')

		
		const existingUser = await prisma.user.findFirst({where: {
			id: userId
		}})
		if(!existingUser) redirect('/login')
			
		try {
		const hashedPassword =  hashPassword(data.password)
		const savedUser = await prisma.user.update({
				where: {
					email: existingUser.email,
				},
				data: {
					password: await hashedPassword,
				},
			});
		} catch {
			return "Unable to update password"
		}
}