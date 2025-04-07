"use server"

import { profilePassword, signInSchema, signUpSchema } from "@/shared/types/schemas"
import { compareSync, genSaltSync, hash } from 'bcrypt'
import { redirect } from "next/navigation"
import { v4 as uuid } from 'uuid'
import { z } from "zod"
import { mailConfirmSignUp } from './mail'
import prisma from './prismaInstance'
import { createSession, deleteSession } from './session'



export async function signIn(unsafeData: z.infer<typeof signInSchema>) {
  const { success, data } = signInSchema.safeParse(unsafeData)

  if (!success) return "Unable to log you in"

  const user = await prisma.user.findFirst({where: {
    email: data.email
  }})

  if (!user || !compareSync(data.password, user.password)) {
  return "Unable to log you in";
  }


  await createSession(user.id, user.name)
  // const users = await prisma.user.findMany()
  // console.log(users)
  redirect("/profile")
}

export async function signUp(unsafeData: z.infer<typeof signUpSchema>) {
  const { success, data } = signUpSchema.safeParse(unsafeData)
  if (!success) return "Unable to create account"

	const existingUser = await prisma.user.findFirst({where: {
    email: data.email
  }})
  if (existingUser !== null) return "Пользователь с такой электронной почтой уже существует."

  try {
    const hashedPassword = await hashPassword(data.password)
    const savedUser = await prisma.user.create({
      data: {
        name: data.name,
        surname: data.surname,
        email:data.email,
        phone: data.phone,
        password: hashedPassword,
      },
    });
    console.log(savedUser)
    mailConfirmSignUp(data.email, savedUser.emailToken)
  } catch {
    return "Unable to create account"
  }

  // redirect("/profile/general")
}

export async function logOut() {
  await deleteSession()
  redirect("/")
}

export async function confirmEmail(email: string, token: string){
	const existingUser = await prisma.user.findFirst({where: {
    email
  }})

  if (existingUser === null) return {
    success: null, 
    error: 'Пользователь с такой электронной почтой не найден.'
  }

  if(existingUser.emailToken !== token) return {
    success: null, 
    error: 'Неправильный верификационный ключ.'
  }

  try {
      await prisma.user.update({
        where:{
          email
        },
        data:{
        emailVerified: true,
        }
    })
    return {
      success: true, 
      error: null
    }

  } catch(error){
       return {
      success: null, 
      error: error as string
    }
  }
}

export async function resetPassword(email: string, token: string, unsafeData: z.infer<typeof profilePassword>){
  const { success, data } = profilePassword.safeParse(unsafeData)
  if (!success) return {
    success: null, 
    error: 'Неправильно введенные данные.'
  }

	const existingUser = await prisma.user.findFirst({where: {
    email
  }})

  if (existingUser === null) return {
    success: null, 
    error: 'Пользователь с такой электронной почтой не найден.'
  }

  if(existingUser.recoveryToken !== token) return {
    success: null, 
    error: 'Неправильный верификационный ключ.'
  }

  try {
      const hashedPassword = await hashPassword(data.password)
      await prisma.user.update({
        where:{
          email
        },
        data:{
        password: hashedPassword,
        recoveryToken: uuid(),
        }
    })

    return {
      success: true, 
      error: null
    }

  } catch(error){
       return {
      success: null, 
      error: error as string
    }
  }
}

export async function hashPassword(password: string) {
  return await hash(password, genSaltSync(10));
}

