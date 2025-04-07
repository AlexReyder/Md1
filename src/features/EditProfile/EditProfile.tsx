"use client"
import { signUp } from '@/shared/api/auth'
import { signUpSchema } from '@/shared/types/schemas'
import { UserProfileDTO } from '@/shared/types/user'
import { Input } from '@/shared/ui'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type FormSchema = z.infer<typeof signUpSchema>

  const EditProfile = ({data}:{[data: string]: UserProfileDTO}) => {
		const {name, surname, email, phone} = data;
		const {handleSubmit, register, formState:{ isDirty, isSubmitting, errors }} = useForm<FormSchema>({
			defaultValues: {
				name: name ?? "",
				surname: surname ?? "",
				phone,
				email,
			},
			resolver: zodResolver(signUpSchema)
		})

		async function onSubmit(data: FormSchema) {
			const error = await signUp(data)
			console.log(error)
			// setError(error)
		}


	return (
		<div>
			<div className='card-body wow-bg'>
				<h3 className='card-body__title'>
				Личные данные
				</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
				<Input registerName='name' register={register} errors={errors.email} type='text' placeholder='name' />
				<Input registerName='surname' register={register} errors={errors.email} type='text' placeholder='surname' />
				<Input registerName='email' register={register} errors={errors.email} type='email' placeholder='email' />
				<Input registerName='phone' register={register} errors={errors.email} type='text' placeholder='phone' />
					<div className='card-body__inner'>
						<div className='inner__top'>
							<button className='inner__btn' type='submit' disabled={!isDirty || isSubmitting}>
								{isSubmitting ? (
									<FontAwesomeIcon icon={faSpinner} spin />
								) : (
									"Сохранить"
								)}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditProfile