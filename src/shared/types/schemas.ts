import { z } from "zod"

export const signInSchema = z.object({
  email: z.string().email("Неккоректно введен Email").nonempty("Обязательное поле"),
  password: z.string().min(8, "Минимальная длинна пароля 8 символом").max(20,"Максимальная длинна пароля 20 символов").nonempty("Обязательное поле"),
})

export const signUpSchema = z.object({
  email: z.string().email("Неккоректно введен Email").nonempty(),
  name: z.string().min(1).max(30).optional(),
  surname: z.string().min(1).max(30).optional(),
  password: z.string().min(8, "Минимальная длинна пароля 8 символом").max(20,"Максимальная длинна пароля 20 символов").nonempty(),
  phone:z.string().max(11)
})

export const profilePassword = z.object({
  password: z.string().min(8, "Минимальная длинна пароля 8 символом").max(20,"Максимальная длинна пароля 20 символов").nonempty(),
  confirmPassword:z.string().min(8).max(20)
}).refine((data) => data.password === data.confirmPassword, {
  message:"Пароли не совпадают",
  path:['confirmPassword']
})

export const recoveryEmail = z.object({
  email: z.string().email("Неккоректно введен Email").nonempty("Обязательное поле"),
})

export const productFormSchema = z.object({
  productId: z.string(),
  name: z.string(),
  price: z.string(),
  image: z.string(),
  color: z.string(),
  size: z.string(),
  quantity: z.string(),
})

export const makeOrderSchema = z.object({
  name: z.string().min(1).max(30).nonempty(),
  surname: z.string().min(1).max(30).nonempty(),
  phone:z.string().max(11).nonempty(),
  email: z.string().email("Неккоректно введен Email").nonempty(),
  comment: z.string().max(300,"Максимальная длинна 300 символов"),
})