"use client"
import { changePassword } from '@/shared/api/user'
import { profilePassword } from '@/shared/types/schemas'
import { Input } from '@/shared/ui'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type FormSchema = z.infer<typeof profilePassword>

  const PasswordProfile = () => {
		const {handleSubmit, register, formState:{ isDirty, isSubmitting, errors }} = useForm<FormSchema>({
			defaultValues: {
				password:'',
				confirmPassword:'',
			},
			resolver: zodResolver(profilePassword)
		})

		async function onSubmit(data: FormSchema) {
			const error = await changePassword(data)
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

export default PasswordProfile