"use client"
import { resetPassword } from '@/shared/api/auth'
import { profilePassword } from '@/shared/types/schemas'
import { Input } from '@/shared/ui'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type FormSchema = z.infer<typeof profilePassword>
interface RecoveryPasswordProps{
	email: string,
	token: string
}
const RecoveryPassword = ({email, token}: RecoveryPasswordProps) => {
		const {handleSubmit, register, formState:{ isDirty, isSubmitting, errors }} = useForm<FormSchema>({
			defaultValues: {
				password:'',
				confirmPassword:'',
			},
			resolver: zodResolver(profilePassword)
		})

		async function onSubmit(data: FormSchema) {
			const {success, error} = await resetPassword(email, token, data)
			if(success){
				redirect('/')
			}
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
				<Input registerName='password' register={register} errors={errors.password} type='password' placeholder='password' />
				<Input registerName='confirmPassword' register={register} errors={errors.confirmPassword} type='password' placeholder='confirmPassword' />
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

export default RecoveryPassword